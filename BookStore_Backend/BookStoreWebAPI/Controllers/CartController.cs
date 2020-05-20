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
    public class CartController : ControllerBase
    {
        private readonly ICartBLManager _cartManager;

        public CartController(ICartBLManager cartManager)
        {
            this._cartManager = cartManager;
        }

        // GET: api/Cart
        [Route("getcartcontext")] 
        [HttpGet]
        public IQueryable GetCartContext()
        {
            var cartContext = this._cartManager.GetCartContext();
            return cartContext;
        }

        // POST: api/Cart
        [Route("addcartmodel")]
        [HttpPost]
        public async Task<IActionResult> AddCartModel(CartCLModel bookModel)
        {
            var result = await this._cartManager.AddCartModel(bookModel);
                return this.Ok(result);
        }


        // PUT: api/Cart
        [Route("updatecartmodel")]
        [HttpPut]
        public async Task<IActionResult> UpdateCartModel(CartCLModel cartModelnew)
        {
            var result = await this._cartManager.UpdateCartModel(cartModelnew);
            if (result==0)
                return BadRequest(ModelState);
            else
                return this.Ok(cartModelnew);
        }


        // DELETE: api/Cart/5
        [Route("deletecartmodel")]
        [HttpDelete]
        public async Task<CartCLModel> DeleteCartModel(long id)
        {
            var result = await this._cartManager.DeleteCartModel(id);
            return result;
        }

        [Route("countofbook")]
        [HttpGet]
        public IActionResult GetNumOfBook()
        {
            var result = this._cartManager.GetNumOfBook();

            return this.Ok(result);
        }

    }
}




