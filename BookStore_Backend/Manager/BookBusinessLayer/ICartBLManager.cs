﻿using Microsoft.AspNetCore.Mvc;
using Model.ModelCLasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Manager.IManager
{
    public interface ICartBLManager
    {
        /// <summary>
        /// Declare GetAll Methods.
        /// </summary>
        /// <returns>AllEmployee.</returns>
        IQueryable GetCartContext();

        /// <summary>
        /// Declare Add Method.
        /// </summary>
        /// <param name="entity">entity.</param>
        /// <returns>Task.</returns>
        Task<int> AddCartModel(CartCLModel BookItem);

        /// <summary>
        /// Declare Update method.
        /// </summary>
        /// <param name="dbEntity">dbEntity.</param>
        /// <param name="entity">entity.</param>
        Task<int> UpdateCartModel(CartCLModel newCartModel);

        /// <summary>
        /// Declare Delete method.
        /// </summary>
        /// <param name="entity">entity.</param>
        Task<CartCLModel> DeleteCartModel(long BookId);
        int GetNumOfBook();
    }
}