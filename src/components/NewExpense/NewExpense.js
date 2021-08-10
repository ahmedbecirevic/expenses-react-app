import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const saveExpsenseDataHandler = (enteredExepnseData) => {
    const expenseData = {
      ...enteredExepnseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpsenseDataHandler} />
    </div>
  );
};

export default NewExpense;
