import { useState } from "react";

function Expenses() {

    const [formValues, setFormValues] = useState([{ name: ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: ""}])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
        
        <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Expense</label>
              <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>X</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>

    );
}

export default Expenses;




// import $ from 'jquery'

// function Expenses() {
//     let $input;
// //create button 
// const addExpBtn = document.getElementById('expenses');

// $(addExpBtn).on('click', function() {
//     //button grabs input from user
//     let $input = $('#input-exp').val();   
//     //post user input to li element & update exps list
//     $('ul').append(`<li> <button class='x'>X</button>  ${$input} </li>`);
//     //clear input field
//     $('#input-exp').val('')
//     //remove exp from list
//     $('.x').on('click', function(evt) {
//         $(this).closest('li').remove();
//     });
// })
//     return (
//         <div className='expenses'>
//             <input type="text"  
//                 placeholder="Expenses" 
//                 id="expenses">
//             </input>
//             <br />
//             <button>Add Expense</button>
            
//         <br/>
//         </div>
//     );
// }

// export default Expenses;