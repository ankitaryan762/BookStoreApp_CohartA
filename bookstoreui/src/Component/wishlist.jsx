import React, { Component } from "react"
import { Card, Button, Typography } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import IconButton from '@material-ui/core/IconButton'
import { addCustomerDetails, getcountofcartitem } from '../Service/service'
import getAllCartItem from '../Service/service'
class Wishlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    AddtoCart = (data) => {
        this.props.changeCartItems(data, 1)
    }

    render() {
        //const booksInCart = this.props.books.filter(book => this.props.cart.includes(book.bookId))
        return (
            <div className="myCart-mainDiv">
                <Card className="cartCard">
                    <div>
                        <Typography variant="h6">My Wishlist</Typography>
                        {

                            this.props.wishList.sort((a, b) => a.bookId > b.bookId ? 1 : -1).map((data) => {
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


                                                            <Button
                                                                id="remove"
                                                                variant='outlined'
                                                                onClick={() => {
                                                                    this.props.deleteCartItems(data.cartId)
                                                                }}
                                                            >Remove</Button>
                                                            <Button
                                                                id="remove"
                                                                variant='outlined'
                                                                onClick={() => {
                                                                    this.AddtoCart(data)
                                                                }}
                                                            >Add To Cart</Button>
                                                        </div>
                                                    </td>
                                                </div>

                                            </tr>
                                        </table>
                                    </div>

                                )
                            })
                        }



                    </div>
                </Card>
            </div>
        )
    }
}

export default Wishlist;