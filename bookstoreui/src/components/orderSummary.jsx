import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import { Card, Button } from '@material-ui/core';
import capture from '../assets/capture.jpg'
import { withRouter } from "react-router-dom";
export class OrderSummary extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="success-message-card">
                    <div className="success-image">
                        <img src={capture} />
                    </div>
                    <div className="success-message">
                        <Typography>
                            <p>hurray!!! your order is confirmed</p>
                            <span>the order id is #{this.props.orderId} save the order id for</span>
                            <p>further communication....</p>
                        </Typography>
                    </div>
                    <div>
                        <table className="summary-table">
                            <thead>
                                <tr id="tableHead">
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Admin@gmail.com</td>
                                    <td>9945673829</td>
                                    <td>Church street, Kavery Nagar ,Old Airport Road</td>
                                    {/* <td>{sessionStorage.getItem("Email")}</td>
                                    <td>{this.props.location.state.contact}</td>
                                    <td>{this.props.location.state.address}</td> */}
                                </tr>
                                <tr>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="continue-button">
                        <Button id="buttonId"
                            onClick={this.props.showMainPage}>
                            Continue Shopping</Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(OrderSummary);