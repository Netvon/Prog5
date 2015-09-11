using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator.uitwerking
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to the age calculator.");
            Console.WriteLine("Please enter your date of birth in dd-mm-yyy");

            IAgeCalculator calcy = new AgeCalculator();

            bool validated = false;
            DateTime dateOfBirth = DateTime.Now;

            while(!validated){
                string input = Console.ReadLine();
                validated = calcy.ParseInput(input, out dateOfBirth);

                if (!validated)
                    Console.WriteLine("The date was not valid, please try again: ");
            }

            var age = calcy.CalculateAge(dateOfBirth);

            Console.WriteLine("We have calculated your age: ");
            Console.WriteLine("You are currently " + age + " years old");
            Console.WriteLine("Press any key to quit...");
            Console.ReadLine();
        }
    }
}
