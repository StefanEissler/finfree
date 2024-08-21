import React, { useState } from "react";

type CurrencyType = "SAT" | "BTC";

type CurrencyContextType = {
  currency: CurrencyType;
  setCurrency: (value: CurrencyType | ((prev: CurrencyType) => CurrencyType)) => void;
};

export const CurrencyContext = React.createContext<CurrencyContextType>({
  currency: "SAT",
  setCurrency: () => { },
});

type CurrencyProviderProps = {
  children: React.ReactNode;
};

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [currency, setCurrency] = useState<CurrencyType>("SAT");

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
