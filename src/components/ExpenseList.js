// таблиця бюджету

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';
import styles from './ExpenseList.module.css'

function ExpenseList() {
  const { expenses } = useContext(AppContext);

  return (
    <table className="table">
      <thead className="thead-light">
        <tr className={styles.expenseListTitle} >
          <th scope="col">Розділ</th>
          <th scope="col">Запланована витрата</th>
          <th scope="col">Збільшити на 10</th>
          <th scope="col">Зменшити на 10</th>
          <th scope="col">Онулити</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => {
          return (
            <ExpenseItem

              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          );
        })}
      </tbody>
    </table>
  );
}
export default ExpenseList;
