import { useContext, useState, FC } from 'react';
import './SearchLine.scss';
import { SortContext } from '../context/Context';
import { IProduct } from '../types/types';

interface ISearchLine {
    sortingProperty: keyof IProduct;
}


const SearchLine: FC<ISearchLine> = ({sortingProperty}) => {

    const { setTypeSorting, setSortingProperty } = useContext(SortContext);
    const [searchValue, setSearchValue] = useState<string>('');
    const { setActiveIndexSortCard } = useContext(SortContext);

    const handleClick = () => {
        if (searchValue) {
            setTypeSorting(searchValue);
            setSortingProperty(sortingProperty);
        } else {
            setTypeSorting(searchValue);
            setSortingProperty('title');
            setActiveIndexSortCard(null);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            
            if (searchValue) {
                setTypeSorting(searchValue);
                setSortingProperty(sortingProperty);
            } else {
                setTypeSorting(searchValue);
                setSortingProperty('title');
                setActiveIndexSortCard(null);
            }
        }
    };

    return (
        <div className='searchGroup'>
            <input
                className='manufacturerSearch'
                type='text'
                placeholder='Поиск...'
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <button
                className='searchButton'
                onClick={handleClick}
            ></button>
        </div>
    );
};

export default SearchLine;