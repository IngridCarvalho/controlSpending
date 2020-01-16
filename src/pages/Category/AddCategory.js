import React from 'react';

const AddCategory = () => {
    return (
        <React.Fragment>   
            <div className="row">
                <div className="form-group col-md-5">
                    <label>Informe a descrição da categoria:</label>
                    <input className="form-control" type="text" />
                </div>
                <div className="col-md-2 mt-3">
                    <button type="button" className="btn btn-success mt-3">Gravar</button> 
                </div>
            </div>     
        </React.Fragment>
    )
}

export default AddCategory;