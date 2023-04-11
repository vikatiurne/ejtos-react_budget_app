// залишок

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Remaining() {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.cost,
    0
  );
  const styleRamainder =
    totalExpenses > budget ? 'alert-danger' : 'alert-success';
  return (
    <div className={`alert ${styleRamainder}`}>
      <span>Залишок: &#8372;{budget - totalExpenses}</span>
    </div>
  );
}
export default Remaining