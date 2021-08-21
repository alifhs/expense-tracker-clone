import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import { IncomeExpense } from "./components/incomeExpense";
import { Transactionlist } from "./components/Transactionlist";
import  {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <Transactionlist/>
        <AddTransaction />
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
