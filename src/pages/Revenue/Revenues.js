import React from 'react';

const Revenues = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Data de Cadastro</th>
                    <th>Data de Recebimento</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Salário mês Janeiro</td>
                    <td>Salário</td>
                    <td>01/01/2020</td>
                    <td>05/01/2020</td>
                    <td>3000,00</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Revenues;