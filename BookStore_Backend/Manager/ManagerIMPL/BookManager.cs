using Manager.IManager;
using Microsoft.AspNetCore.Http;
using Model.ModelCLasses;
using Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manager.ManagerIMPL
{
    public class BookManager : IBookManager
    {
        private readonly IBookRL _bookRepository;
        public BookManager(IBookRL _bookRepository)
        {
            this._bookRepository = _bookRepository;
        }
        public Task<int> AddBook(BookCLModel entity)
        {
            return this._bookRepository.AddBook(entity);
        }

        public IEnumerable<BookCLModel> GetAllBook()
        {
            return this._bookRepository.GetAllBook();
        }

        public string Image(IFormFile file, int id)
        {
            return this._bookRepository.Image(file,id);
        }

       
    }
}
