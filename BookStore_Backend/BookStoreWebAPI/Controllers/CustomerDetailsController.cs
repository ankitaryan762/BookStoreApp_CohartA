using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Manager.IManager;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model.ModelCLasses;

namespace BookStoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerDetailsController : ControllerBase
    {
        private readonly ICustomerDetailsManager customerDetailsManager;

        public CustomerDetailsController(ICustomerDetailsManager customerDetailsManager)
        {
            this.customerDetailsManager = customerDetailsManager;
        }

        [Route("addaddress")]
        [HttpPost]
        public async Task<IActionResult> AddCustomerAddress(CustomerDetails customerDetails)
        {
            var result = await this.customerDetailsManager.AddCustomerAddress(customerDetails);
                return this.Ok(result);
        }

        [Route("getaddressbyemail")]
        [HttpGet]
        public IActionResult GetCustomerAddress(string EmailId)
        {
            var result =  this.customerDetailsManager.GetCustomerAddress(EmailId);
            if (result != null)
            {
                return this.Ok(result);
            }
            return BadRequest();
        }
    }
}