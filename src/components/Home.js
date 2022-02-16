import Income from './Income';
import Expenses from './Expenses';
import Assets from './Assets';
import Debt from './Debt';

function Home() {
    return (
        <div className='home'>
            <p>Home</p>
            <Income />
            <Expenses />
            <Assets />
            <Debt />
            <button>Submit</button>
        </div>
    );
}


export default Home;
