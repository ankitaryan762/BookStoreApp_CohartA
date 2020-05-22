import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

class BookDashboard extends Component {

    constructor(props) {
        super(props)
        console.log(props.cart)
        this.state = {
        }
    }
    // displayButton(id) {
    //     if (this.props.cart.includes(id)) {

    //         return (
    //             <CardActions>
    //                 <button className="add-to-cart">Added to cart</button>
    //             </CardActions>
    //         )
    //     }
    //     else {

    //         return (

    //             <CardActions>
    //                 <span  className="card-add">
    //                 <Button id="MuiButton-outlined"
    //                     onClick={() => this.props.AddToCart(id)}
    //                     variant='outlined'
    //                     color='default'
    //                 > Add to cart</Button>
    //                 </span>
    //                 <span className="cartWish">
    //                 <Button
    //                     className="cartWish"
    //                     onClick={()=> this.props.AddToWishlist(id)}
    //                     variant='outlined'
    //                     color='default'
    //                 > Wishlist</Button>
    //                 </span>
    //             </CardActions>
    //         );
    //     }
    // }

    render() {
        return (
            <div>
                <div className='title-div'>
                    <Typography variant='h6'>
                        Books<span className="font-style-dashboard">({this.props.bookCount} items)</span>
                        </Typography>
                    <div>
                        <select className='sort' >
                            <option selected>Sort By Relevance</option>
                            <option>Price:low to high</option>
                            <option>Price:high to low</option>
                            <option>Newest Arrivals</option>
                        </select>
                    </div>
                </div>
                <div className='display-books'>
                    {
                        this.props.books.map((data) => {
                            return (
                                <Card className='note-card' >
                                    <Tooltip title={data.description}>
                                        <div className="image-div" >
                                            <img className="img-style-dashboard" src={data.image}></img>
                                        </div>
                                    </Tooltip>

                                    <CardContent id='card-detail'>
                                        <Typography variant="h7" component="h4">
                                            {data.title}
                                        </Typography>
                                        <Typography>
                                            <span className="fontsize">by {data.author}</span>
                                        </Typography>
                                        <Typography component="h4">
                                            <span className="font-size-rs">₹{data.price}</span>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    {
                                        (this.props.cart.includes(data.bookId) || this.props.wishlistIds.includes(data.bookId) ) ?
                                                    <button className="add-to-cart"
                                                    //onClick={()=>{this.props.addToCart(data.bookId)}}
                                                    >
                                                       {this.props.cart.includes(data.bookId)? "Added to cart" : "Added to Wishlist" }
                                                    </button>:
                                                     <>
                                                    <span  className="card-add">
                                                    <Button id="MuiButton-outlined"
                                                        onClick={() => this.props.addToCart(data.bookId,1)}
                                                        variant='outlined'
                                                        color='default'
                                                    > Add to cart</Button>
                                                    </span>
                                                    
                                                    <span className="cartWish">
                                                    <Button
                                                        id="btn-wish"
                                                        className="cartWish"
                                                        onClick={()=> this.props.addToCart(data.bookId,-1)}
                                                        variant='outlined'
                                                        color='default'
                                                    > Wishlist</Button>
                                                    </span>
                                                    </>
                                    }
                                                </CardActions>
                                            );
                                        }
                                        this.displayButton(data.bookId)
                                    }
                                </Card>
                            )
                        })
                    }

                </div>
            </div>
        )

    }

}
export default BookDashboard;