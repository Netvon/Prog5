using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.uitwerking
{
    public class AgeCalculator : IAgeCalculator
    {
        /// <summary>
        /// Controlleer of de input een datum is. 
        /// Geef als return value true (wel een datum) of false (geen datum).
        /// Maak gebruik van de 'out' param om het resultaat terug te geven.
        /// </summary>
        /// <param name="input"></param>
        /// <param name="result"></param>
        /// <returns></returns>
        public bool ParseInput(string input, out DateTime result)
        {
            return DateTime.TryParse(input, out result);
        }

        public int CalculateAge(DateTime dateOfBirth)
        {
            DateTime zeroTime = new DateTime(1, 1, 1);
            DateTime now = DateTime.Now;

            TimeSpan difference = now - dateOfBirth;

            // because we start at year 1 for the Gregorian 
            // calendar, we must subtract a year here.
            int age = (zeroTime + difference).Year - 1;

            return age;
        }
    }
}
