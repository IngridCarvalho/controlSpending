import React, { useState } from 'react';
import Rest from '../../utils/rest';

const { usePost, useGet } = Rest();

const AddExpense = ({ newExpense }) => {

    const [postData, post] = usePost('expenses'); 

    const categories = useGet('categories');

    const [description, setDescription] = useState('');
    const [dataPayment, setDataPayment] = useState('');
    const [category, setCategory] = useState({});
    const [amount, setAmount] = useState(0);

    const saveExpense = async(e) => {
        e.preventDefault();

        await post({
            description,
            dataPayment,
            category,
            amount
        });

        setDescription('');
        setDataPayment('');
        setCategory('');
        setAmount(0);

        newExpense(true);
    }

    return(
        <React.Fragment>   
            <form onSubmit={saveExpense}>
                <div className="row">
                    <div className="form-group col-md-4">
                        <label>Informe a descrição da despesa:</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            value={description}
                            onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label>Data de Pagamento:</label>
                        <input 
                            className="form-control" 
                            type="date" 
                            value={dataPayment}
                            onChange={e => setDataPayment(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label>Categoria:</label>
                        <select 
                            className="form-control" 
                            value={category} 
                            onChange={e => setCategory(e.target.value)}>
                                {
                                    Object
                                        .keys(categories.data)
                                        .map(category => (
                                            <option 
                                                key={category} 
                                                value={categories.data[category].description}>
                                                    { categories.data[category].description }
                                            </option>
                                        ))
                                }
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label>Valor:</label>
                        <input 
                            className="form-control" 
                            type="number"
                            value={amount}
                            onChange={e => setAmount(e.target.value)} />
                    </div>
                    <div className="col-md-1 mt-3">
                        <button type="submit" className="btn btn-success mt-3">Gravar</button> 
                    </div>
                </div>
            </form>     
        </React.Fragment>
    )
}

export default AddExpense;