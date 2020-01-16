import React from 'react';

import AddRevenue from './AddRevenue';
import Revenues from './Revenues';

const Revenue = () => {
    return (
        <div className='container'>
            <h3 className="mt-4 mb-4">Receitas</h3>
            <AddRevenue />
            <Revenues />
        </div>
    )
}

export default Revenue;