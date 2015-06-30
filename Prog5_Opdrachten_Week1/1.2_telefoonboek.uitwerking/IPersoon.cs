using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1._2_telefoonboek.uitwerking
{
    public interface IPerson
    {
        String FirstName { get; set; }

        String TelephoneNumber { get; set; }

        String LastName { get; set; }
    }
}
