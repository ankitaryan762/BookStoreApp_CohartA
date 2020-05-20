


namespace NUnitBookStoreTestProject.TestBookController
{ 
    using NUnit.Framework;
    using Repository.IRepository;
    using Moq;
    using Manager.ManagerIMPL;
    using BookStoreWebAPI.Controllers;
    using Model.ModelCLasses;

    [TestFixture]
    public class BookControllerTest 
    {
        [TestCase]
        public void GetAllBookTest()
        {
            var bookrepomock = new Mock<IBookRepo>();
            var bookmangermock = new BookManager(bookrepomock.Object);
            var BookControllermock = new BookController(bookmangermock);
            var result = BookControllermock.GetAllBook();
            Assert.NotNull(result);
        }

        [TestCase]
        public void AddBookTest()
        {
            var bookrepomock = new Mock<IBookRepo>();
            var bookmangermock = new BookManager(bookrepomock.Object);
            var BookControllermock = new BookController(bookmangermock);
            BookModel bookModel = new BookModel()
            {
                BookId = 0,
                Author = "sumit",
                Title = "Sumit-Biograpy",
                AvailableBooks = 5,
                Price = 50000,
                Image = "imageurl",
                Description = "asdfghj wertyu sdvb tgb ikm ",
                Ratings = "5 star",
                Review = "wqer  dvzs sd rht tyjh nfg " 
            };
            var result = BookControllermock.AddBook(bookModel);
            Assert.NotNull(result);
        }
    }
}