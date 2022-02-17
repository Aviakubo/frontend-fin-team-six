function Breakdown(){

				// VARIABLES
				let incomes = []; // all income entries
				let assets = []; // all asset entries
				let expenses = []; // all expense entries
				let debts = []; // all debt entries
				let totalAmounts = [incomes, assets, expenses, debts]; // Use the nested array for the donut chart
				let netWorth, theBlack, theRed, incomeTtl, assetsTtl, expensesTtl, debtsTtl; // Calculated values in functions below
				let userNetWorth = document.getElementById("userNetWorth"); // Net worth message below donut
				let userMsg = document.getElementById("userMsg"); // "Red" or "Black" message below donut
				let userAdvice = document.getElementById("userAdvice"); // Text advice message below donut
				let userLink = document.getElementById("userLink"); // a-href link for google search below donut

				// COLLATE INCOME/ASSET/EXPENSE/DEBT AMOUNTS
				// e.g. pass in [incomes] and incomeTtl
				// return incomeTtl based [incomes] amounts
				function finTotal(arr, ttl){
        let ttl = 0;
								for (let i = 0; i < arr.length; i++) {
												ttl += arr[i];       
								}
								return ttl;
				}

				// FIND FRACTIONAL VALUES OF TOTAL AMOUNTS RING AND SUBSECTIONS
    // e.g. pass in [income] and incomeTtl found above in finTotal()
    // return a percentage-based array using those values
				function finPercents(arr, ttl){
        let percentArr = [];
								for (let i = 0; i < arr.length; i++){
            percentArr.push(arr[i]/ttl);            
        }
        return percentArr;
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
								if ((incomeTtl > (assetsTtl && expensesTtl && debtsTtl)) || (theBlack > theRed)) {
												userAdvice.innerText = "Nice finances; consider the 70-20-10 rule for handling costs and savings, and putting more funds into long-term assets or properties!";
												userLink.href = "https://www.google.com/search?q=70-20-10+rule+long+term+and+property+investments";
								} else if ((assetsTtl > (incomeTtl && expensesTtl && debtsTtl)) && (theBlack > theRed)) {
												userAdvice.innerText = "Impressive savings and assets; consider investments for a steady income source. If you're close to retiring, are you familiar with the 4-percent rule?";
												userLink.href = "https://www.google.com/search?q=4-percent+rule+steady+return+and+growth+investments";
								} else if ((expensesTtl > (incomeTtl && assetsTtl && debtsTtl)) || (theRed > theBlack)) {
												userAdvice.innerText = "Your expenses are high; consider the 50-30-20 rule, and reduce non-essential spending. Are you interested in financial literacy or other ways to handle costs?";
												userLink.href = "https://www.google.com/search?q=50-30-20+rule+financial+literacy+improving+earning+potential";
								} else if (debtsTtl > (incomeTtl && assetsTtl && expensesTtl) && (theRed > theBlack)) {
												userAdvice.innerText = "You have some debt issues; prioritize paying the most significant debts first. Do you have any assets you could liquidate or are you in need of debt relief?";
												userLink.href = "https://www.google.com/search?q=asset+liquidation+debt+relief+bankruptcy+help";
								} else { 
												userAdvice.innerText = "Your finances are perfectly balanced! (Seriously, though, what's with that?)";
												userLink.href = "http://www.zombo.com";
								}
				}

}

export default Breakdown;