import React from 'react';

const AddAccount = () => {
    return (
        <React.Fragment>   
            <div className="row">
                <div className="form-group col-md-5">
                    <label>Informe a descrição da conta:</label>
                    <input className="form-control" type="text" />
                </div>
                <div className="form-group col-md-2">
                    <label>Saldo Inicial:</label>
                    <input className="form-control" type="number" />
                </div>
                <div className="col-md-2 mt-3">
                    <button type="button" className="btn btn-success mt-3">Gravar</button> 
                </div>
            </div>     
        </React.Fragment>
    )
}

export default AddAccount;