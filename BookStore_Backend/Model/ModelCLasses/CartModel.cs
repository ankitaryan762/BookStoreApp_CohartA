﻿/// <summary>
/// namespace for modelclass
/// </summary>
namespace Model.ModelCLasses
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// model class for CartModel
    /// </summary>
    public class CartModel
    {
        /// <summary>
        /// property for CartId
        /// </summary>
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long CartId { get; set; }

        /// <summary>
        /// property for BookId.
        /// </summary>
        public long BookId { get; set; }

        /// <summary>
        /// property for count i.e number of books selected.
        /// </summary>
        public int Count { get; set; }
    }
}
