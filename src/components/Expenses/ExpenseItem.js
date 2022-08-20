import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [newTitle, setNewTitle] = useState(props.title);
    const clickHandler = (event) => {
        setNewTitle('Updated!');
    }
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{newTitle}</h2>
                    <div className="expense-item__price">{props.amount}</div>
                    <button onClick={clickHandler}>Change Title</button>
                </div>
            </Card>
        </li>
    );
}
export default ExpenseItem;