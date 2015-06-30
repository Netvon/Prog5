using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1._2_telefoonboek.uitwerking
{
    public class Person : IPerson
    {
        public string FirstName { get; set; }
        public string TelephoneNumber { get; set;  }
        public string LastName { get; set; }
    }
}
