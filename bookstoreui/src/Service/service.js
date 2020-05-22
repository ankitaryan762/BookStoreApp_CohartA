import axios from 'axios';
require('dotenv').config();
const url="https://localhost:44381/api/Login/login";

//bookcontext
//no-arg parameter
//returns array of book items(bookmodel)
export async function getBook(){
    const res = await axios.get(process.env.REACT_APP_BASE_URL || "https://localhost:44381/api/Book/getallbook")
    return res.data
}

//cartcontext
//no-arg paramter
//returns array of cart items(used join in backend)
export async function getAllCartItem(){
       const result = await axios.get(process.env.REACT_APP_BASE_URL || "https://localhost:44381/api/Cart/getcartcontext")
       return result.data.filter(cartItem => cartItem.count>0)
}

export async function getWishList(){
    const result = await axios.get(process.env.REACT_APP_BASE_URL || "https://localhost:44381/api/Cart/getcartcontext")
    return result.data.filter(cartItem => cartItem.count==-1)
}


//parameter-> CartModel obj

export async function addCartItem(NewCartItem) {
    try {
        var headers= {
            'Content-Type': 'application/json'
        };
        return await axios.post(process.env.REACT_APP_BASE_URL || "https://localhost:44381/api/Cart/addcartmodel", NewCartItem,{headers:headers} )
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
        const result=await axios.delete(process.env.REACT_APP_BASE_URL || "https://localhost:44381/api/Cart/deletecartmodel?id="+cartid)
            return result.data
        }


export async function getcountofcartitem(){
    try{
    const result = await axios.get(process.env.REACT_APP_BASE_URL || "https://localhost:44381/api/Cart/countofbook")
    return result.data
    }
    catch(error)
    {
        return 0
    }
    
 }

//end of cartcontext

//customeraddressdetails
//parameter -> string emailid
//return one customerdetailsmodel object
export async function getCustomerDetailsByEmailId(EmailId) {
    try {
        var headers= {
            'Content-Type': 'application/json'
        };
        return await axios.get(process.env.REACT_APP_BASE_URL || "https://localhost:44381//api/CustomerDetails/getaddressbyemail?EmailId="+EmailId)
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
    var headers= {
        'Content-Type': 'application/json-patch+json'
    };
    let object = JSON.stringify(NewCustomerItem)
    try{
    let orderId = await axios.post(process.env.REACT_APP_BASE_URL || "https://localhost:44381/api/CustomerDetails/addaddress", object,{headers} )
    return orderId    
}
    catch(error){
        return -1
    }
}
 
//end of customeraddressdetails

const loginURL='https://localhost:44381/api/Login/login';

export const LoginRequestMethod = async (data)=>{
    const response = await axios.post(process.env.REACT_APP_BASE_URL || loginURL,data);
    return response;
}