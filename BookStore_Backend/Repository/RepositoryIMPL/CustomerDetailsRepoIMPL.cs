using Model.ModelCLasses;
using Repository.Context;
using Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Repository.RepositoryIMPL
{
    public class CustomerDetailsRepoIMPL:ICustomerDetailsRepo
    {
        private readonly UserDBContext _context;
       
        public CustomerDetailsRepoIMPL(UserDBContext context)
        {
            this._context = context;
        }
        public Task<int> AddCustomerAddress(CustomerDetails address)
        {
            _context.AddressContext.Add(address);
            var result = _context.SaveChangesAsync();
            return result;
        }

        public CustomerDetails GetCustomerAddress(string EmailId)
        {
            return this._context.AddressContext.Find(EmailId);
        }
    }
}
