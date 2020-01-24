import React, { useState } from 'react';
import Rest from '../../utils/rest';

const baseURL = 'https://control-spending.firebaseio.com/';
const { usePost } = Rest(baseURL);

const AddCategory = () => {

    const [postData, post] = usePost('categories'); 
    const [description, setDescription] = useState('');

    const onChangeDescription = evt => {
        setDescription(evt.target.value);
    }

    const saveCategory = async() => {
        await post({description: description});
        setDescription('');
    }

    return (
        <React.Fragment>   
            <div className="row">
                <div className="form-group col-md-5">
                    <label>Informe a descrição da categoria:</label>
                    <input className="form-control" type="text" value={description} onChange={onChangeDescription}/>
                </div>
                <div className="col-md-2 mt-3">
                    <button type="button" className="btn btn-success mt-3" onClick={saveCategory}>Gravar</button> 
                </div>
            </div>     
        </React.Fragment>
    )
}

export default AddCategory;