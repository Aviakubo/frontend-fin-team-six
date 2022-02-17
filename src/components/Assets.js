import { useState } from 'react';

function Assets({assetValues, handleAssetChange, removeAssetFields, addAssetFields}) {
  console.log(assetValues)
    return (
        
        <form className='formSteps'>
            <span className="steps">Step 1 |</span> Assets
          {assetValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>$</label>
              <input type="number" name="name" value={element.name} onChange={e => handleAssetChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeAssetFields(index)}>X</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addAssetFields()}>Add</button>
          </div>
      </form>

    );
}

export default Assets;