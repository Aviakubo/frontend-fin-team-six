import { useState } from 'react';
import Assets from './Assets';
import Debt from './Debt';
import Income from './Income';
import Expenses from './Expenses';
import Donut from './Donut';
import Breakdown from './Breakdown';
import Results from './Results';

function Form() {
    
    //Asset info
    const [assetValues, setAssetValues] = useState([{ name: 0}])

    let handleAssetChange = (i, e) => {
        let newAssetValues = [...assetValues];
        newAssetValues[i][e.target.name] = e.target.value;
        setAssetValues(newAssetValues);
      }
    
    let addAssetFields = () => {
        setAssetValues([...assetValues, { name: 0}])
      }
    
    let removeAssetFields = (i) => {
        let newAssetValues = [...assetValues];
        newAssetValues.splice(i, 1);
        setAssetValues(newAssetValues)
    }

    //Income info
    const [incValues, setIncValues] = useState([{ name: 0}])

    let handleIncChange = (i, e) => {
        let newIncValues = [...incValues];
        newIncValues[i][e.target.name] = e.target.value;
        setIncValues(newIncValues);
      }
    
    let addIncFields = () => {
        setIncValues([...incValues, { name: 0}])
      }
    
    let removeIncFields = (i) => {
        let newIncValues = [...incValues];
        newIncValues.splice(i, 1);
        setIncValues(newIncValues)
    }
    
    //Expense info
    const [expValues, setExpValues] = useState([{ name: 0}])

    let handleExpChange = (i, e) => {
        let newExpValues = [...expValues];
        newExpValues[i][e.target.name] = e.target.value;
        setExpValues(newExpValues);
      }
    
    let addExpFields = () => {
        setExpValues([...expValues, { name: 0}])
      }
    
    let removeExpFields = (i) => {
        let newExpValues = [...expValues];
        newExpValues.splice(i, 1);
        setExpValues(newExpValues)
    }

    //Debt info
    const [debtValues, setDebtValues] = useState([{ name: 0}])

    let handleDebtChange = (i, e) => {
        let newDebtValues = [...debtValues];
        newDebtValues[i][e.target.name] = e.target.value;
        setDebtValues(newDebtValues);
      }
    
    let addDebtFields = () => {
        setDebtValues([...debtValues, { name: 0}])
      }
    
    let removeDebtFields = (i) => {
        let newDebtValues = [...debtValues];
        newDebtValues.splice(i, 1);
        setDebtValues(newDebtValues)
    }

    let totalAmount = 0;
    let assetAmount = 0; 
    let incAmount = 0;
    let expAmount = 0;
    let debtAmount = 0;

    let handleSubmit = (event) => {
        event.preventDefault();

        for(let i=0; i<assetValues.length; i++){
          totalAmount += Number(assetValues[i].name)
          assetAmount += Number(assetValues[i].name)
        }
        console.log(assetAmount)
        for(let i=0; i<incValues.length; i++){
          totalAmount += Number(incValues[i].name)
          incAmount += Number(incValues[i].name)
        }
        for(let i=0; i<expValues.length; i++){
          totalAmount -= Number(expValues[i].name)
          expAmount -= Number(expValues[i].name)
        }
        for(let i=0; i<debtValues.length; i++){
          totalAmount -= Number(debtValues[i].name)
          debtAmount -= Number(debtValues[i].name)
        }
      alert(totalAmount)
    }

    return (
        <>
        <Assets assetValues={assetValues} handleAssetChange={handleAssetChange} removeAssetFields={removeAssetFields} addAssetFields={addAssetFields}/>
        <Income incValues={incValues} handleIncChange={handleIncChange} removeIncFields={removeIncFields} addIncFields={addIncFields}/>
        <Expenses expValues={expValues} handleExpChange={handleExpChange} removeExpFields={removeExpFields} addExpFields={addExpFields}/>
        <Debt debtValues={debtValues} handleDebtChange={handleDebtChange} removeDebtFields={removeDebtFields} addDebtFields={addDebtFields}/>
        <button className='submit' onClick={handleSubmit}>Generate Results</button>
        <Donut assetValues={assetValues} incValues={incValues} expValues={expValues} debtValues={debtValues}/>
        {/* <Breakdown assetValues={assetValues} incValues={incValues} expValues={expValues} debtValues={debtValues}/>  */}
        <Results assetValues={assetValues} incValues={incValues} expValues={expValues} debtValues={debtValues}/> 
        </>

    );
}

export default Form;