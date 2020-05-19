/// <summary>
/// namespace for RepositoryIMPL
/// </summary>
namespace Repository.RepositoryIMPL
{
    using Microsoft.AspNetCore.Mvc;
    using Model.ModelCLasses;
    using Repository.Context;
    using Repository.IRepository;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
   

    /// <summary>
    /// Implementation class for ICartRepo interface
    /// </summary>
    public class CartRepoIMPL : ICartRepo
    {
        /// <summary>
        /// instance reference for UserDBContext
        /// </summary>
        private readonly UserDBContext _context;

        /// <summary>
        /// Initializes a new instance of the <see cref="CartRepository"/> class.
        /// </summary>
        /// <param name="context">context.</param>
        public CartRepoIMPL(UserDBContext context)
        {
            this._context = context;
        }

        /// <summary>
        /// Add cart item to CartContext
        /// </summary>
        /// <param name="CartItem"></param>
        /// <returns>int</returns>
        public Task<int> AddCartModel(CartModel cartModel)
        {
            this._context.CartContext.Add(cartModel);

            var result = this._context.SaveChangesAsync();
            return result;
        }

        public IQueryable GetCartContext()
        {
            var result = this._context.CartContext.Join(this._context.BookContext,
                Cart => Cart.BookId,
                Book => Book.BookId,
                (Cart, Book) =>
                new
                {
                    bookId = Book.BookId,
                    bookTitle = Book.Title,
                    authorName = Book.Author,
                    bookImage = Book.Image,
                    bookPrice = Book.Price,
                    cartId = Cart.CartId,
                    count = Cart.Count
                });
            return result;
        }

        /*
                /// <summary>
                /// Get All Cart Item from CartContext
                /// </summary>
                /// <returns></returns>
                public IEnumerable<CartModel> GetCartContext()
                {
                     return  this._context.CartContext.ToList();
                }
        */
        /// <summary>
        /// Update the number of books in cartItem
        /// </summary>
        /// <param name="OldBookDetails"></param>
        /// <param name="NewBookDetails"></param>
        /// <returns></returns>
        public async Task<int> UpdateCartModel(CartModel newCartModel)
        {
            try
            {
                var oldCartModel = await _context.CartContext.FindAsync(newCartModel.CartId);
                oldCartModel.Count = newCartModel.Count;
                if (oldCartModel.Count <= 0)
                    await DeleteCartModel(oldCartModel.BookId);
                return await this._context.SaveChangesAsync();
            }
            catch(Exception)
            {
                return -1; 
            }
        }

        /// <summary>
        /// Delete Cart Model item in CartContext
        /// </summary>
        /// <param name="cartId"></param>
        /// <returns></returns>
        public async Task<CartModel> DeleteCartModel(long cartId)
        {
            CartModel cartModel = this._context.CartContext.Find(cartId);
            if (cartModel != null)
            {
                this._context.CartContext.Remove(cartModel);
                await this._context.SaveChangesAsync();
            }
            return cartModel;

        }

        public int GetNumOfBook()
        {
            var result = this._context.CartContext.Count<CartModel>();
            return result;
        }
    }
}
