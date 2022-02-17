import Income from './Income';
import Expenses from './Expenses';
import Assets from './Assets';
import Debt from './Debt';
import Donut from './Donut';
import Form from './Form';
import moneyPalLogo from '../images/moneyPalLogo.png'

function Home() {
    return (
        <div className='home'>
            <img className='logo' src={moneyPalLogo} alt="MoneyPal Logo" width="60%"/>
            <p>Get your budgeting plan and learn more about how you can improve your financial situation!</p>
            <Form />
        </div>
    );
}


export default Home;
