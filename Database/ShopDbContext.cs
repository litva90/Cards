using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cards.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace Cards.Database
{
    public class ShopDbContext : DbContext
    {
        public ShopDbContext(DbContextOptions<ShopDbContext> options) : base(options)
        {
           
        }

        public DbSet<Product> Products { get; set; }
    }
}
