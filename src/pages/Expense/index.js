import React from 'react';

import Expenses from './Expenses';
import AddExpense from './AddExpense';

const Expense = () => {
    return (
        <div className='container'>
            <h3 className="mt-4 mb-4">Despesas</h3>
            <AddExpense />
            <Expenses />
        </div>
    )
}

export default Expense;