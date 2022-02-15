import Income from './Income';
import Expenses from './Expenses';

function Home() {
    return (
        <div className='home'>
            <p>Home</p>
            <Income />
            <Expenses />
        </div>
    );
}

export default Home;