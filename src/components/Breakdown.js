import { useState } from "react";


export default function Breakdown({Form}){
    let [userNetWorth, setUserNetWorth] = useState(null);
    let [userMsg, setUserMsg] = useState(null);
    let [userAdvice, setUserAdvice] = useState(null);
    let [userLink1, setUserLink1] = useState(null);
    let [userLink2, setUserLink2] = useState(null);
    let [userLink3, setUserLink3] = useState(null);
    let [userText1, setUserText1] = useState(null);
    let [userText2, setUserText2] = useState(null);
    let [userText3, setUserText3] = useState(null);

					// VARIABLES
				let incomeTtl = 10;
				let assetsTtl = 20;
				let expensesTtl = 30;
				let debtsTtl = 40;
				let netWorth = 0;
				let theBlack = 0;
				let theRed = 0; 

					// ADD VALUES TOGETHER AND PROVIDE FEEDBACK ON GENERAL FINANCIAL STATE
					const finBreakdown= () => {
									theBlack = incomeTtl + assetsTtl;
         console.log('theBlack', theBlack);
									theRed = expensesTtl + debtsTtl;
         console.log('theRed', theRed);
									netWorth = theBlack - theRed;
         console.log('netWorth', netWorth);
									setUserNetWorth = netWorth;
									if (netWorth > 0) {
									setUserMsg = "Your finances are in the black!";
									userMsg.style.color = "black";
									userNetWorth.style.color = "black";
									} else {
									setUserMsg = "You're running in the red!";
									}
														if ((incomeTtl > (assetsTtl && expensesTtl && debtsTtl)) || (theBlack > theRed)) {
																		setUserAdvice = "Nice finances; consider the 70-20-10 rule for handling costs and savings, and putting more funds into long-term assets or properties!";
																		setUserLink1 = "https://www.investopedia.com/articles/basics/06/invest1000.asp";
																		setUserLink2 = "https://www.investopedia.com/articles/pf/09/high-yield-savings-account.asp";
																		setUserLink3 = "https://acumenwealth.com/16-most-important-assets-that-will-increase-your-net-worth/";
									setUserText1 = "How to start investing";
									setUserText2 = "What is a high-yield savings account?";
									setUserText3 = "Increasing your net worth with assets";
									return(
										<>
														<div>
																		{userMsg}
																		{userNetWorth}
																		{userAdvice}
														</div>
														<a href={userLink1}>{userText1}</a>
														<a href={userLink2}>{userText2}</a>
														<a href={userLink3}>{userText3}</a>								
										</>
						);
														} else if ((assetsTtl > (incomeTtl && expensesTtl && debtsTtl)) && (theBlack > theRed)) {
																		setUserAdvice = "Impressive savings and assets; consider investments for a steady income source.";
																		setUserLink1 = "https://www.uschamber.com/co/start/startup/starting-small-business-at-home";
																		setUserLink2 = "https://www.investopedia.com/articles/pf/07/disposable_income.asp";
																		setUserLink3 = "https://www.indeed.com/career-advice/pay-salary/passive-income-opportunities";
									setUserText1 = "Starting a small business at home";
									setUserText2 = "Increasing your disposable income";
									setUserText3 = "Passive income opportunities";
									return(
										<>
														<div>
																		{userMsg}
																		{userNetWorth}
																		{userAdvice}
														</div>
														<a href={userLink1}>{userText1}</a>
														<a href={userLink2}>{userText2}</a>
														<a href={userLink3}>{userText3}</a>								
										</>
						);
														} 
									// 					else if ((expensesTtl > (incomeTtl && assetsTtl && debtsTtl)) || (theRed > theBlack)) {
									// 									setUserAdvice = "Your expenses are high; consider the 50-30-20 rule, and reduce non-essential spending. Are you interested in financial literacy or other ways to handle costs?";
									// 									setUserLink1 = "https://www.clevergirlfinance.com/blog/ways-to-stop-buying-crap-you-dont-need/";
									// 									setUserLink2 = "https://www.khanacademy.org/college-careers-more/personal-finance/pf-saving-and-budgeting/tips-for-tracking-and-saving-money/v/ways-to-save-money-on-your-monthly-bills";
									// 									setUserLink3 = "https://www.khanacademy.org/college-careers-more/personal-finance/pf-saving-and-budgeting";
									// setUserText1 = "Ways to avoid unneeded purchases";
									// setUserText2 = "Reducing your monthly bills";
									// setUserText3 = "Personal finance, saving, and budgeting";
									// 					} else if (debtsTtl > (incomeTtl && assetsTtl && expensesTtl) && (theRed > theBlack)) {
									// 									setUserAdvice = "You have some debt issues; prioritize paying the most significant debts first. Do you have any assets you could liquidate or are you in need of debt relief?";
									// 									setUserLink1 = "https://www.aarp.org/money/credit-loans-debt/info-08-2011/negotiating-credit-card-companies.html";
									// 									setUserLink2 = "https://consumer.westchestergov.com/financial-education/credit-and-debt-management/tips-to-reduce-your-debt";
									// 									setUserLink3 = "https://www.investopedia.com/personal-finance/digging-out-of-debt/";
									// setUserText1 = "How to negotiate with credit companies";
									// setUserText2 = "Tips on reducing what you owe";
									// setUserText3 = "Dig your way out of debts";
									// 					} else { 
									// 									setUserAdvice = "Your finances are perfectly balanced! (Seriously, though, what's with that?)";
									// 									setUserLink1 = "https://www.investopedia.com/articles/personal-finance/040715/what-microlending-and-how-does-it-work.asp";
									// 									setUserLink2 = "https://www.nerdwallet.com/article/investing/cryptocurrency-7-things-to-know";
									// 									setUserLink3 = "https://www.investopedia.com/teach-others-about-finances-5217599";
									// setUserText1 = "What is microlending and how does it work?";
									// setUserText2 = "7 things to know about cryptocurrency";
									// setUserText3 = "Teach others about their finances";
									// 					}
				}

    finBreakdown();

				return(
								<>
												<div>
																{userMsg}
																{userNetWorth}
																{userAdvice}
												</div>
												<a href={userLink1}>{userText1}</a>
												<a href={userLink2}>{userText2}</a>
												<a href={userLink3}>{userText3}</a>								
								</>
				);
}