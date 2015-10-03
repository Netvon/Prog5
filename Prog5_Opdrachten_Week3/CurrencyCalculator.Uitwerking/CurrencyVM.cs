using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CurrencyCalculator
{
    public class CurrencyVM : INotifyPropertyChanged
    {
        private double _euros;

        public double Euros
        {
            get { return _euros; }
            set
            {
                _euros = value;
                RaisePropertyChanged("Euros");
            }
        }


        #region INotifyPropertyChanged Members

        void RaisePropertyChanged(string prop)
        {
            if (PropertyChanged != null) { PropertyChanged(this, new PropertyChangedEventArgs(prop)); }
        }

        public event PropertyChangedEventHandler PropertyChanged;

        #endregion
    }
}
