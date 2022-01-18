import { Show } from './Show';

export function DisplayExpense({ expenselist }) {
  return (
    <div className="income-list">
      {expenselist.map(({ date, amount, data }) => <Show
        date={date}
        amount={amount}
        data={data} />)}
    </div>
  );
}
