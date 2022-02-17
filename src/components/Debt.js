import { useState } from 'react';

function Debt({debtValues, handleDebtChange, removeDebtFields, addDebtFields}) {
    // const [debtValues, setDebtValues] = useState([{ name: 0}])

    // let handleDebtChange = (i, e) => {
    //     let newDebtValues = [...debtValues];
    //     newDebtValues[i][e.target.name] = e.target.value;
    //     setDebtValues(newDebtValues);
    //   }
    
    // let addDebtFields = () => {
    //     setDebtValues([...debtValues, { name: 0}])
    //   }
    
    // let removeDebtFields = (i) => {
    //     let newDebtValues = [...debtValues];
    //     newDebtValues.splice(i, 1);
    //     setDebtValues(newDebtValues)
    // }
    
    return (
        
        <form className='formSteps'>
            Debts
          {debtValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>$</label>
              <input type="number" name="name" value={element.name} onChange={e => handleDebtChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="remove" onClick={() => removeDebtFields(index)}>X</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addDebtFields()}>⊕ Add Debts</button>
          </div>
      </form>
    );
}

export default Debt;