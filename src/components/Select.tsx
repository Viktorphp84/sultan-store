import React, { useContext, FC, useEffect } from 'react';
import { SortContext } from '../context/Context';
import './Select.scss';

const Select: FC = () => {

    const { setSortingProperty, setTypeSorting, activeIndexSortCard } = useContext(SortContext);

    useEffect(() => {
        const selectElement = document.querySelector('.sorting') as HTMLSelectElement;
        selectElement.value = 'title';
    }, [activeIndexSortCard === null]);

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;

        switch (selectedValue) {
            case 'title':
                setSortingProperty('title');
                setTypeSorting('title');
                break;
            case 'descending':
                setSortingProperty('price');
                setTypeSorting('descending');
                break;
            case 'ascending':
                setSortingProperty('price');
                setTypeSorting('ascending');
                break;
        }
    };

    return (
        <div className='select'>
            <span>Сортировка: </span>
            <select className='sorting' onChange={handleSortChange}>
                <option value='title'>Название</option>
                <option value='descending'>По убыванию</option>
                <option value='ascending'>По возрастанию</option>
            </select>
        </div>
    );
};

export default Select;