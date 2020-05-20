using Microsoft.EntityFrameworkCore;
using Model.ModelCLasses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Context
{
    public class UserDBContext : DbContext 
    {
        public UserDBContext(DbContextOptions<UserDBContext> options) : base(options)
        {

        }
        public DbSet<BookCLModel> BookContext
        {
            get; set;
        }
        public DbSet<CartCLModel> CartContext
        {
            get; set;
        }

        public DbSet<CustomerDetails> AddressContext
        {
            get; set;
        }
        public DbSet<LogInModel> LoginContext
        {
            get;set;
        }
    }
}
