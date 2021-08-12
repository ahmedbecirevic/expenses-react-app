import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = ({ items }) => {
  const [year, setYear] = useState(2021);

  const onYearFilterHandler = (selectedYear) => {
    setYear(Number(selectedYear));
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter defaultYear={year} onSelectYear={onYearFilterHandler} />
        {items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
