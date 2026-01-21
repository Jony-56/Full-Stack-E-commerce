using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime DateTime { get; set; }= DateTime.Now;
        public string Status { get; set; }

        public int UserId { get; set; }
        public User User { get; set; } = null;

        public int PaymentId { get; set; }
        public Payment Payment { get; set; } = null;

        public ICollection <OrderItem> OrderItems { get; set; }= new List<OrderItem>();

    }
}
