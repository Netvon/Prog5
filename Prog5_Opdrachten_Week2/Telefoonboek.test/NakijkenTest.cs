using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Telefoonboek;
using System.Linq;
using System.Collections.Generic;

namespace Telefoonboek.test
{
    [TestClass]
    public class NakijkenTest
    {
        private ITelephoneBook book;

        [TestInitialize]
        public void Init()
        {
            var bookType = AppDomain.CurrentDomain.GetAssemblies()
                .SelectMany(s => s.GetTypes())
                .Where(p => typeof(ITelephoneBook).IsAssignableFrom(p) && p.Name != "ITelephoneBook")
                .FirstOrDefault();

            var personType = AppDomain.CurrentDomain.GetAssemblies()
               .SelectMany(s => s.GetTypes())
               .Where(p => typeof(IPerson).IsAssignableFrom(p) && p.Name != "IPerson")
               .FirstOrDefault();

            book = (ITelephoneBook) Activator.CreateInstance(bookType);
            IPerson personA = (IPerson)Activator.CreateInstance(personType);
            personA.FirstName = "Bea";
            personA.LastName = "Knoller";
            personA.TelephoneNumber = "06321312";
            IPerson personB = (IPerson)Activator.CreateInstance(personType);
            personB.FirstName = "Ad";
            personB.LastName = "Baan";
            personB.TelephoneNumber = "064342892";
            IPerson personC = (IPerson)Activator.CreateInstance(personType);
            personC.FirstName = "Celine";
            personC.LastName = "MetDeLangeAchternaam";
            personC.TelephoneNumber = "064823942";

            book.People = new List<IPerson>(){
                personA, personB, personC
            };
        }

        [TestMethod]
        public void Sort_By_Last_Name()
        {
            //1. Arrange

            //2. Act
            var result = book.SortByLastName();
            
            //3. Assert
            Assert.AreEqual(3, result.Count);
            Assert.AreEqual("Ad", result[0].FirstName);
            Assert.AreEqual("Bea", result[1].FirstName);
            Assert.AreEqual("Celine", result[2].FirstName);
        }

        [TestMethod]
        public void First_Name_Start_With_A()
        {
            //1. Arrange

            //2. Act
            var result = book.FirstNameStartWith('A');
            
            //3. Assert
            Assert.AreEqual(1, result.Count);
            Assert.AreEqual("Ad", result[0].FirstName);
        }

        [TestMethod]
        public void Last_Name_Longer_Than_5()
        {
            //1. Arrange

            //2. Act
            var result = book.LastNameLongerThan(5);

            //3. Assert
            Assert.AreEqual(2, result.Count);
            Assert.AreEqual("Bea", result[0].FirstName);
            Assert.AreEqual("Celine", result[1].FirstName);
        }

        [TestMethod]
        public void Sort_By_Last_Name_Length()
        {
            //1. Arrange

            //2. Act
            var result = book.SortByLastNameLength();

            //3. Assert
            Assert.AreEqual(3, result.Count);
            Assert.AreEqual("Ad", result[0].FirstName);
            Assert.AreEqual("Bea", result[1].FirstName);
            Assert.AreEqual("Celine", result[2].FirstName);
        }




    }
}
