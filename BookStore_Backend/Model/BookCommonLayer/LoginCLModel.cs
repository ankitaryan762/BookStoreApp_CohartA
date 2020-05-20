using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Model.ModelCLasses
{
    /// <summary>
    /// model class for login
    /// </summary>
    public class LogInModel
    {
        /// <summary>
        /// property for Email
        /// </summary>
        [Key] 
        public string Email { get; set; }

        /// <summary>
        /// property for Password
        /// </summary>
        [Required]
        public string Password { get; set; }

    }
}
