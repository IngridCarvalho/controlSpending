import React from 'react';

const AddRevenue = () => {
    return (
        <React.Fragment>   
            <div className="row">
                <div className="form-group col-md-4">
                    <label>Informe a descrição da receita:</label>
                    <input className="form-control" type="text" />
                </div>
                <div className="form-group col-md-3">
                    <label>Data de Recebimento:</label>
                    <input className="form-control" type="date" />
                </div>
                <div className="form-group col-md-2">
                    <label>Categoria:</label>
                    <select className="form-control">
                        <option>Salário</option>
                        <option>Investimento</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label>Valor:</label>
                    <input className="form-control" type="number" />
                </div>
                <div className="col-md-1 mt-3">
                    <button type="button" className="btn btn-success mt-3">Gravar</button> 
                </div>
            </div>     
        </React.Fragment>
    )
}

export default AddRevenue;