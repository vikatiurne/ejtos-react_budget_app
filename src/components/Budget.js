// загальний бюджет

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Budget() {
  const { budget } = useContext(AppContext);
  return (
    <div className='alert alert-secondary'>
      <span>Бюджет: &#8372;{budget}</span>
    </div>
  );
}
export default Budget;
