import React, { useState } from 'react';
import Rest from '../../utils/rest';

const { usePost } = Rest();

const AddCategory = ({ newCategory }) => {

    const [postData, post] = usePost('categories'); 
    const [description, setDescription] = useState('');

    const saveCategory = async(e) => {
        e.preventDefault();

        await post({description: description});
        setDescription('');

        newCategory(true);
    }

    return (
        <React.Fragment>  
            <form onSubmit={saveCategory}>
                <div className="row">
                    <div className="form-group col-md-5">
                        <label>Informe a descrição da categoria:</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            value={description} 
                            onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <div className="col-md-2 mt-3">
                        <button type="submit" className="btn btn-success mt-3">Gravar</button> 
                    </div>
                </div>     
            </form> 
        </React.Fragment>
    )
}

export default AddCategory;