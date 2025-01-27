// залишок

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Remaining() {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.cost,
    0
  );
  const styleRamainder =
    totalExpenses > budget ? 'alert-danger' : 'alert-success';
  return (
    <div className={`alert ${styleRamainder}`}>
      <span>
        {totalExpenses < budget
          ? `Залишок: ${currency}${budget - totalExpenses}`
          : `Дефіцит бюджету: ${currency}${totalExpenses - budget}`}
      </span>
    </div>
  );
}
export default Remaining;
