import {useState} from "react";


function Results(){
    // let [userNetWorth, setUserNetWorth] = useState("");
    // let [userMsg, setUserMsg] = useState("");
    // let [userAdvice, setUserAdvice] = useState("");
    // let [userLink1, setUserLink1] = useState("");
    // let [userLink2, setUserLink2] = useState("");
    // let [userLink3, setUserLink3] = useState("");

    // setUserNetWorth(<p> 'Lorem ipsum dummy text blabla.' </p>);
    // setUserMsg(<p> 'Lorem ipsum dummy text blabla.' </p>);
    // setUserAdvice(<p> 'Lorem ipsum dummy text blabla.' </p>);
    // setUserLink1(<p> 'Lorem ipsum dummy text blabla.' </p>);
    // setUserLink2(<p> 'Lorem ipsum dummy text blabla.' </p>);
    // setUserLink3(<p> 'Lorem ipsum dummy text blabla.' </p>);


	// VARIABLES
    let incomeTtl = 10;
    let assetsTtl = 20000;
    let expensesTtl = 300;
    let debtsTtl = 40000000;
    let netWorth = incomeTtl + assetsTtl - expensesTtl - debtsTtl;
    let theBlack = incomeTtl + assetsTtl;
    let theRed = expensesTtl + debtsTtl; 

	//Function for if/else statements for result populating
    const finResults = () => {
        console.log('working')
        if (assetsTtl > incomeTtl + expensesTtl + debtsTtl){
            return (
                <div className='results'>
                    <h1 className='final-category'>You have outstanding assets</h1>
                    <h2 className='advice'> Here are some resources!</h2>
                    <h3 className='resources'> Resource </h3>
                    <h3 className='resources'> Resource </h3>
                    <h3 className='resources'> Resource </h3>
                    <h3 className='resources'> Resource </h3>
                </div>
            )
        } else if(incomeTtl > assetsTtl + expensesTtl + debtsTtl) {
            return (
                <div className='results'>
                    <h1 className='final-category'>You have outstanding income</h1>
                    <h2 className='advice'> Here are some resources!</h2>
                    <h3 className='resources'> Resource </h3>
                    <h3 className='resources'> Resource </h3>
                    <h3 className='resources'> Resource </h3>
                    <h3 className='resources'> Resource </h3>

                </div>
            )
        } else if (expensesTtl > incomeTtl + assetsTtl + debtsTtl){
            return (
                <div className='results'>
                    <h1 className='final-category'>You have outstanding expenses</h1>
                    <h2 className='advice'> Here are some resources!</h2>
                    <h3 className='resources'> Resource </h3>
                    <h3 className='resources'> Resource </h3>
                    <h3 className='resources'> Resource </h3>
                    <h3 className='resources'> Resource </h3>
                </div>
            )
        // } else if (debtsTtl < incomeTtl + expensesTtl + assetsTtl){
        } else {
            return (
                <div className='results'>
                    <h1 className='final-category'>You have outstanding debts</h1>
                    <h2 className='advice'> Here are some resources!</h2>
                    <h3 className='resources'> Resource </h3>
                    <h3 className='resources'> Resource </h3>
                    <h3 className='resources'> Resource </h3>
                    <h3 className='resources'> Resource </h3>
                </div>
            )
        }
    }
	

    finResults();

    return(
        <>
            {finResults()}
            {/* {userMsg}
            {userNetWorth}
            {userAdvice}
            <Link name="userLink1" to='google.com'>Google</Link>
            <Link name="userLink2" to='google.com'>Google</Link>
            <Link name="userLink3" to='google.com'>Google</Link>								 */}
        </>
    )

}

export default Results;