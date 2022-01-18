import { Show } from './Show';

export function DisplayIncome({ incomelist }) {
  return (
    <div className="income-list">
      {incomelist.map(({ date, amount, data }) => <Show
        date={date}
        amount={amount}
        data={data} />)}
    </div>
  );
}
