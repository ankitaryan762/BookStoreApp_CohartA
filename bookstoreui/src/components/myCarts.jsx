import React, { Component } from "react"
import { Card, Button, Typography } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import IconButton from '@material-ui/core/IconButton'
import { addCustomerDetails, getcountofcartitem,getCustomerDetailsByEmailId } from '../Service/service'
import { withRouter } from "react-router-dom";
import getAllCartItem from '../Service/service'
export class MyCarts extends Component {
    constructor(props) {
        super(props)
        console.log(props.cartItems)
        this.state = {
            cart: [],
            flag: false,
            open: false,
            Name: "",
            PhoneNumber: 0,
            Pincode: 0,
            Locality: "",
            City: "",
            Address: "",
            LandMark: "",
            Type: "",
            clicks: 0,
            orderId: 0,
            summary: false,
            customerDetails:[],
            showFilledAddress:false
        }
    }

    // placeOrderHandler = () => {
    //     // let showCustomerDetails = this.state.open;
    //     this.setState({
    //         // open: !showCustomerDetails
    //     })
    // }

    summaryHandler = () => {
        this.props.completeOrder(this.state.orderId)
    }
    handleCustomerDetails = () => {
        this.setState({
            open: true
        })
    }
    handleSummaryDetails = () => {
        this.setState({
            summary: true
        })
    }
    nameHandler = (event) => {
        const Name = event.target.value;
        console.log("name", Name);
        this.setState({
            Name: Name,
        })
    }
    phoneNumberHandler = (event) => {
        const PhoneNumber = event.target.value;
        console.log('phoneNumber', PhoneNumber)
        this.setState({
            PhoneNumber: PhoneNumber
        })
    }

    pincodeHandler = (event) => {
        const Pincode = event.target.value;
        console.log("pincode", Pincode);
        this.setState({
            Pincode: Pincode
        })
    }
    localityHandler = (event) => {
        const Locality = event.target.value;
        console.log('locality', Locality)
        this.setState({
            Locality: Locality
        })
    }

    cityHandler = (event) => {
        const City = event.target.value;
        console.log("city", City);
        this.setState({
            City: City,
        })
    }
    addressHandler = (event) => {
        const Address = event.target.value;
        console.log('address', Address)
        this.setState({
            Address: Address
        })
    }
    landmarkHandler = (event) => {
        const Landmark = event.target.value;
        console.log("landmark", Landmark);
        this.setState({
            LandMark: Landmark,
        })
    }
    typeHandler = (event) => {
        const Type = event.target.value;
        console.log('type', Type)
        this.setState({
            Type: Type
        })
    }

    IncrementItem = (data) => {
        if (data.count + 1 > 5)
            return
        this.props.changeCartItems(data, data.count + 1)
        // this.getBookCount()
    }
    decreaseItem = (data) => {
        if (data.count == 1)
            return
        this.props.changeCartItems(data, data.count - 1)
        // this.getBookCount()
    }

    addCustomer = async (Name, PhoneNumber, Pincode, Locality, Address, LandMark, City) => {

        const NewCustomerItem = {
            Email: sessionStorage.getItem("Email"),
            Name: Name,
            PhoneNumber: PhoneNumber,
            PinCode: Pincode,
            Locality: Locality,
            Address: Address,
            City: City,
            LandMark: LandMark

        };
        let orderId = await addCustomerDetails(NewCustomerItem)
        orderId = new Date().getTime()

        this.setState({ orderId: orderId })
    }
    placeOrderHandler = () => {
        let showCustomerDetails = this.state.open;
        this.setState({
            open: !showCustomerDetails,
            showFilledAddress: true
        })
    }

    fetchAddress = () =>{
        let Email = sessionStorage.getItem('Email');
        let customerDetails = this.state.customerDetails;
        console.log(Email)
        getCustomerDetailsByEmailId(Email).then(res=>{
            //customerDetails.push(res.data)
            this.setState({
                customerDetails:res.data,
            })
            
            console.log(res);
        })
    }

    componentDidMount(){
        this.fetchAddress()
    }

    render() {
        //const booksInCart = this.props.books.filter(book => this.props.cart.includes(book.bookId))
        let customerDetails = this.state.customerDetails

        return (
            <div className="myCart-mainDiv">
                <Card className="cartCard">
                    <div>
                        <Typography variant="h6">My Cart ({this.props.addedCount - this.props.wishlistIds.length})</Typography>
                        {

                            this.props.cartItems.sort((a, b) => a.bookId > b.bookId ? 1 : -1).map((data) => {
                                return (

                                    <div>
                                        <table>
                                            <tr className="book-details">
                                                <td className="book-details">
                                                    <img className="imgStyle" src={data.bookImage} />
                                                </td>
                                                <div>
                                                    <td className="book-details">
                                                        <Typography variant="h6" >{data.bookTitle}</Typography>
                                                        <Typography>{data.authorName}</Typography>
                                                        <Typography><div className="money-div">
                                                            ₹
                                                        <div>{data.bookPrice}</div>
                                                        </div></Typography>
                                                        <div>
                                                        </div>
                                                        <div className="icons-cart-div">
                                                            <IconButton id="increment-decrement"
                                                                onClick={() => this.decreaseItem(data)}>
                                                                <RemoveCircleOutlineIcon />
                                                            </IconButton>
                                                            <div className="count-div-cart">{data.count}</div>
                                                            <IconButton id="increment-decrement"
                                                                onClick={() => this.IncrementItem(data)}
                                                            >
                                                                <AddCircleOutlineIcon />
                                                            </IconButton>

                                                            <Button
                                                                id="remove"
                                                                variant='outlined'
                                                                onClick={() => {
                                                                    this.props.deleteCartItems(data.cartId)
                                                                }}
                                                            >Remove</Button>
                                                        </div>
                                                    </td>
                                                </div>

                                            </tr>
                                        </table>
                                    </div>

                                )
                            })
                        }
                        {
                            this.props.addedCount > 0 ? (
                                <div className="placeOrder">
                                    <Button id="placeOrder"
                                        onClick={this.placeOrderHandler}>
                                        Place Order</Button>
                                </div>
                            ) : (<div></div>)
                        }


                    </div>
                </Card>
                {
                    !this.state.open ? (
                        <Card className="orderSummry"
                            onClick={this.handleCustomerDetails}
                        >
                            Customer Details
                        </Card>
                    ) : (
                            <Card className="cartCard">
                                <div className="outer-div">
                                    <span className="customer-details">Customer Details</span>
                                    {
                                    this.state.open ?
                                         ( 
                                             <>
                                    <div className="div-field-styles">
                                        <input type="text" placeholder="Name" className="field-styles"
                                            onChange={this.nameHandler}
                                            value={customerDetails.name}
                                        />
                                        <input type="text" placeholder="Phone no." className="field-styles"
                                            onChange={this.phoneNumberHandler}
                                            value={customerDetails.phoneNumber}
                                        />
                                    </div>
                                    <div className="div-field-styles">
                                        <input type="text" placeholder="Pincode" className="field-styles"
                                            onChange={this.pincodeHandler}
                                            value={customerDetails.pinCode}
                                        />
                                        <input type="text" placeholder="Locality" className="field-styles"
                                            onChange={this.localityHandler}
                                            value={customerDetails.locality}
                                            />
                                    </div>
                                    <div className="div-field-styles">
                                        <input type="text" placeholder="Address" className="field-styles-address"
                                            onChange={this.addressHandler}
                                            value={customerDetails.address}
                                            />
                                    </div>
                                    <div className="div-field-styles">
                                        <input type="text" placeholder="City/Town" className="field-styles"
                                            onChange={this.cityHandler} 
                                            value={customerDetails.city}
                                            />
                                        <input type="text" placeholder="Landmark" className="field-styles"
                                            onChange={this.landmarkHandler} 
                                            value={customerDetails.landMark}
                                            />
                                    </div>
                                    <span className="customer-details">Type</span>
                                    <div className="type-div">
                                        <label id="label">Home</label>
                                        <input type="radio" className="radio-styles" />
                                        <label id="label">Work</label>
                                        <input type="radio" className="radio-styles" />
                                        <label id="label">Other</label>
                                        <input type="radio" />
                                    </div>
                                    <div>
                                        {
                                            this.props.addedCount > 0 ? (
                                                <Button id="buttonStyles"
                                                    onClick={() => this.addCustomer(this.state.Name, this.state.PhoneNumber, this.state.Pincode, this.state.Locality, this.state.Address, this.state.LandMark, this.state.City)}
                                                // onClick={this.summaryHandler}
                                                >Continue</Button>
                                            ) : (<div></div>)
                                        }
                                    </div>
                                
                                </>
                                         ):null
                                    }
                                        </div>
                            </Card>
                        )
                }

                {
                    !this.state.summary ? (
                        <Card className="orderSummry"
                            onClick={this.handleSummaryDetails}
                        >
                            Order Summary
                        </Card>
                    ) : (
                            <Card className="cartCard"
                                onClick={this.handleClick}
                            >
                                Order Summary
                                {
                                    this.props.cartItems.map((data) => {
                                        return (

                                            <div>
                                                <table>
                                                    <tr className="book-details">
                                                        <td className="book-details">
                                                            <img className="imgStyle" src={data.bookImage} />
                                                        </td>
                                                        <div>
                                                            <td className="book-details">
                                                                <Typography variant="h6" >{data.bookTitle}</Typography>
                                                                <Typography>{data.authorName}</Typography>
                                                                <Typography><div className="money-div">
                                                                    ₹
                                                        <div>{data.bookPrice}</div>
                                                                </div>
                                                                </Typography>
                                                            </td>
                                                        </div>
                                                    </tr>
                                                </table>
                                            </div>
                                        )

                                    })
                                }
                                <div className="placeOrder">
                                    <Button id="placeOrder"
                                        onClick={this.summaryHandler}>
                                        Checkout</Button>
                                </div>
                                {/* {this.state.orderId} */}
                            </Card>
                        )}
                {/* <Card className="orderSummry">
                                Order Id
                                <div>
                                {this.state.orderId}
                                </div>
                            </Card> */}
            </div>
        )
    }
}

export default withRouter(MyCarts);