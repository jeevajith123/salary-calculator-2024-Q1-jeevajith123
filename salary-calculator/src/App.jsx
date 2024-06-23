import React from "react";
import { Helmet } from "react-helmet";
import { SalaryProvider } from "./contexts/SalaryContext";
import SalaryCalculator from "./pages/SalaryCalculator";

function App() {
  return (
    <SalaryProvider>
      <Helmet>
        <title>Salary Calculator - Estimate Your Take-Home Pay</title>
        <meta
          name="description"
          content="Use our Salary Calculator to estimate your net salary, including earnings, deductions, and employer contributions. Calculate your take-home pay with ease."
        />
      </Helmet>
      <div className="App">
        <SalaryCalculator />
      </div>
    </SalaryProvider>
  );
}

export default App;
