import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

function AllocationForm() {
  const { dispatch, remaining, currency } = useContext(AppContext);

  const [name, setName] = useState('');
  const [action, setAction] = useState('');
  const [cost, setCost] = useState('');

  //   обробка збільнення, зменшення витрат
  const submitEvent = () => {
    if (cost > remaining) {
      alert(`Витрати привисять бюджет (залишок в бюджеті ₴${remaining}) !!!`);
      setCost('');
    }
    const expense = {
      name,
      cost: parseInt(cost),
    };
    if (action === 'Reduce') {
      dispatch({
        type: 'RED_EXPENSE',
        payload: expense,
      });
    } else {
      dispatch({
        type: 'ADD_EXPENSE',
        payload: expense,
      });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3">
          <div
            className="input-group-prepend"
            style={{
              marginBottom: '0.7em',
              marginRight: '0.5em',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Розділ
            </label>
         
          <select
            style={{
              marginBottom: '0.7em',
              marginRight: '1.5em',
            }}
            className="custom-select"
            id="inputGroupSelect01"
            onClick={(e) => setName(e.target.value)}
          >
            <option defaultValue>Оберіть...</option>
            <option value="Marketing" name="marketing">
              Маркетинг
            </option>
            <option value="Finance" name="finance">
              Фінанси
            </option>
            <option value="Sales" name="sales">
              Продажі
            </option>
            <option value="Human Resource" name="hr">
              Робітники
            </option>
            <option value="IT" name="it">
              IT
            </option>
          </select>
          </div>
          <div
            className="input-group-prepend"
            style={{
              marginBottom: '0.7em',
              marginRight: '0.5em',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Витрати
            </label>

            <select
              style={{
                marginBottom: '0.7em',
                marginRight: '1em',
              }}
              className="custom-select"
              id="inputGroupSelect02"
              onClick={(e) => setAction(e.target.value)}
            >
              <option defaultValue="Add" name="Add">
                Збільшити
              </option>
              <option value="Reduce" name="Reduce">
                Зменшити
              </option>
            </select>
          </div>
          <div>
            <span style={{ marginRight: '5px' }}>{currency}</span>
            <input
              style={{
                marginBottom: '0.7em',
                marginRight: '0.5em',
              }}
              type="number"
              value={cost}
              required="required"
              id="cost"
              onChange={(e) => setCost(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={submitEvent}
              style={{
                marginBottom: '0.7em',
              }}
            >
              Застосувати
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AllocationForm;
