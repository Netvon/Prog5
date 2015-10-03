using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLogger
{
    static class Seed
    {
        public static void Init()
        {
            MyModelContainer container = new MyModelContainer();

            //Check if the init has been executed before
            if (container.Teams.Count() <= 0)
            {
                //Players
                #region FNATIC
                Player huni = new Player();
                huni.Name = "Heo Seung-hoon";
                huni.Gamertag = "Huni";
                huni.Role = TeamRole.TOP;

                Player Reignover = new Player();
                Reignover.Name = "Kim Ui-jin ";
                Reignover.Gamertag = "Reignover";
                Reignover.Role = TeamRole.JUNGLE;

                Player Febiven = new Player();
                Febiven.Name = "Fabian Diepstraten";
                Febiven.Gamertag = "Febiven";
                Febiven.Role = TeamRole.MID;

                Player Rekkles = new Player();
                Rekkles.Name = "Martin Larsson";
                Rekkles.Gamertag = "Rekkles";
                Rekkles.Role = TeamRole.ADC;

                Player YellOwStaR = new Player();
                YellOwStaR.Name = "Bora Kim";
                YellOwStaR.Gamertag = "YellOwStaR";
                YellOwStaR.Role = TeamRole.SUPPORT;

                Player Kektz = new Player();
                Kektz.Name = "Bor Jeršan";
                Kektz.Gamertag = "Kektz";
                Kektz.Role = TeamRole.TOP;
                #endregion
                #region TSM
                Player Dyrus = new Player();
                Dyrus.Name = "Marcus Hill";
                Dyrus.Gamertag = "Dyrus";
                Dyrus.Role = TeamRole.TOP;

                Player Santorin = new Player();
                Santorin.Name = "Lucas Larsen";
                Santorin.Gamertag = "Santorin";
                Santorin.Role = TeamRole.JUNGLE;

                Player Bjergsen = new Player();
                Bjergsen.Name = "Søren Bjerg";
                Bjergsen.Gamertag = "Bjergsen";
                Bjergsen.Role = TeamRole.MID;

                Player WildTurtle = new Player();
                WildTurtle.Name = "Jason Tran";
                WildTurtle.Gamertag = "WildTurtle";
                WildTurtle.Role = TeamRole.ADC;

                Player Lustboy = new Player();
                Lustboy.Name = "	Ham Jang-sik";
                Lustboy.Gamertag = "Lustboy";
                Lustboy.Role = TeamRole.SUPPORT;
                #endregion 

                //Teams
                Team FNATIC = new Team();
                FNATIC.Name = "FNATIC";
                FNATIC.Players.Add(huni);
                FNATIC.Players.Add(Reignover);
                FNATIC.Players.Add(Febiven);
                FNATIC.Players.Add(Rekkles);
                FNATIC.Players.Add(YellOwStaR);
                FNATIC.Players.Add(Kektz);

                Team TSM = new Team();
                TSM.Name = "TSM";
                TSM.Players.Add(Dyrus);
                TSM.Players.Add(Santorin);
                TSM.Players.Add(Bjergsen);
                TSM.Players.Add(WildTurtle);
                TSM.Players.Add(Lustboy);

                Competition firstMatch = new Competition();
                firstMatch.Date = new DateTime(2015, 10, 03, 14, 0, 0);
                firstMatch.Teams.Add(TSM);
                firstMatch.Teams.Add(FNATIC);

                Ladder Season15 = new Ladder();
                Season15.Season = "2015";
                Season15.Competitions.Add(firstMatch);
           

                container.Teams.Add(FNATIC);
                container.Teams.Add(TSM);
                container.Competitions.Add(firstMatch);
                container.Ladders.Add(Season15);


                try
                {
                    container.SaveChanges();
                }
                catch (DbEntityValidationException ex)
                {
                    // Retrieve the error messages as a list of strings.
                    var errorMessages = ex.EntityValidationErrors
                            .SelectMany(x => x.ValidationErrors)
                            .Select(x => x.ErrorMessage);

                    // Join the list to a single string.
                    var fullErrorMessage = string.Join("; ", errorMessages);

                    // Combine the original exception message with the new one.
                    var exceptionMessage = string.Concat(ex.Message, " The validation errors are: ", fullErrorMessage);

                    // Throw a new DbEntityValidationException with the improved exception message.
                    throw new DbEntityValidationException(exceptionMessage, ex.EntityValidationErrors);
                }
            }
        }
    }
}
