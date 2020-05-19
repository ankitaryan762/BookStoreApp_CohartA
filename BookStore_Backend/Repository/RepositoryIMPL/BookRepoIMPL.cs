/// <summary>
/// namespace for RepositoryIMPL
/// </summary>
namespace Repository.RepositoryIMPL
{

    using CloudinaryDotNet;
    using CloudinaryDotNet.Actions;
    using Microsoft.AspNetCore.Http;
    using Model.ModelCLasses;
    using Repository.Context;
    using Repository.IRepository;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    /// <summary>
    /// implementation class for IBookRepo Interface
    /// </summary>
    public class BookRepoIMPL : IBookRepo
    {
        /// <summary>
        /// instance reference for UserDBContext
        /// </summary>
        private readonly UserDBContext _context;

        /// <summary>
        /// Initializes a new instance of the <see cref="BookRepoIMPL"/> class.
        /// </summary>
        /// <param name="context">context.</param>
        public BookRepoIMPL(UserDBContext context)
        {
            this._context = context;
        }

        /// <summary>
        /// method to Add book into BookContext of DBContext
        /// </summary>
        /// <param name="BookItem"></param>
        /// <returns></returns>
        public Task<int> AddBook(BookModel BookItem)
        {
            this._context.BookContext.Add(BookItem);
            var result = this._context.SaveChangesAsync();
            return result;
        }

        /// <summary>
        /// method to fetch all the book from BookContext
        /// </summary>
        /// <returns></returns>
        public IEnumerable<BookModel> GetAllBook()
        {
            return this._context.BookContext.ToList();

        }

        public string Image(IFormFile file, int id)
        {
            if (file == null)
            {
                return "Empty";
            }
            var stream = file.OpenReadStream();
            var name = file.FileName;
            Account account = new Account("ankitaryan", "182184258124348", "ahm3BHF__A_lmnOowaNhWCJSW0M");
            Cloudinary cloudinary = new Cloudinary(account);
            var uploadParams = new ImageUploadParams()
            {
                File = new FileDescription(name, stream)
            };
            ImageUploadResult uploadResult = cloudinary.Upload(uploadParams);
            cloudinary.Api.UrlImgUp.BuildUrl(String.Format("{0}.{1}", uploadResult.PublicId, uploadResult.Format));
            var data = this._context.BookContext.Where(t => t.BookId == id).FirstOrDefault();
            data.Image = uploadResult.Uri.ToString();
            try
            {
                var result = this._context.SaveChanges();
                return data.Image;
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

       
    }
}
