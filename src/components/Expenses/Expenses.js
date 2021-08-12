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

  const expensesFiltered = items.filter(
    (expense) => expense.date.getFullYear() === year
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter defaultYear={year} onSelectYear={onYearFilterHandler} />
        {expensesFiltered.length === 0 && <p>No expenses found</p>}
        {expensesFiltered.length > 0 &&
          expensesFiltered.map((expense) => (
            <ExpenseItem
              key={expense.id}
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
