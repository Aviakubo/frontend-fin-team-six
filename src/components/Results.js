import {useState} from "react";


function Results({assetValues, incValues, expValues, debtValues}){
    let totalAssetAmount = 0;
  let totalIncAmount = 0;
  let totalExpAmount = 0;
  let totalDebtAmount = 0;

  const assetTotal = () => {
    for(let i=0; i<assetValues.length; i++){
      totalAssetAmount += Number(assetValues[i].name)
    }
    return totalAssetAmount
  }

  const incTotal = () => {
    for(let i=0; i<incValues.length; i++){
      totalIncAmount += Number(incValues[i].name)
    }
    return totalIncAmount
  }

  const expTotal = () => {
    for(let i=0; i<expValues.length; i++){
      totalExpAmount += Number(expValues[i].name)
    }
    return totalExpAmount
  }

  const debtTotal = () => {
    for(let i=0; i<debtValues.length; i++){
      totalDebtAmount += Number(debtValues[i].name)
    }
    return totalDebtAmount
  }

	// VARIABLES
    let incomeTtl = incTotal();
    let assetsTtl = assetTotal();
    let expensesTtl = expTotal();
    let debtsTtl = debtTotal();
    let netWorth = incomeTtl + assetsTtl - expensesTtl - debtsTtl;
    let theBlack = incomeTtl + assetsTtl;
    let theRed = expensesTtl + debtsTtl; 

	//Function for if/else statements for result populating
    const finResults = () => {
        console.log('working')
        if (assetsTtl > incomeTtl + expensesTtl + debtsTtl){
            return (
                <div className='results'>
                    <h1 className='final-category'>Impressive savings and assets!</h1>
                    <h2 className='advice'> Consider investments for a steady income source.</h2>
                    <a href="http://https://www.uschamber.com/co/start/startup/starting-small-business-at-home" target="#" >Starting a small business at home</a>
                    <br />
                    <a href="https://www.investopedia.com/articles/pf/07/disposable_income.asp" target="#" >Increasing your disposable income</a>
                    <br />
                    <a href="https://www.indeed.com/career-advice/pay-salary/passive-income-opportunities" target="#" >"Passive income opportunities"</a>
                </div>
            )
        } else if(incomeTtl > assetsTtl + expensesTtl + debtsTtl) {
            return (
                <div className='results'>
                    <h1 className='final-category'>Nice finances!</h1>
                    <h2 className='advice'> consider the 70-20-10 rule for handling costs and savings, and putting more funds into long-term assets or properties!</h2>
                    <a href="https://www.investopedia.com/articles/basics/06/invest1000.asp" target="#" >How to start investing</a>
                    <br />
                    <a href="https://www.investopedia.com/articles/pf/09/high-yield-savings-account.asp" target="#" >What is a high-yield savings account?</a>
                    <br />
                    <a href="https://acumenwealth.com/16-most-important-assets-that-will-increase-your-net-worth/" target="#" >"Increasing your net worth with assets"</a>

                </div>
            )
        } else if (expensesTtl > incomeTtl + assetsTtl + debtsTtl){
            return (
                <div className='results'>
                    <h1 className='final-category'>"Your expenses are high!</h1>
                    <h2 className='advice'> Consider the 50-30-20 rule, and reduce non-essential spending. Are you interested in financial literacy or other ways to handle costs?</h2>
                    <a href="https://www.clevergirlfinance.com/blog/ways-to-stop-buying-crap-you-dont-need/" target="#" >Ways to avoid unneeded purchases</a>
                    <br />
                    <a href="https://www.khanacademy.org/college-careers-more/personal-finance/pf-saving-and-budgeting/tips-for-tracking-and-saving-money/v/ways-to-save-money-on-your-monthly-bills" target="#" >Reducing your monthly bills</a>
                    <br />
                    <a href="https://www.khanacademy.org/college-careers-more/personal-finance/pf-saving-and-budgeting" target="#" >"Personal finance, saving, and budgeting"</a>
                </div>
            )
        } else if (debtsTtl < incomeTtl + expensesTtl + assetsTtl){
            return (
                <div className='results'>
                    <h1 className='final-category'>You have outstanding debts</h1>
                    <h2 className='advice'> Prioritize paying the most significant debts first.</h2>
                    <h2 className='advice'> Do you have any assets you could liquidate or are you in need of debt relief?</h2>
                    <a href="https://www.aarp.org/money/credit-loans-debt/info-08-2011/negotiating-credit-card-companies.html" target="#" >How to negotiate with credit companies</a>
                    <br />
                    <a href="https://consumer.westchestergov.com/financial-education/credit-and-debt-management/tips-to-reduce-your-debt" target="#" >Tips on reducing what you owe</a>
                    <br />
                    <a href="https://www.investopedia.com/personal-finance/digging-out-of-debt/" target="#" >"Dig your way out of debts"</a>
                </div>
            )
        } else {
          return 
        }
    }
	

    finResults();

    return(
        <>
            {finResults()}
        </>
    )

}

export default Results;