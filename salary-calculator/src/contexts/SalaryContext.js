import React, { createContext, useState, useContext } from "react";

const SalaryContext = createContext();

export const useSalaryContext = () => {
  const context = useContext(SalaryContext);
  if (!context) {
    throw new Error("useSalaryContext must be used within a SalaryProvider");
  }
  return context;
};

export const SalaryProvider = ({ children }) => {
  const [basicSalary, setBasicSalary] = useState(150000);
  const [earnings, setEarnings] = useState([
    { id: 1, title: "Travel", amount: 10000, epfEtf: false },
  ]);
  const [deductions, setDeductions] = useState([
    { id: 1, title: "No Pay", amount: 8000 },
  ]);

  const handleAddEarning = () => {
    setEarnings([...earnings, { id: Date.now(), title: "", amount: 0, epfEtf: false }]);
  };

  const handleAddDeduction = () => {
    setDeductions([...deductions, { id: Date.now(), title: "", amount: 0 }]);
  };

  const handleRemoveEarning = (indexToRemove) => {
    setEarnings((currentEarnings) => currentEarnings.filter((_, index) => index !== indexToRemove));
  };

  const handleRemoveDeduction = (indexToRemove) => {
    setDeductions((currentDeductions) => currentDeductions.filter((_, index) => index !== indexToRemove));
  };

  const handleReset = () => {
    setBasicSalary(150000);
    setEarnings([{ id: 1, title: "Travel", amount: 10000, epfEtf: false }]);
    setDeductions([{ id: 1, title: "No Pay", amount: 8000 }]);
  };

  const state = {
    basicSalary,
    setBasicSalary,
    earnings,
    setEarnings,
    deductions,
    setDeductions,
    handleAddEarning,
    handleAddDeduction,
    handleRemoveEarning,
    handleRemoveDeduction,
    handleReset,
  };

  return <SalaryContext.Provider value={state}>{children}</SalaryContext.Provider>;
};
