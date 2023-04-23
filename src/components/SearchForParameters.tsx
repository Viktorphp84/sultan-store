import {useContext, useState} from 'react';
import './SearchForParameters.scss';
import { SortContext } from '../context/Context';
import SearchLine from './SearchLine';
import CheckboxList from './CheckboxList';
import { manufacturerArray } from '../cards';

const SearchForParameters = () => {

    const { setLeftPriceRange, setRightPriceRange } = useContext(SortContext);
    const [leftPrice, setLeftPrice] = useState<number>();
    const [rightPrice, setRightPrice] = useState<number>();

    const handleLeftPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (!isNaN(value)) {
            setLeftPrice(value);
            setLeftPriceRange(value);
        }
    };

    const handleRightPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (!isNaN(value)) {
            setRightPrice(value);
            setRightPriceRange(value);
        }
    };

    return (
        <div className='searchForParameters'>
            <span>Подбор по параметрам</span>
            <span>Цена &#8381;</span>
            <div className='priceRange'>
                <input type='text' placeholder='0' value={leftPrice} onChange={handleLeftPriceChange}></input>
                &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
                <input type='text' placeholder='0' value={rightPrice} onChange={handleRightPriceChange}></input>
            </div>
            <span>Производитель</span>
            <SearchLine sortingProperty='manufacturer' />
            <CheckboxList checkBoxList={manufacturerArray} sortingProperty='manufacturer'/>
        </div>
    );
};

export default SearchForParameters;