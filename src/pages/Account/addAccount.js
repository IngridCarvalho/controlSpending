import React, { useState } from 'react';
import Rest from '../../utils/rest';

const { usePost } = Rest();

const AddAccount = ({ newAccount }) => {

    const [postData, post] = usePost('accounts');
    const [description, setDescription] = useState('');
    const [balance, setBalance] = useState(0);

    const saveAccount = async(e) => {
        e.preventDefault();

        await post({
            description: description,
            balance: balance
        });
        setDescription('');
        setBalance(0);
        
        newAccount(true);
    }

    return (
        <React.Fragment>  
            <form onSubmit={saveAccount}>
                <div className="row">
                    <div className="form-group col-md-5">
                        <label>Informe a descrição da conta:</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            value={description} 
                            onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label>Saldo Inicial:</label>
                        <input 
                            className="form-control" 
                            type="number" 
                            value={balance} 
                            onChange={e => setBalance(e.target.value)}/>
                    </div>
                    <div className="col-md-2 mt-3">
                        <button type="submit" className="btn btn-success mt-3">Gravar</button> 
                    </div>
                </div> 
            </form>     
        </React.Fragment>
    )
}

export default AddAccount;