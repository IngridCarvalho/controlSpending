import React from 'react';

const Expenses = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Data de Cadastro</th>
                    <th>Data Pagamento</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Conta de Luz</td>
                    <td>Conta de Luz</td>
                    <td>01/01/2020</td>
                    <td>22/01/2020</td>
                    <td>200,00</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Expenses;