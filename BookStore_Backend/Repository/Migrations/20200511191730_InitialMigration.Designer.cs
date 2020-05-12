﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Repository.Context;

namespace Repository.Migrations
{
    [DbContext(typeof(UserDBContext))]
   
    [Migration("20200511191730_InitialMigration")]
    partial class InitialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Model.ModelCLasses.BookModel", b =>
                {
                    b.Property<long>("BookId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Author");

                    b.Property<int>("AvailableBooks");

                    b.Property<string>("Description");

                    b.Property<string>("Image");

                    b.Property<int>("Price");

                    b.Property<string>("Ratings");

                    b.Property<string>("Review");

                    b.Property<string>("Title");

                    b.HasKey("BookId");

                    b.ToTable("BookContext");
                });

            modelBuilder.Entity("Model.ModelCLasses.CartModel", b =>
                {
                    b.Property<long>("CartId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long>("BookId");

                    b.Property<int>("Count");

                    b.HasKey("CartId");

                    b.ToTable("CartContext");
                });

            modelBuilder.Entity("Model.ModelCLasses.CustomerDetails", b =>
                {
                    b.Property<string>("email")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("address");

                    b.Property<string>("city");

                    b.Property<string>("landMark");

                    b.Property<string>("locality");

                    b.Property<string>("name");

                    b.Property<string>("password");

                    b.Property<int>("phoneNumber");

                    b.Property<int>("pinCode");

                    b.HasKey("email");

                    b.ToTable("AddressContext");
                });
            modelBuilder.Entity("Model.ModelCLasses.LoginModel", b =>
                {
                    b.Property<string>("Email")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Password");

                    b.HasKey("Email");

                    b.ToTable("LoginContext");
                });
#pragma warning restore 612, 618
        }
    }
}
