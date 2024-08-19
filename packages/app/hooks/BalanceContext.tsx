import React, { useState } from "react";


export const BalanceContext = React.createContext({
  currentBalanceAmount: 0,
  setCurrentBalanceAmount: (value: number | ((prev: number) => number)) => { },
  financialGoalAmount: 0,
  setFinancialGoalAmount: (value: number | ((prev: number) => number)) => { },
});


export const BalanceProvider = ({ children }) => {
  const [currentBalanceAmount, setCurrentBalanceAmount] = useState(100);
  const [financialGoalAmount, setFinancialGoalAmount] = useState(1200);

  return (
    <BalanceContext.Provider
      value={{
        currentBalanceAmount,
        setCurrentBalanceAmount,
        financialGoalAmount,
        setFinancialGoalAmount,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};
