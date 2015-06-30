using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1._1_calculator.uitwerking
{
    public interface IAgeCalculator
    {
        bool ParseInput(string input, out DateTime result);

        int CalculateAge(DateTime dateOfBirth);
    }
}
