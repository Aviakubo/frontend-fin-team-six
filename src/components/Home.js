import Income from './Income';
import Expenses from './Expenses';
import Assets from './Assets';
import Debt from './Debt';
import Donut from './Donut';
import Form from './Form';

function Home() {
    return (
        <div className='home'>
            <h1>Money Pal</h1>
            <p>Get your budgeting plan and learn more about how you can improve your financial situation!</p>
            <Form />
            {/* <Donut /> */}
        </div>
    );
}


export default Home;
