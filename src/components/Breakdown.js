import ReactDOM from 'react-dom'

function Breakdown(){


	// VARIABLES
let incomeTtl = 10;
let assetsTtl = 20;
let expensesTtl = 30;
let debtsTtl = 40;
let netWorth = 0;
let theBlack = 0;
let theRed = 0; // Calculated values to use in function below
let userNetWorth = ReactDOM.render(document.getElementById("userNetWorth")); // Net worth message below donut
let userMsg = ReactDOM.render(document.getElementById("userMsg")); // "Red" or "Black" message below donut
let userAdvice = ReactDOM.render(document.getElementById("userAdvice")); // Text advice message below donut
let userLink1 = ReactDOM.render(document.getElementById("userLink1")); // a-href link 1 below donut
let userLink2 = ReactDOM.render(document.getElementById("userLink2")); // a-href link 2 below donut
let userLink3 = ReactDOM.render(document.getElementById("userLink3")); // a-href link 3 below donut

	// ADD VALUES TOGETHER AND PROVIDE FEEDBACK ON GENERAL FINANCIAL STATE
	function finBreakdown(){
					theBlack = incomeTtl + assetsTtl;
					theRed = expensesTtl + debtsTtl;
					netWorth = theBlack - theRed;
					userNetWorth = netWorth;
					if (netWorth > 0) {
					userMsg.innerText = "Your finances are in the black!";
					userMsg.style.color = "black";
					userNetWorth.style.color = "black";
					} else {
					userMsg = "You're running in the red!'";
					}
										if ((incomeTtl > (assetsTtl && expensesTtl && debtsTtl)) || (theBlack > theRed)) {
														userAdvice.innerText = "Nice finances; consider the 70-20-10 rule for handling costs and savings, and putting more funds into long-term assets or properties!";
														userLink1.href = "https://www.investopedia.com/articles/basics/06/invest1000.asp";
														userLink2.href = "https://www.investopedia.com/articles/pf/09/high-yield-savings-account.asp";
														userLink3.href = "https://acumenwealth.com/16-most-important-assets-that-will-increase-your-net-worth/";
					userLink1.innerText = "How to start investing";
					userLink2.innerText = "What is a high-yield savings account?";
					userLink3.innerText = "Increasing your net worth with assets";
										} else if ((assetsTtl > (incomeTtl && expensesTtl && debtsTtl)) && (theBlack > theRed)) {
														userAdvice.innerText = "Impressive savings and assets; consider investments for a steady income source.";
														userLink1.href = "https://www.uschamber.com/co/start/startup/starting-small-business-at-home";
														userLink2.href = "https://www.investopedia.com/articles/pf/07/disposable_income.asp";
														userLink3.href = "https://www.indeed.com/career-advice/pay-salary/passive-income-opportunities";
					userLink1.innerText = "Starting a small business at home";
					userLink2.innerText = "Increasing your disposable income";
					userLink3.innerText = "Passive income opportunities";
										} else if ((expensesTtl > (incomeTtl && assetsTtl && debtsTtl)) || (theRed > theBlack)) {
														userAdvice = "Your expenses are high; consider the 50-30-20 rule, and reduce non-essential spending. Are you interested in financial literacy or other ways to handle costs?";
														userLink1 = "https://www.clevergirlfinance.com/blog/ways-to-stop-buying-crap-you-dont-need/";
														userLink2 = "https://www.khanacademy.org/college-careers-more/personal-finance/pf-saving-and-budgeting/tips-for-tracking-and-saving-money/v/ways-to-save-money-on-your-monthly-bills";
														userLink3 = "https://www.khanacademy.org/college-careers-more/personal-finance/pf-saving-and-budgeting";
					userLink1 = "Ways to avoid unneeded purchases";
					userLink2 = "Reducing your monthly bills";
					userLink3 = "Personal finance, saving, and budgeting";
										} else if (debtsTtl > (incomeTtl && assetsTtl && expensesTtl) && (theRed > theBlack)) {
														userAdvice = "You have some debt issues; prioritize paying the most significant debts first. Do you have any assets you could liquidate or are you in need of debt relief?";
														userLink1 = "https://www.aarp.org/money/credit-loans-debt/info-08-2011/negotiating-credit-card-companies.html";
														userLink2 = "https://consumer.westchestergov.com/financial-education/credit-and-debt-management/tips-to-reduce-your-debt";
														userLink3 = "https://www.investopedia.com/personal-finance/digging-out-of-debt/";
					userLink1.innerText = "How to negotiate with credit companies";
					userLink2.innerText = "Tips on reducing what you owe";
					userLink3.innerText = "Dig your way out of debts";
										} else { 
														userAdvice.innerText = "Your finances are perfectly balanced! (Seriously, though, what's with that?)";
														userLink1.href = "https://www.investopedia.com/articles/personal-finance/040715/what-microlending-and-how-does-it-work.asp";
														userLink2.href = "https://www.nerdwallet.com/article/investing/cryptocurrency-7-things-to-know";
														userLink3.href = "https://www.investopedia.com/teach-others-about-finances-5217599";
					userLink1.innerText = "What is microlending and how does it work?";
					userLink2.innerText = "7 things to know about cryptocurrency";
					userLink3.innerText = "Teach others about their finances";
										}
						}

    finBreakdown();

				return(
				<>
								<div ref={userMsg}>Are you red or black?</div>
								<div ref={userNetWorth}>How much are you worth?</div>
								<div ref={userAdvice}>What can we advise you on?</div>
								<a ref={userLink1} href="google.com">google.com</a>
								<a ref={userLink2} href="google.com">google.com</a>
								<a ref={userLink3} href="google.com">google.com</a>
				</>
				)

}

export default Breakdown;