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
        private readonly IBookRepo _bookRepository;
        public BookManager(IBookRepo _bookRepository)
        {
            this._bookRepository = _bookRepository;
        }
        public Task<int> AddBook(BookModel entity)
        {
            return this._bookRepository.AddBook(entity);
        }

        public IEnumerable<BookModel> GetAllBook()
        {
            return this._bookRepository.GetAllBook();
        }

        public string Image(IFormFile file, int id)
        {
            return this._bookRepository.Image(file,id);
        }

       
    }
}
