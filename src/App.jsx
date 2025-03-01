import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';
 
import './App.css'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((previousState) => ({
      ...previousState,
      [inputIdentifier]: +newValue, // Convert to number
    }));
  };


  return (
    <>
     <Header/>
     <UserInput userInput={userInput} handleChange={handleChange}/>
     <Result inputData = {userInput} />
    </>
  )
}

export default App  ;
