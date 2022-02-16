import Income from './Income';
import Expenses from './Expenses';
import Assets from './Assets';
import Debt from './Debt';
import Donut from './Donut';

function Home() {
    return (
        <div className='home'>
            <p>Home</p>
            <Income />
            <Expenses />
            <Assets />
            <Debt />
            <Donut />
            <button>Submit</button>
        </div>
    );
}


export default Home;
