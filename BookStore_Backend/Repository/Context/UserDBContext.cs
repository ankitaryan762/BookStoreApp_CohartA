﻿using Microsoft.EntityFrameworkCore;
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
        public DbSet<BookModel> BookContext
        {
            get; set;
        }
        public DbSet<CartModel> CartContext
        {
            get; set;
        }
        public DbSet<LogInModel> LoginContext
        {
            get;set;
        }
    }
}
