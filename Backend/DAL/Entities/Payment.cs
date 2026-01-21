using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Entities
{
    public class Payment
    {

        public int Id { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; } = null!;
        public decimal Amount { get; set; }
        public string Method { get; set; } = "Cash"; // Card, Cash, etc.
        public DateTime PaymentDate { get; set; } = DateTime.UtcNow;

    }
}
