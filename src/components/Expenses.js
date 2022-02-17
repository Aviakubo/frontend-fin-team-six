import { useState } from "react";

function Expenses({expValues, handleExpChange, removeExpFields, addExpFields}) {

    return (
        
        <form className='formSteps'>
            Expense
          {expValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>$</label>
              <input type="number" name="name" value={element.name} onChange={e => handleExpChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="remove" onClick={() => removeExpFields(index)}>X</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addExpFields()}>⊕ Add Expenses</button>
          </div>
      </form>

    );
}

export default Expenses;