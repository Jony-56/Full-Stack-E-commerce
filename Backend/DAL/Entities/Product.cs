using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Entities
{
    public class Product

    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImgUrl { get; set; }
        public decimal price { get; set; }
        public int Stock { get; set; }

        public  int CategoryId { get; set; }
        public Category Category { get; set; } = null;

        public ICollection<OrderItem> Items { get; set; } = new List<OrderItem>();

        public ICollection <Cart> Carts { get; set; } = new List<Cart>();
    }
}
