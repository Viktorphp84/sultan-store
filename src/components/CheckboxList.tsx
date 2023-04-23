import { FC, useContext, useState, useEffect } from 'react';
import './CheckboxList.scss';
import { SortContext } from '../context/Context';
import { IProduct } from '../types/types';

interface ICheckboxList {
    checkBoxList: {
        checkBoxProperty: string;
        count: number;
    }[],
    sortingProperty: keyof IProduct;
}

const CheckboxList: FC<ICheckboxList> = ({ checkBoxList, sortingProperty }) => {
    
    const [showAll, setShowAll] = useState(false);
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    const { setTypeSorting, setSortingProperty, setActiveIndexSortCard } = useContext(SortContext);

    const visibleItems = showAll ? checkBoxList : checkBoxList.slice(0, 4);

    const toggleShowAll = () => setShowAll(!showAll);

    useEffect(() => {
        const checkedItemsString = checkedItems.join(" ");
        setTypeSorting(checkedItemsString);
        setSortingProperty(sortingProperty);
        if (checkedItems.length === 0) setActiveIndexSortCard(-1);
    }, [checkedItems, setTypeSorting, setSortingProperty, sortingProperty]);

    function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
        const item = event.target.value;
        if (event.target.checked) {
            setCheckedItems(prevCheckedItems => [...prevCheckedItems, item]);
        } else {
            setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
        }
    }

    return (
        <div className='containerCheckboxList'>
            {visibleItems.map((item, index) => (
                <div key={index}>
                    <input
                        type='checkbox'
                        value={item.checkBoxProperty}
                        onChange={handleCheck}
                    ></input>
                    <span>{item.checkBoxProperty}</span>
                    <span>({item.count})</span>
                </div>
            ))}
            {(checkBoxList.length > 4) &&
                (<div className='showAll'>
                    <button onClick={toggleShowAll}>
                        {!showAll ? 'Показать все' : 'Скрыть'}
                        <img className={!showAll ? 'triangle' : 'triangle triangle_rotated'} src='images/triangle.svg' />
                    </button>
                </div>)
            }
        </div>
    );
};

export default CheckboxList;