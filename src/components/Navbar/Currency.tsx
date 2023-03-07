import US_DOLLAR_ICON from "../../assets/currencies/us_dollar.png";
import TURKISH_LIRA_ICON from "../../assets/currencies/turkish_lira.png";
import EURO_ICON from "../../assets/currencies/euro.png";
import { ICurrency } from "../../Interfaces/ICurrency";
import { useEffect } from "react";

interface CurrencyProps {
  activeCurrency: ICurrency;
  setActiveCurrency: React.Dispatch<React.SetStateAction<ICurrency>>;
}

const Currency = ({ activeCurrency, setActiveCurrency }: CurrencyProps) => {
  const currencies = [
    {
      CURRENCY_NAME: "USD",
      CURRENCY_SYMBOL: "$",
      CURRENCY_IMAGE: US_DOLLAR_ICON,
    },
    {
      CURRENCY_NAME: "TL",
      CURRENCY_SYMBOL: "₺",
      CURRENCY_IMAGE: TURKISH_LIRA_ICON,
    },
    {
      CURRENCY_NAME: "EUR",
      CURRENCY_SYMBOL: "€",
      CURRENCY_IMAGE: EURO_ICON,
    },
  ];

  useEffect(() => {
    setActiveCurrency({
      currencyIMG: currencies[0].CURRENCY_IMAGE,
      currencyName: currencies[0].CURRENCY_NAME,
    });
  }, []);

  return (
    <div className="relative w-32 h-10 border rounded-lg px-2 cursor-pointer shadow-md group">
      <div className="flex h-full items-center">
        <img
          className="w-10 h-auto"
          src={activeCurrency.currencyIMG}
          alt="currency"
        />
        <span className="text-xs pt-3 mx-2 px-4 text-gray-500 h-full tracking-wider border-l-2 font-bold">
          {activeCurrency.currencyName}
        </span>
      </div>
      <div className="absolute hidden group-hover:block w-32 top-10 left-0 bg-white border rounded-lg cursor-pointer">
        {currencies.map((currency) => {
          return (
            <div
              onClick={() => {
                setActiveCurrency({
                  currencyIMG: currency.CURRENCY_IMAGE,
                  currencyName: currency.CURRENCY_NAME,
                });
              }}
              className="flex my-4 h-12 items-center hover:bg-gray-100"
            >
              <img
                className="w-12 h-auto ml-2"
                src={currency.CURRENCY_IMAGE}
                alt={currency.CURRENCY_NAME}
              />
              <span className="text-xs pl-2 font-semibold text-gray-500 tracking-widest">
                {currency.CURRENCY_NAME} - {currency.CURRENCY_SYMBOL}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Currency;
