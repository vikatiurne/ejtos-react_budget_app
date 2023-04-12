import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import Currency from './components/Currency';
import AllocationForm from './components/AllocationForm';
import { AppProvider } from './context/AppContext';

const App = () => {
    return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Розподіл бюджету компанії</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          <div className="col-sm">
            <Currency />
          </div>
          <ExpenseList />
        </div>
        <h3>Змінити витрати</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
