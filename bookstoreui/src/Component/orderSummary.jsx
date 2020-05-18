import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import { Card, Button } from '@material-ui/core';
import capture from '../assets/capture.jpg'
import { withRouter } from "react-router-dom";
export class OrderSummary extends Component {



    constructor(props) {
        super(props);
        console.log(this.props)
    }
    handleClick = () => {
        this.props.history.push('/dashboard');
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
                            <span>the order id is #{this.props.location.state.orderId} save the order id for</span>
                            <p>further communication....</p>
                        </Typography>
                    </div>
                    <div>
                        <table className="summary-table">
                            <thead>
                                <tr style={styles.tableHead} className=".table-head">
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{sessionStorage.getItem("Email")}</td>
                                    <td>{this.props.location.state.contact}</td>
                                    <td colspan='3'>hurray!!! your order is confirmed the order id#{this.props.location.state.orderId} is  save the order id for
                        further communication...</td>
                                </tr>
                                <tr>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="continue-button">
                        <Button id="buttonId"
                            onClick={this.handleClick}>
                            Continue Shopping</Button>
                    </div>
                </div>
            </div>
        )
    }
}
const styles = {
    card: {
        height: 800,
        width: 620
    },
    tableHead: {
        backgroundColor: '#c9cccf',
    },
}
export default withRouter(OrderSummary);