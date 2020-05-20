using Manager.IManager;
using Microsoft.AspNetCore.Mvc;
using Model.ModelCLasses;
using Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Manager.ManagerIMPL
{
   public class CartManager : ICartManager
    {
        private readonly ICartRepo _cartRepo;
        public CartManager(ICartRepo cartRepo)
        {
            this._cartRepo = cartRepo;
        }

        public Task<int> AddCartModel(CartCLModel cartModel)
        {
            return this._cartRepo.AddCartModel(cartModel);
        }

        public Task<CartCLModel> DeleteCartModel(long BookId)
        {
            var result = this._cartRepo.DeleteCartModel(BookId);
            return result;
        }

        public IQueryable GetCartContext()
        {
            return this._cartRepo.GetCartContext();
        }

        public async Task<int> UpdateCartModel(CartCLModel newCartModel)
        {
            return await this._cartRepo.UpdateCartModel(newCartModel);
        }

        public int GetNumOfBook()
        {
            return this._cartRepo.GetNumOfBook();
        }
    }
}
