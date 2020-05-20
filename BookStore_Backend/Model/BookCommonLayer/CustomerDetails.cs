using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Model.ModelCLasses
{
    public class CustomerDetails
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string Email { get; set; }

        public string Name { get; set; }

        public int PhoneNumber { get; set; }

        public int PinCode { get; set; }

        public string Locality { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string LandMark { get; set; }
    }
}
