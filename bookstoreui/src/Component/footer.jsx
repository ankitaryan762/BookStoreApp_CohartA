import React, { Component } from "react"
import Pagination from '@material-ui/lab/Pagination';
import { withRouter } from 'react-router-dom';
export class Footer extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="footer">
                    <p className="p">Copyright &copy; 2020. BookStore Pvt. Ltd.</p>
            </div>
        )
    }
}
export default withRouter(Footer)