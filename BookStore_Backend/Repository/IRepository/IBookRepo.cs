/// <summary>
/// namespace Irepository
/// </summary>
namespace Repository.IRepository
{
    using Microsoft.AspNetCore.Http;
    using Model.ModelCLasses;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    /// <summary>
    /// inteface IBookRepo
    /// </summary>
    public interface IBookRepo
    {
        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns>all Book List</returns>
        IEnumerable<BookModel> GetAllBook();

        /// <summary>
        /// Declare Add Method.
        /// </summary>
        /// <param name="BookItem">BookItem.</param>
        /// <returns>Task.</returns>
        Task<int> AddBook(BookModel BookItem);

        string Image(IFormFile file, int id);

        
    }
}
