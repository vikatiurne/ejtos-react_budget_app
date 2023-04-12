import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import styles from './Currency.module.css';

function Currency() {
  const { dispatch } = useContext(AppContext);
  const [currencyName, setCurrencyName] = useState('₴UAH');

  const currencyArr = [
    { currency: 'UAH', mark: '₴' },
    { currency: 'Dollar', mark: '$' },
    { currency: 'Pound', mark: '£' },
    { currency: 'Euro', mark: '€' },
    { currency: 'Ruppee', mark: '₹' },
  ];

  const onclickEvent = (e) => {
    const currencyTarget = e.target.value;
    dispatch({
      type: 'CHG_CURRENCY',
      payload: currencyTarget,
    });
    setCurrencyName(e.target.value);
  };

  return (
    <div className={`alert ${styles.currency}`}>
      <label htmlFor="s1">Валюта:</label>
      <select onChange={onclickEvent} id="s1">
        <option label={currencyName} hidden></option>
        {currencyArr.map((curr) => {
          return (
            <option key={curr.currency} value={curr.mark}>
               {curr.mark}
              {curr.currency}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default Currency;
