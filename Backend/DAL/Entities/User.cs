using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }


        public ICollection<Order> Orders { get; set; }= new List<Order> ();

        public ICollection <Cart> Carts { get; set; } = new List<Cart> ();
    }
}
