using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TheRepository.ViewModel
{
    public class DummyCarRepository : ICarRepository
    {
        public IEnumerable<Car> GetAllCars()
        {
            return new List<Car>()
            {
                new Car { Merk = "BWM",Model = "Fancy" , Prijs = 40000, Bijtelling = 25, Actief = false},
                new Car { Merk = "Audi",Model = "A3" , Prijs = 37000, Bijtelling = 14, Actief = true},
                new Car { Merk = "Fiat",Model = "Punto" , Prijs = 12000, Bijtelling = 14, Actief = false},
                new Car { Merk = "Opel",Model = "Astra" , Prijs = 15000, Bijtelling = 20, Actief = false},
                new Car { Merk = "Seat",Model = "Leon" , Prijs = 25000, Bijtelling = 20,  Actief = true},
                new Car { Merk = "Volkswagen",Model = "Golf" , Prijs = 35000, Bijtelling = 20,  Actief = true}
            };
        }
    }
}
