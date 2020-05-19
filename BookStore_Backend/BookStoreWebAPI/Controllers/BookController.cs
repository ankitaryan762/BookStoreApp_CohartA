using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Manager.IManager;
using Manager.ManagerIMPL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model.ModelCLasses;

namespace BookStoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookManager bookManager;

        public BookController(IBookManager bookManager)
        {
            this.bookManager = bookManager;
        }

        [Route("addbook")]
        [HttpPost]
        public async Task<IActionResult> AddBook(BookModel bookModel)
        {
            var result = await this.bookManager.AddBook(bookModel);
            if (result == 1)
            {
                return this.Ok(bookModel);
            }
            return BadRequest();
        }

        [Route("getallbook")]
        [HttpGet]
        public IActionResult GetAllBook()
        {
            IEnumerable<BookModel> books = this.bookManager.GetAllBook();
            return this.Ok(books);
        }

        [Route("imageupload")]
        [HttpPost]
        public IActionResult Image(IFormFile file, int id)
        {
            var result = this.bookManager.Image(file, id);

            return this.Ok(result);
        }

       
    }
}





