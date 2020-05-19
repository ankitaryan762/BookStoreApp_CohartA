using Model.ModelCLasses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manager.IManager
{
    public interface ICustomerDetailsManager
    {
        Task<int> AddCustomerAddress(CustomerDetails address);
        CustomerDetails GetCustomerAddress( string EmailId);
    }
}
