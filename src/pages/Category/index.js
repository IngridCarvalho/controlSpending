import React from 'react';

import AddCategory from './AddCategory';
import Categories from './Categories';

const Category = () => {
    return (
        <div className='container'>
            <h3 className="mt-4 mb-4">Categorias</h3>
            <AddCategory />
            <Categories />
        </div>
    )
}

export default Category;