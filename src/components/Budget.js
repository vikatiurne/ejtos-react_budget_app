// загальний бюджет

import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Budget() {
  const [budget, setBudget] = useState('2000');
  const {remaining} = useContext(AppContext);
  
  const handlerBudget = (e) => {
    e.preventDefault();
       if (+e.target.value < remaining) {
      alert('Бюджет має бути більшим за заплановані витрати ');
      setBudget(remaining)
    }else if (+e.target.value > 20000) {
      alert('Бюджет не має бути більшим за ₴ 20000');
      setBudget('2000')
    }else{
      setBudget(e.target.value)
    }
  };


  return (
    <div className="alert alert-secondary">
      <span>Бюджет: &#8372;</span>
        <input type="number" step="10" onChange={handlerBudget} value={budget}/>
    </div>
  );
}
export default Budget;
