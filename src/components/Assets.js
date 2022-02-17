import { useState } from 'react';

function Assets({assetValues, handleAssetChange, removeAssetFields, addAssetFields}) {
  console.log(assetValues)
    return (
      
        <form className="formSteps" onSubmit={handleSubmit}>
           <span className="steps">Step 4 |</span> Assets
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>$</label>
              <input type="number" name="name" value={element.name} onChange={e => handleAssetChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="remove" onClick={() => removeFormFields(index)}>X</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>⊕ Add Assets</button>
          </div>
      </form>

    );
}

export default Assets;