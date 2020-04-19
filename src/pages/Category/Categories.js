import React, { useEffect }  from 'react';
import Rest from '../../utils/rest';

const { useGet } = Rest();

const Categories = ({ updateList }) => {

    const data = useGet('categories');

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