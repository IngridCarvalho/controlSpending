import React from 'react';
import { useState } from 'react';

import Accounts from './Accounts';
import AddAccount from './addAccount';

const Account = () => {

    const [updateList, setUpdateList] = useState(false);
    
    const newAccount = (value) => {
        setUpdateList(value);
        setUpdateList(false);
    }

    return (
        <div className='container'>
            <h3 className="mt-4 mb-4">Contas</h3>
            <AddAccount saveAccount={newAccount}/>
            <Accounts updateList={updateList}/>
        </div>
    )
}

export default Account;