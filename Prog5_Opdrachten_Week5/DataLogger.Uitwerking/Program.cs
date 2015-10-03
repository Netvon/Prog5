using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLogger
{
    class Program
    {
        static void Main(string[] args)
        {
            //Seeding
            Seed.Init();

            //Logging data
            MyModelContainer container = new MyModelContainer();
            MyDatabase db = new MyDatabase(container);
            db.ShowAllPlayers();
            db.ShowAllPlayersInTeam("FNATIC");
            db.ShowAllTeams();
        }
    }
}
