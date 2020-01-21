import React  from 'react';
import useGet from '../../utils/useGet';

const url = 'https://control-spending.firebaseio.com/categories.json';

const Categories = () => {

    const data = useGet(url);
   
    if(data.loading){
        return <p>Carregando...</p>
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object
                        .keys(data.data) //keys return all index of data
                        .map(categories => {
                            return(
                                <tr key={categories}>
                                    <td>{categories}</td>
                                    <td>{data.data[categories].description}</td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </table>
    )
}

export default Categories;