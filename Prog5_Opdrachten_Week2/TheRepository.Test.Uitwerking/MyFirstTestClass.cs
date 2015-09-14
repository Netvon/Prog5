using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TheRepository.ViewModel;
using Moq;
using System.Collections.Generic;

namespace TheRepository.Test.Uitwerking
{
    [TestClass]
    public class MyFirstTestClass
    {
        [TestMethod]
        public void MainViewModelTest_LeasePrijs_Succes()
        {
            //Arrange
            var car = new CarVM(new Car { Prijs = 100, Bijtelling = 22 });
            var expected = 100 / 22 * 2;

            //act
            var result = car.LeaseKostenPerMaand;

            //assert
            Assert.AreEqual(expected, result);
        }


        [TestMethod]
        public void MainViewModelTest_TotalePrijs_Succes()
        {

            //Arrange
            Mock<ICarRepository> moq = new Mock<ICarRepository>();

            moq.Setup(m => m.GetAllCars())
                .Returns(new List<Car>()
                {
                    new Car{ Actief = true, Bijtelling = 100, Prijs = 20,}
                });


            var mainVM = new MainViewModel(moq.Object);


            //Act
            var result = mainVM.TotalePrijs;

            //Assert
            Assert.AreEqual(20, result);
        }
    }

}
