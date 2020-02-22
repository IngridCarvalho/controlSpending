import React, { useState } from 'react';
import Rest from '../../utils/rest';

const baseURL = 'https://control-spending.firebaseio.com/';
const { usePost } = Rest(baseURL);

const AddAccount = ( props ) => {

    const [postData, post] = usePost('accounts');
    const [description, setDescription] = useState('');
    const [balance, setBalance] = useState(0);

    const onChangeDescription = evt => {
        setDescription(evt.target.value);
    }

    const onChangeBalance = evt => {
        setBalance(evt.target.value);
    }

    const saveAccount = async() => {
        await post({
            description: description,
            balance: balance
        });
        setDescription('');
        setBalance(0);
        props.saveAccount(true);
    }

    return (
        <React.Fragment>   
            <div className="row">
                <div className="form-group col-md-5">
                    <label>Informe a descrição da conta:</label>
                    <input className="form-control" type="text" value={description} onChange={onChangeDescription}/>
                </div>
                <div className="form-group col-md-2">
                    <label>Saldo Inicial:</label>
                    <input className="form-control" type="number" value={balance} onChange={onChangeBalance}/>
                </div>
                <div className="col-md-2 mt-3">
                    <button type="button" className="btn btn-success mt-3" onClick={saveAccount}>Gravar</button> 
                </div>
            </div>     
        </React.Fragment>
    )
}

export default AddAccount;