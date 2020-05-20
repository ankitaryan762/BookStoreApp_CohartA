using Microsoft.AspNetCore.Http;
using Model.ModelCLasses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manager.IManager
{
   public interface IBookManager
    {
        IEnumerable<BookCLModel> GetAllBook();
        Task<int> AddBook(BookCLModel entity);
        string Image(IFormFile file, int id);
        
    }
}
