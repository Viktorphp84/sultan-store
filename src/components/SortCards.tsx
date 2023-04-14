import {  useContext, useEffect, useState } from 'react';
import { IProduct } from '../types/types';
import './SortCards.scss';
import { SortContext } from '../context/Context';

interface ISortCards {
    sortCardsMap: IProduct[];
}

const SortCards = (props: ISortCards) => {

    const sortCard: string[] = [];

    props.sortCardsMap.forEach((elem) => {
        sortCard.push(...elem.typeOfCare);
    });

    const filterSortCard = sortCard.filter((value, index) => {
        return sortCard.indexOf(value) === index;
    });

    const [activeIndex, setActiveIndex] = useState<number | null>(-1);

    const { setTypeSorting } = useContext(SortContext);

    useEffect(() => {
        if (activeIndex === null) {
            setTypeSorting('');
        } 
    }, [activeIndex]);

    const handleClick = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const sortCardElement = filterSortCard.map((element, index) => {
        const active = activeIndex === index;

        return (
            <button
                className={active ? 'sortCard sortCard_active' : 'sortCard'}
                onClick={() => {
                    handleClick(index);
                    setTypeSorting(element);
                }}
            >
                {element}
            </button>
        );
    });

    return (
        <div className='containerSortCards'>
            {sortCardElement}
        </div>
    );
};

export default SortCards;