import { Show } from './Show';

export function Display_income({ incomelist }) {
  return (
    <div className="income-list">
      {incomelist.map(({ date, amount, data }) => <Show
        date={date}
        amount={amount}
        data={data} />)}
    </div>
  );
}
