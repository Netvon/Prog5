using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Data;

namespace CurrencyCalculator
{
    public class EuroToDollarConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
        {
            var result = (double) value * 1.247535d;

            return result;
        }

        public object ConvertBack(object value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
        {
            double theValue = double.Parse((string)value);

            var result = theValue / 1.247535d;

            return result;
            
        }
    }
}
