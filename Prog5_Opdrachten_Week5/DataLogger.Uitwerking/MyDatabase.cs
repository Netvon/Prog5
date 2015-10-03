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
            return container.Players;
        }

        public IEnumerable<Team> ShowAllTeams()
        {
            //SELECT * FROM Teams
            return container.Teams;
        }

        public IEnumerable<Player> ShowAllPlayersInTeam(String teamName)
        {
            //SELECT * FROM Teams 
            //  INNER JOIN Players	
            //  ON Players.TeamId = Teams.Id
            //  WHERE Teams.Name = 'teamName' 

            Team team = container.Teams.Include("Players").FirstOrDefault(t => t.Name == teamName);

            if (team != null)
                return team.Players;
            else
                return null;
        }

        public Competition AddNewCompetition(Team teamA, Team teamB, DateTime dateTime)
        {
            //Todo: Add new competition
            Competition comp = new Competition();
            comp.Date = dateTime;
            comp.Teams.Add(teamA);
            comp.Teams.Add(teamB);
            comp = container.Competitions.Add(comp);
            container.SaveChanges();
            return comp;
        }

        public Ladder AddCompetitionToLadder(Competition competition)
        {
            //TODO: update the existing ladder
            Ladder ladder = container.Ladders.FirstOrDefault();

            if (ladder != null){
                ladder.Competitions.Add(competition);
                container.SaveChanges();
            }

            return null;
        }
    }
}
