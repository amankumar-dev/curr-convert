import React, { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox.js';
import useCurrencies from './customHooks/CurrList.js';
import useCurrConRate from './customHooks/CurrConRate.js';

// Currencies -> https://api.frankfurter.app/currencies
// Conversion -> https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

function App() {
  const data=useCurrencies();
  const [amount,setAmount]=useState('');
  const [toCurrency,setToCurrency]=useState('USD');
  const [fromCurrency,setFromCurrency]=useState('INR');
  const [conversion,setConversion]=useState({});

  const conversionRate=useCurrConRate(amount,toCurrency,fromCurrency);
  
  function temp() {
    setConversion(conversionRate);
    console.log(conversion);
  }

  function swapFun(){
      setConversion('');
      setToCurrency(fromCurrency);
      setFromCurrency(toCurrency);
  }

  return (
    <div className="bg">
      <div className='container'>
        <h1 className='head'>Currency Converter</h1>
        <InputBox label='From' currList={data} amount={amount} onAmntChng={setAmount} currency={fromCurrency} onCurrChng={setFromCurrency} />
        <div className='btnHolder'>
        <button className='swapBtn' onClick={()=>{swapFun()}}>Swap</button>
        </div>
        <InputBox label='To' currList={data} inputDisable currency={toCurrency} onCurrChng={setToCurrency} conversion={conversion}/>
        <div className='btnHolder'>
        <button className='swapBtn convertBtn' onClick={()=>{temp()}}>Convert {fromCurrency} to {toCurrency}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
