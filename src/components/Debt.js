import { useState } from 'react';

function Debt() {
    const [formValues, setFormValues] = useState([{ name: 0}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: 0}])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    return (
        
        <form className='formSteps'>
            Debts
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>$</label>
              <input type="number" name="name" value={element.name} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="remove" onClick={() => removeFormFields(index)}>X</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>⊕ Add Debts</button>
          </div>
      </form>
    );
}

export default Debt;