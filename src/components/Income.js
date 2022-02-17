import { useState } from "react";

function Income({incValues, handleIncChange, removeIncFields, addIncFields}) {

    return (
        
        <form>
            Income
          {incValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>$</label>
              <input type="number" name="name" value={element.name} onChange={e => handleIncChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeIncFields(index)}>X</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addIncFields()}>Add</button>
          </div>
      </form>

    );
}

export default Income;