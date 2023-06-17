import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ResultTable from "./components/ResultTable";

function App() {
  const [result, setResult] = useState([]);
  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    //!below code does the calculation
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        initialAmount: +userInput["current-savings"],
      });
    }

    setResult(yearlyData);
    console.log(result);
  };

  return (
    <div>
      <Header />
      <InputForm submitHandler={calculateHandler} />
      {result.length === 0 ? (
        <p className="fallback_text">No investment data.</p>
      ) : (
        <ResultTable data={result} />
      )}
    </div>
  );
}

export default App;
