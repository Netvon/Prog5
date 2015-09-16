using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TheRepository.ViewModel
{
    public interface ICarRepository
    {
        IEnumerable<Car> GetAllCars();
    }
}
