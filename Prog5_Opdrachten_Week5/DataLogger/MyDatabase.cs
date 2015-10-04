using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataLogger
{
    public class MyDatabase
    {
        MyModelContainer container;

        public MyDatabase(MyModelContainer container)
        {
            //Why do we inject the container?
            this.container = container;
        }

        public IEnumerable<Player> ShowAllPlayers()
        {
            //SQL: SELECT * FROM TEAMS WHERE 
            return null;
        }

        public IEnumerable<Team> ShowAllTeams()
        {
            //SELECT * FROM Teams
            return null;
        }

        public IEnumerable<Player> ShowAllPlayersInTeam(String teamName)
        {
            //SELECT * FROM Teams 
            //  INNER JOIN Players	
            //  ON Players.TeamId = Teams.Id
            //  WHERE Teams.Name = 'teamName' 
            return new List<Player>();
        }

        public Competition AddNewCompetition(Team teamA, Team teamB, DateTime dateTime)
        {
            //Todo: Add new competition
            return null;
        }

        public Ladder AddCompetitionToLadder(Competition competition)
        {
            //TODO: update the existing ladder
            return null;
        }
    }
}
