import React, { useState } from 'react';

import AddCategory from './AddCategory';
import Categories from './Categories';

const Category = () => {

    const [updateList, setUpdateList] = useState(false);

    const newCategory = (value) => {
        setUpdateList(value);
        setUpdateList(false);
    }

    return (
        <div className='container'>
            <h3 className="mt-4 mb-4">Categorias</h3>
            <AddCategory newCategory={newCategory}/>
            <Categories updateList={updateList}/>
        </div>
    )
}

export default Category;