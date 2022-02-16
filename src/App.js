import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Home from './components/Home';

function App() {

// STATE VARIABLES
let incomes = [];
let expenses = [];
let assets = [];
let debts = [];
// This one is for the entire ring-chart, as nested arrays
let totalAmounts = [incomes, assets, expenses, debts];

let netWorth, theBlack, theRed, incomeTtl, assetsTtl, expensesTtl, debtsTtl;

let userNetWorth = document.getElementById("userNetWorth");
let userMsg = document.getElementById("userMsg");
let userAdvice = document.getElementById("userAdvice");
let userLink = document.getElementById("userLink");

// COLLATE INCOME/ASSET/EXPENSE/DEBT INPUT VALUES


// TOTAL UP INCOME/ASSET/EXPENSE/DEBT AMOUNTS
// e.g. pass in [incomes] and incomeTtl
// and return incomeTtl based on amounts in [incomes]
function finTotal(arr, ttl){
    ttl = 0;
    for (let i = 0; i < arr.length; i++) {
        ttl += arr[i];       
    }
    return ttl;
}

// FIND FRACTIONAL VALUES OF TOTAL AMOUNTS RING AND SUBSECTIONS
function finFractions(arr){
    arr.forEach((a)=>{
    
    })
}

// ADD VALUES TOGETHER AND PROVIDE FEEDBACK ON GENERAL FINANCIAL STATE
function finBreakdown(){
    theBlack = incomeTtl + assetsTtl;
    theRed = expensesTtl + debtsTtl;
    netWorth = theBlack - theRed;
    userNetWorth.innerText = netWorth;
    netWorth > 0 ? 
        userMsg.innerText = "You're in the black!" 
        : 
        userMsg.innerText = "You're in the red!";
    if (incomeTtl > (assetsTtl && expensesTtl && debtsTtl) || theBlack > theRed) {
        userAdvice.innerText = "Nice finances; consider putting your funds into long-term assets or properties!";
        userLink.href = "https://www.google.com/search?q=long+term+and+property+investments";
    } else if (assetsTtl > (incomeTtl && expensesTtl && debtsTtl)) {
        userAdvice.innerText = "Impressive high asset value; consider investments to provide a steady income source!";
        userLink.href = "https://www.google.com/search?q=steady+return+and+growth+investments";
    } else if (expensesTtl > (incomeTtl && assetsTtl && debtsTtl) || theRed > theBlack) {
        userAdvice.innerText = "Your expenses are high; are you interested in financial literacy or other ways to handle costs?";
        userLink.href = "https://www.google.com/search?q=financial+literacy+and+ways+to+improve+earning+potential";
    } else if (debtsTtl > (incomeTtl && assetsTtl && expensesTtl)) {
        userAdvice.innerText = "You have some debt issues; do you have any assets you could liquidate or are you in need of debt relief?";
        userLink.href = "https://www.google.com/search?q=asset+liquidation+and+debt+relief+or+bankruptcy+help";
    } else { 
        userAdvice.innerText = "Your finances are perfectly balanced! (Seriously, though, what's with that?)";
        userLink.href = "http://www.zombo.com";
    }
}

  return (
    <>
    <Home />
    </> 
  );
}

export default App;