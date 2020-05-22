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
        ///<summary>
        ///creating property for encryption
        ///</summary>
        public static  string EncodePasswordToBase64(string password)
        {
            try
            {
                byte[] encdata_byte = new byte[password.Length];
                encdata_byte = System.Text.Encoding.UTF8.GetBytes(password);
                string encodeddata = Convert.ToBase64String(encdata_byte);
                return encodeddata;
            }
            catch
            {
                throw new Exception("error in base64Encode" + Exception.message);
            }
        }
        ///<summary>
        ///
        ///</summary>
            
    }
}
