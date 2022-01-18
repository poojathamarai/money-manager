import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';

export function AddIncome({ incomelist, setIncomeList }) {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [data, setData] = useState('');
  const history = useHistory();
  return (
    <div className="add-income">
      <TextField id="standard-basic" label="DD/MM/YYYY" variant="standard"
        value={date}
        onChange={(event) => setDate(event.target.value)} />
      <TextField id="standard-basic" label="Enter the amount" variant="standard"
        value={amount}
        onChange={(event) => setAmount(event.target.value)} />
      <TextField id="standard-basic" label="Enter the data" variant="standard"
        value={data}
        onChange={(event) => setData(event.target.value)} />
      <Button
        variant="contained"
        onClick={() => {
          const newIncome = {
            date: date,
            amount: amount,
            data: data
          };
          setIncomeList([...incomelist, newIncome]);
          history.push("/summary/income");
        }}>Add Income</Button>
    </div>
  );
}
