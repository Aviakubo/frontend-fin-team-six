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
        <Income />
        <Expenses />
        <Debt />
        <Assets />
        <button className="submit">Generate Results</button>
        </>

    );
}

export default Form;