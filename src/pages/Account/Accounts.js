import React from 'react';
import useGet from '../../utils/useGet';

const url = 'https://control-spending.firebaseio.com/accounts.json';

const Accounts = () => {

    const data = useGet(url);
   
    if(data.loading){
        return <p>Carregando...</p>
    }

    return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Saldo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object
                            .keys(data.data)
                            .map(accounts => {
                                return(
                                    <tr key={accounts}>
                                        <td>{data.data[accounts].description}</td>
                                        <td>{data.data[accounts].balance}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
    )
}

export default Accounts;