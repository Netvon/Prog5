using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace DataLogger.Test
{
    [TestClass]
    public class MyDatabaseTest
    {
        MyDatabase db;

        [TestMethod]
        public void MyDatabaseTest_ShowAllPlayers()
        {
            //1. arrange 
            MyModelContainer container = new MyModelContainer();
            db = new MyDatabase(container);

            //2. act
            IEnumerable<Player> result = db.ShowAllPlayers().ToList();

            //2. assert
            Assert.AreEqual(11, result.Count());
        }

        [TestMethod]
        public void MyDatabaseTest_ShowAllTeams()
        {
            //1. arrange 
            MyModelContainer container = new MyModelContainer();
            db = new MyDatabase(container);

            //2. act
            IEnumerable<Team> result =  db.ShowAllTeams();

            //2. assert
            Assert.AreEqual(2, result.Count());
        }
    
        [TestMethod]
        public void MyDatabaseTest_ShowAllPlayersInTeam_Success()
        {
            //1. arrange 
            MyModelContainer container = new MyModelContainer();
            db = new MyDatabase(container);

            //2. act
            IEnumerable<Player> result = db.ShowAllPlayersInTeam("FNATIC");

            //2. assert
            Assert.AreEqual(6, result.Count());
        }


        [TestMethod]
        public void MyDatabaseTest_ShowAllPlayersInTeam_WrongParam()
        {
            //1. arrange 
            MyModelContainer container = new MyModelContainer();
            db = new MyDatabase(container);
            int currentCount = container.Teams.Count();

            //2. act
            IEnumerable<Player> result= db.ShowAllPlayersInTeam("joepie");

            //2. assert
            Assert.IsNull(result);
        }

        [TestMethod]
        public void MyDatabaseTest_AddNewCompetition()
        {
            //1. arrange 
            MyModelContainer container = new MyModelContainer();
            db = new MyDatabase(container);
            int currentCount = container.Competitions.Count();
            Team[] teams = container.Teams.ToArray();

            //Short assert
            Assert.IsTrue(teams.Length >= 2);

            //2. act
            Competition comp = db.AddNewCompetition(teams[0], teams[1], DateTime.Now);

            //2. assert
            int newCount = container.Competitions.Count();
            Assert.AreEqual(currentCount + 1, newCount);
            Assert.IsNotNull(comp);
            Assert.IsNotNull(comp.Id);
            
        }

        [TestMethod]
        public void MyDatabaseTest_UpdateLadder()
        {
            //1. arrange 
            MyModelContainer container = new MyModelContainer();
            db = new MyDatabase(container);
            int currentCount = container.Ladders.First().Competitions.Count();
            Team[] teams = container.Teams.ToArray();
            Competition comp = db.AddNewCompetition(teams[0], teams[1], DateTime.Now);

            //Short assert
            Assert.IsTrue(teams.Length >= 2);

            //2. act
            db.AddCompetitionToLadder(comp);

            //2. assert
            Ladder ladder = container.Ladders.First();
            int newCount = container.Ladders.First().Competitions.Count();
            Assert.AreEqual(currentCount + 1, newCount);   
        }

    }
}
