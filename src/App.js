import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';

// Add code to import the other components here under

import { AppProvider } from './context/AppContext';
const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
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
    <ExpenseList/>

              {/* Add ExpenseList component here under */}   {' '}
          {/* Add ExpenseItem component here under */}   {' '}
          {/* Add AllocationForm component here under */}
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
