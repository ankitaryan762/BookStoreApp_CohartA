import React, { Component } from 'react';
import BookDashboard from './bookDashboard';
import Header from './header'
import dragon from '../assets/dragon.jpg'
import Footer from './footer'
import { getBook, getAllCartItem, deleteCartItemById,addCustomerDetails,getcountofcartitem, getWishList} from '../Service/service'
import OrderSummary from './orderSummary';
import MyCarts from './myCarts'
import Wishlist from './wishlist'
import {addCartItem} from '../Service/service'
import Pagination from './pagination'

class Dashboard extends Component {
        state = {
            result: [],
            cart: [],
            clickedId: [],
            movedToCart: false,
            addedToCart: [],
            cartCount:0,
            showCart:false,
            showWishList: false,
            cartItems:[],
            searchText:"",
            totalBook:[],
            addedCount:0,
            currentPage:1,
            // wishList:[],
            wishlistIds:[],
         postsPerPage:12,
        }

    paginate=(pageNumber)=>{
        this.setState({
            currentPage:pageNumber
        })
        console.log("pagenumber after", this.state.currentPage);
    }

    getBookCount = async () =>{
        let count = await getcountofcartitem()
        this.setState({addedCount:count})
    }

    func = async () => {
        console.log("test")
        let result = await getBook()
        this.setState({ result })
    }

    getWishListItems = async() => {
        let list = await getWishList()
        let ids = list.map(item=> item.bookId)
        this.setState({wishList:list, wishlistIds: ids})
    }

    componentDidMount() {
        this.func();
        this.getCartItems();
        this.getBookCount()
        this.getWishListItems()
    }


    showMainPage = () => {
        this.setState({
            showCart: false,
            showWishList:false,
            orderCompleted:false,
        })
    }

    cartIconClickedHandler = () => {
        let showMyCart = this.state.showCart;
        this.setState({
            showCart: true,
            showWishList:false,
            orderCompleted:false
        })
    }


    wlIconClickedHandler = () => {
        let showMyCart = this.state.showCart;
        this.setState({
            showCart: false,
            showWishList:true,
            orderCompleted:false
        })
    }

    completeOrder = (id) => {
        let showMyCart = this.state.showCart;
        this.setState({
            showCart: false,
            showWishList: false,
            orderCompleted:true,
            orderId: id
        })
    }
    addToCart = async (id,count) => {
        var data = {
            BookId: id,
            Count: count
        }
        
        let result = await addCartItem(data)
           this.getCartItems()
        
        this.getWishListItems()
        }

    search = (text) =>{
        this.setState({searchText:text.target.value})
    }

    getCartItems= async ()=>{
        this.getBookCount()
        
        let result  = await getAllCartItem()
        console.log(result)
        let cart = result.map(book => book.bookId)
        this.setState({cartItems: result, cart })
        
    }   
    
    deleteCartItems = async(cartid)=>  {
        let deletedResult=await deleteCartItemById(cartid)
        console.log(deletedResult)
        this.getCartItems() 
        this.getWishListItems()
    }
    priceHandler=(event)=>{
        const selection = event.target.value;
        let result = this.state.result;
        if (selection === "Price:low to high")
        {
            function compare(a, b){
            let comparison = 0
            if(a.price<b.price){
                comparison=-1
            }
                return comparison
            }
            this.setState({
                result: result.sort(compare)
            })
        }
        else{
            function compare(a, b){
                let comparison = 0
                if(a.price>b.price){
                    comparison=-1
                }
                    return comparison
                }
                this.setState({
                    result: result.sort(compare)
                })
        }
    }
    changeCartItems = async(book,count) =>{
        let deletedResult=await deleteCartItemById(book.cartId)
        this.addToCart(book.bookId,count)
    }
    
//     addCustomer =async(Name,PhoneNumber,Pincode,Locality,Address,Landmark,City)=>{
//        // let addDetails=await addCustomerDetails()
//        console.log(City)
//         const NewCustomerItem = {
//             Email: sessionStorage.getItem("Email"),
//             Name: Name,
//             PhoneNumber:PhoneNumber,
//             PinCode: Pincode,
//             Locality:Locality,
//             Address:Address,
//             City: City,
//             LandMark:Landmark
            
//     };
//     addCustomerDetails(NewCustomerItem)
// }



    renderContent = (books) =>
    {
        if(this.state.showCart)
        return <MyCarts 
        totalBook={this.totalBook}
        countCartBook={this.countCartBook}
        cartItems={this.state.cartItems} 
        deleteCartItems={this.deleteCartItems}
        changeCartItems={this.changeCartItems}
        addedCount = { this.state.addedCount}
        addCustomer={this.addCustomer}
        wishlistIds ={this.state.wishlistIds}
        completeOrder = {this.completeOrder}
        />
        if (this.state.showWishList)
        return <Wishlist 
        totalBook={this.totalBook}
        countCartBook={this.countCartBook}
        wishList={this.state.wishList} 
        deleteCartItems={this.deleteCartItems}
        changeCartItems={this.changeCartItems}
        addedCount = { this.state.addedCount}
        addCustomer={this.addCustomer}
        />
        if (this.state.orderCompleted)
        return <OrderSummary
        showMainPage={this.showMainPage}
        orderId = {this.state.orderId}
        />
    
    return <div><BookDashboard 
    // books={this.state.result.filter((book)=> book.title.includes(this.state.searchText),currentPosts)} 
    books={books}
    AddToCart={this.addToCart} 
    cart={this.state.cart} 
    addToCart={this.addToCart}
    wishList = {this.state.wishList}
    wishlistIds ={this.state.wishlistIds}
    bookCount={this.state.result.length}
    priceHandler={this.priceHandler}
    />
    <Pagination postsPerPage={this.state.postsPerPage}
            totalPosts={this.state.result.length}
            paginateNumber={this.paginate}/></div>
    }

    render() {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.result.slice(indexOfFirstPost, indexOfLastPost)
        let books=[]
        if(this.state.searchText=="")
        books=currentPosts
        else
        books=this.state.result.filter((book)=> book.title.toLowerCase().includes(this.state.searchText)||book.author.toLowerCase().includes(this.state.searchText))
            return (
                <div>
                    <div id="main">
                    <Header
                    cart={this.state.cart} 
                    cartCount={this.state.cartCount}
                    cartIconClickedHandler={this.cartIconClickedHandler}
                    wlIconClickedHandler={this.wlIconClickedHandler}
                    showMainPage={this.showMainPage}
                    search={this.search}
                    wishlistIds ={this.state.wishlistIds}
                    //movedToCartFunc={this.setMoveToCart}
                     />
                
               {this.renderContent(books)}
                </div>
                
                <div>
                    <Footer />
                    </div>
                    </div>
            )
        }

    }

export default Dashboard;