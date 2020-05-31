import axios from 'axios';

//bookcontext
//no-arg parameter
//returns array of book items(bookmodel)
export async function getBook() {
    try {
        const res = await axios.get(process.env.REACT_APP_BASE_URL + "/Book/getallbook")
        return res.data
    }
    catch (error) {
        console.log(error)
    }
}

//cartcontext
//returns array of cart items(used join in backend)
export async function getAllCartItem() {
    try {
        const result = await axios.get(process.env.REACT_APP_BASE_URL + "/Cart/getcartcontext")
        return result.data.filter(cartItem => cartItem.count > 0)
    }
    catch (error) {
        console.log(error)
    }
}

export async function getWishList() {
    try {
        const result = await axios.get(process.env.REACT_APP_BASE_URL + "/Cart/getcartcontext")
        return result.data.filter(cartItem => cartItem.count == -1)
    }
    catch (error) {
        console.log(error)
    }
}


//parameter-> CartModel obj

export async function addCartItem(NewCartItem) {
    try {
        var headers = {
            'Content-Type': 'application/json'
        };
        return await axios.post(process.env.REACT_APP_BASE_URL + "/Cart/addcartmodel", NewCartItem, { headers: headers })
            .then(response => {
                return response
            })
    }
    catch (error) {
        console.log("error while adding new cart items" + error)
        return Promise.resolve(false)
    }
}

// parameter -> CartModelwith changed count value and cartid only

//parameter CartId string type
export async function deleteCartItemById(cartid) {
    const result = await axios.delete(process.env.REACT_APP_BASE_URL + "/Cart/deletecartmodel?id=" + cartid)
    return result.data
}


export async function getcountofcartitem() {
    try {
        const result = await axios.get(process.env.REACT_APP_BASE_URL + "/Cart/countofbook")
        return result.data
    }
    catch (error) {
        return 0
    }

}

//end of cartcontext

//customeraddressdetails
//parameter -> string emailid
//return one customerdetailsmodel object
export async function getCustomerDetailsByEmailId(EmailId) {
    try {
        var headers = {
            'Content-Type': 'application/json'
        };
        return await axios.get(process.env.REACT_APP_BASE_URL + "/CustomerDetails/getaddressbyemail?EmailId=" + EmailId)
            .then(response => {
                return response
            })
    }
    catch (error) {
        console.log("error fetching a customer's address details by email id" + error)
        return Promise.resolve(false)
    }
}


//parameter -> one new CustomerModel obj
export async function addCustomerDetails(NewCustomerItem) {
    console.log(NewCustomerItem)
    var headers = {
        'Content-Type': 'application/json-patch+json'
    };
    let object = JSON.stringify(NewCustomerItem)
    try {
        let orderId = await axios.post(process.env.REACT_APP_BASE_URL + "/CustomerDetails/addaddress", object, { headers })
        return orderId
    }
    catch (error) {
        return -1
    }
}

//end of customeraddressdetails

const loginURL = process.env.REACT_APP_BASE_URL + '/Login/login';

export const LoginRequestMethod = async (data) => {
    try{
    const response = await axios.post(loginURL, data);
    return response;
    }
    catch(error){
        console.log(error)
    }
}