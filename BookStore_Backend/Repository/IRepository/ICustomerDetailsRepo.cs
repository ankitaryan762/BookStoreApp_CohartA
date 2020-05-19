using Model.ModelCLasses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Repository.IRepository
{
    public interface ICustomerDetailsRepo
    {
        Task<int> AddCustomerAddress(CustomerDetails address);
        CustomerDetails GetCustomerAddress(string EmailId);
    }
}
