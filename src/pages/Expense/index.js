import React, { useState } from 'react';

import Expenses from './Expenses';
import AddExpense from './AddExpense';

const Expense = () => {

    const [updateList, setUpdateList] = useState(false);

    const newExpense = (value) => {
        setUpdateList(value);
        setUpdateList(false);
    }

    return (
        <div className='container'>
            <h3 className="mt-4 mb-4">Despesas</h3>
            <AddExpense newExpense={newExpense}/>
            <Expenses updateList={updateList}/>
        </div>
    )
}

export default Expense;