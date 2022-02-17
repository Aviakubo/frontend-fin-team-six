import { useState } from "react";

function Income({incValues, handleIncChange, removeIncFields, addIncFields}) {

    return (

        <form className="formSteps" onSubmit={handleSubmit}>
            <span className="steps">Step 1 |</span> Income
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>$</label>
              <input type="number" name="name" value={element.name} onChange={e => handleIncChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="remove" onClick={() => removeFormFields(index)}>X</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>⊕ Add Income</button>
          </div>
      </form>

    );
}

export default Income;