export function Show({ date, amount, data }) {
  return (<li className='list-group-item'>
    {date}<span>{data}</span><span> ₹{amount}	</span>
  </li>);
}
