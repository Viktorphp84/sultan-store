import {  useContext, useEffect } from 'react';
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

    const {
        setSortingProperty,
        setTypeSorting,
        activeIndexSortCard,
        setActiveIndexSortCard,
    } = useContext(SortContext);

    useEffect(() => {
        if (activeIndexSortCard === -1) {
            setTypeSorting('reset');
            setSortingProperty('title');
        } 
    }, [activeIndexSortCard]);

    const handleClick = (index: number) => {
        if (activeIndexSortCard === index) {
            setActiveIndexSortCard(-1);
        } else {
            setActiveIndexSortCard(index);
        }
    };

    const sortCardElement = filterSortCard.map((element, index) => {
        const active = activeIndexSortCard === index;

        return (
            <button
                className={active ? 'sortCard sortCard_active' : 'sortCard'}
                onClick={() => {
                    handleClick(index);
                    setTypeSorting(element);
                    setSortingProperty('typeOfCare');
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