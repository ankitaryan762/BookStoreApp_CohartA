using Manager.IManager;
using Model.ModelCLasses;
using Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manager.ManagerIMPL
{
    public class CustomerDetailsManager :ICustomerDetailsManager
    {
        private readonly ICustomerDetailsRepo customerDetailsRepo;
        public CustomerDetailsManager(ICustomerDetailsRepo customerDetailsRepo)
        {
            this.customerDetailsRepo = customerDetailsRepo;
        }

        public Task<int> AddCustomerAddress(CustomerDetails address)
        {
            return this.customerDetailsRepo.AddCustomerAddress(address);
        }

        public CustomerDetails GetCustomerAddress(string EmailId)
        {
            return this.customerDetailsRepo.GetCustomerAddress(EmailId);
        }
    }
}
