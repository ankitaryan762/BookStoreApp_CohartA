﻿/// <summary>
/// namespace for ModelClass
/// </summary>
namespace Model.ModelCLasses
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// Model Class for Book
    /// </summary>
    public class BookModel
    {
        /// <summary>
        /// property for value id
        /// </summary>
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long BookId { get; set; }

        /// <summary>
        /// property for name title of the book
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// property for the Authors of the book
        /// </summary>
        public string Author { get; set; }

        /// <summary>
        /// property for the image of the book
        /// </summary>
        public string Image { get; set; }

        /// <summary>
        /// property for the price of the book
        /// </summary>
        public string Price { get; set; }

        /// <summary>
        /// property for total number of available book
        /// </summary>
        public int AvailableBooks { get; set; }

        /// <summary>
        /// property for the description of the book
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// properrty for the ratings 
        /// </summary>
        public string Ratings { get; set; }

        /// <summary>
        /// property for the Reviews
        /// </summary>
        public string Review { get; set; }

    }
}
