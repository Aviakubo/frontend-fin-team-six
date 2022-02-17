import { useState } from 'react';
import Assets from './Assets';
import Debt from './Debt';
import Income from './Income';
import Expenses from './Expenses';
import Donut from './Donut';

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

    let amount = 0;
    let handleSubmit = (event) => {
        event.preventDefault();
        // alert('working')
        for(let i=0; i<assetValues.length; i++){
        amount += Number(assetValues[i].name)
        }
        for(let i=0; i<incValues.length; i++){
        amount += Number(incValues[i].name)
        }
        for(let i=0; i<expValues.length; i++){
        amount -= Number(expValues[i].name)
        }
        for(let i=0; i<debtValues.length; i++){
        amount -= Number(debtValues[i].name)
        }

    alert(amount)
    }


    return (
        <>
        <Assets assetValues={assetValues} handleAssetChange={handleAssetChange} removeAssetFields={removeAssetFields} addAssetFields={addAssetFields}/>
        <Income incValues={incValues} handleIncChange={handleIncChange} removeIncFields={removeIncFields} addIncFields={addIncFields}/>
        <Expenses expValues={expValues} handleExpChange={handleExpChange} removeExpFields={removeExpFields} addExpFields={addExpFields}/>
        <Debt debtValues={debtValues} handleDebtChange={handleDebtChange} removeDebtFields={removeDebtFields} addDebtFields={addDebtFields}/>
        <button className='submit' onClick={handleSubmit}>Submit</button>
        <Donut />
        </>

    );
}

export default Form;