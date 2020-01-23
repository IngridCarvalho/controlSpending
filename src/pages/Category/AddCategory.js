import React, { useState } from 'react';
import usePost from '../../utils/usePost';

const url = 'https://control-spending.firebaseio.com/categories.json';

const AddCategory = () => {

    const [postData, post] = usePost(url); 
    const [description, setDescription] = useState('');

    const onChangeDescription = evt => {
        setDescription(evt.target.value);
    }

    const saveCategory = () => {
        post({description: description});
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