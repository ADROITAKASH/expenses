import React, { useState } from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [addNewForm, setAddNewForm] = useState(false);
    const saveNewExpenseFormHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }
    const newFormHandler = () => {
        setAddNewForm(true);
    }
    const hideNewFormHandler = () => {
        setAddNewForm(false);
    }
    return (
        <div className="new-expense">
            {addNewForm
                ?
                <ExpenseForm submitFormHandler={saveNewExpenseFormHandler} hideForm={hideNewFormHandler} />
                : <button onClick={newFormHandler}>Add New Expense</button>}
        </div>
    );
}

export default NewExpense