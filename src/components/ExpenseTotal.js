// загальні витрати

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function ExpenseTotal() {
  const { expenses,currency } = useContext(AppContext);
  const expenseTotal = expenses.reduce((sum, expense) => sum + expense.cost, 0);
  return <div className="alert alert-primary">
    <span>Витрати: {currency}{expenseTotal}</span>
  </div>;
}
export default ExpenseTotal
