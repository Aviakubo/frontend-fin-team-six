import Income from './Income';
import Expenses from './Expenses';
import Assets from './Assets';
import Debt from './Debt';
import Donut from './Donut';
import Form from './Form';

function Home() {
    return (
        <div className='home'>
            <p>Home</p>
            <Form />
            <Donut />
        </div>
    );
}


export default Home;
