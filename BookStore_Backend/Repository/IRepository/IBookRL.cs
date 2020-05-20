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
    public interface IBookRL
    {
        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns>all Book List</returns>
        IEnumerable<BookCLModel> GetAllBook();

        /// <summary>
        /// Declare Add Method.
        /// </summary>
        /// <param name="BookItem">BookItem.</param>
        /// <returns>Task.</returns>
        Task<int> AddBook(BookCLModel BookItem);

        string Image(IFormFile file, int id);

        
    }
}
