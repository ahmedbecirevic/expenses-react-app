import { Fragment, useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const saveExpsenseDataHandler = (enteredExepnseData) => {
    const expenseData = {
      ...enteredExepnseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditHandler = () => setIsEditing(true);
  const stopEditHandler = () => setIsEditing(false);

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpsenseDataHandler}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
