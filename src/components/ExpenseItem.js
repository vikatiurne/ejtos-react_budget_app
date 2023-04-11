// елементи бюджету

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FcPlus } from 'react-icons/fc';
import { TiDelete } from 'react-icons/ti';
import styles from './ExpenseItem.module.css'

function ExpenseItem({ id, name, cost }) {
  const { currency, dispatch } = useContext(AppContext);

  const increaseAllocation = (n) => {
    const expense = {
      name: n,
      cost: 10,
    };
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };

  return (
    <tr className={styles.expenseItem}>
      <td>{name}</td>
      <td>
        {currency} {cost}
      </td>
      <td>
        <FcPlus onClick={() => increaseAllocation(name)} className={styles.addCostIcon} />
      </td>
      <td>
        <TiDelete onClick={handleDeleteExpense} className={styles.deleteCostIcon} />
      </td>
    </tr>
  );
}
export default ExpenseItem;
