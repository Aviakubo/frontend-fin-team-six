import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Home from './components/Home';

function App() {
  return (
    <>
    <Home />
    </> 
  );
}

export default App;


// STATE VARIABLES (used in UI as well)

let netWorth, theBlack, theRed, incomeTtl, assetsTtl, expensesTtl, debtsTtl;

let userNetWorth = document.getElementById("userNetWorth").innerText;
let userMsg = document.getElementById("userMsg").innerText;
let userAdvice = document.getElementById("userAdvice").innerText;
let userLMGTFY = document.getElementById("userLMGTFY").innerText;

// FINANCES-COMPARE-AND-FEEDBACK FUNCTION

function finBreakdown(){
    theBlack = incomeTtl + assetsTtl;
    theRed = expensesTtl + debtsTtl;
    netWorth = theBlack - theRed;
    userNetWorth = netWorth;
    netWorth > 0 ? 
        userMsg = "You're in the black!" 
        : 
        userMsg = "You're in the red!";
    if (incomeTtl > (assetsTtl && expensesTtl && debtsTtl)) {
        userAdvice = "Nice finances; consider putting your funds into long-term assets or properties!";
        userLMGTFY = "long-term and property investments";
    } else if (assetsTtl > (incomeTtl && expensesTtl && debtsTtl)) {
        userAdvice = "Impressive high asset value; consider investments to provide a steady income source!";
        userLMGTFY = "steady return and growth investments";
    } else if (expensesTtl > (incomeTtl && assetsTtl && debtsTtl)) {
        userAdvice = "Your expenses are high; are you interested in financial literacy or other ways to handle costs?";
        userLMGTFY = "financial literacy and ways to improve earning potential";
    } else if (debtsTtl > (incomeTtl && assetsTtl && expensesTtl)) {
        userAdvice = "You've got some debt issues; do you have any assets you could liquidate or are you in need of debt relief?";
        userLMGTFY = "asset liquidation and debt relief or bankruptcy help";
    } else { 
        userAdvice = "Your finances are perfectly balanced! (Seriously, though, what's with that?)";
        userLMGTFY = "Zombo.com";
    }
}

finBreakdown();
