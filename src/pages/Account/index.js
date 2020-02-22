import React from 'react';

import Accounts from './Accounts';
import AddAccount from './addAccount';
import { useState } from 'react';

const Account = () => {

    const [updateList, setUpdateList] = useState(false);
    
    const saveAccount = (content) => {
        setUpdateList(content);
        setUpdateList(false);
    }

    return (
        <div className='container'>
            <h3 className="mt-4 mb-4">Contas</h3>
            <AddAccount saveAccount={saveAccount}/>
            <Accounts updateList={updateList}/>
        </div>
    )
}

export default Account;