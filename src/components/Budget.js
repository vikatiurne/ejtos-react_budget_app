// загальний бюджет

import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Budget() {
  const [budget, setBudget] = useState('2000');
  const { currency, dispatch, expenses } = useContext(AppContext);

  const changeEvent = (e) => {
    const budgetTarget = parseInt(e.target.value);
    dispatch({
      type: 'SET_BUDGET',
      payload: budgetTarget,
    });
    setBudget(budgetTarget);
    const expenseTotal = expenses.reduce(
      (sum, expense) => sum + expense.cost,
      0
    );
    if (budgetTarget > 20000) {
      alert('Бюджет не має бути більшим за ₴ 20000');
    } else if (budgetTarget < expenseTotal) {
      alert('Бюджет має бути більшим за заплановані витрати ');
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Бюджет: {currency} </span>
      <input
        type="number"
        step="10"
        name="Done"
        onChange={changeEvent}
        value={budget}
      />
    </div>
  );
}
export default Budget;
