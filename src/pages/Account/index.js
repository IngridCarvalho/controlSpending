import React from 'react';
import Accounts from './Accounts';
import AddAccount from './addAccount';

const Account = () => {
    return (
        <div className='container'>
            <h3 className="mt-4 mb-4">Contas</h3>
            <AddAccount />
            <Accounts />
        </div>
    )
}

export default Account;