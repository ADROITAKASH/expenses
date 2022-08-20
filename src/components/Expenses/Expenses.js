import React, { useState } from 'react';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from './ExpenseList';
import Card from '../UI/Card'
import './Expenses.css';

const Expenses = (props) => {
    const [yearFilter, setYearFilter] = useState('');
    const yearFilterHandler = (year) => {
        setYearFilter(year);
    }
    const expenses = props.expenses.filter(expense => expense.date.getFullYear() === yearFilter * 1);

    return (
        <Card className="expenses">
            <ExpensesFilter selected={yearFilter} setFilterYear={yearFilterHandler} />
            <ExpensesChart expenses={expenses} />
            <ExpenseList expenses={expenses} />
        </Card>
    );
}

export default Expenses;