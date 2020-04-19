import React, { useEffect } from 'react';
import Rest from '../../utils/rest';

const { useGet } = Rest();

const Expenses = ({ updateList }) => {

    const data = useGet('expenses');

    useEffect(() => {
        if(updateList){
            data.refetch();
        }

    }, [updateList]);
   
    if(data.loading){
        return <p>Carregando...</p>
    }
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Data Pagamento</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
            {
                Object
                    .keys(data.data) //keys return all index of data
                    .map(expenses => {
                        return(
                            <tr key={expenses}>
                                <td>{data.data[expenses].description}</td>
                                <td>{data.data[expenses].category}</td>
                                <td>{data.data[expenses].dataPayment}</td>
                                <td>{data.data[expenses].amount}</td>
                            </tr>
                        )
                    })
            }
            </tbody>
        </table>
    )
}

export default Expenses;