import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

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
        <ExpensesList items={expensesFiltered} />
      </Card>
    </div>
  );
};

export default Expenses;
