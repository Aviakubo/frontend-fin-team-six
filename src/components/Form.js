import { useState } from 'react';
import Assets from './Assets';
import Debt from './Debt';
import Income from './Income';
import Expenses from './Expenses';

function Form() {

    const Form = (props) => {
        const [formData, setFormData] = useState({
            searchterm: "",
          });
    }

    return (
        <>
        <Assets />
        <Income />
        <Expenses />
        <Debt />
        <button>Submit</button>
        </>

    );
}

export default Form;