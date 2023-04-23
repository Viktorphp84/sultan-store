import { useState, useContext, useMemo } from 'react';
import './Pagination.scss';
import ProductCardsContainer from './ProductCardsContainer';
import ProductCard from './ProductCard';
import { IProduct } from '../types/types';
import { SortContext } from '../context/Context';

interface IPagination {
    cardsMap: IProduct[];
}

const Pagination = (props: IPagination) => {

    const [page, setPage] = useState<number>(1);
    const [productCardsInRange, setProductCardsInRange] = useState<IProduct[]>(props.cardsMap);
    const [filteredMapState, setFilteredMapState] = useState<IProduct[]>([]);
    const [pages, setPages] = useState<number[]>([]);

    const {
        typeSorting,
        sortingProperty,
        setSortingProperty,
        leftPriceRange,
        rightPriceRange,
        setRightPriceRange,
        activeIndexSortCard } = useContext(SortContext);

    function calculateNumberOfProductPages(length: number): number {
        return Math.ceil(length / 15);
    }

    let numberOfPages: number;
    let splitTypeSorting: string | string[];

    if (typeSorting === '') setSortingProperty('title');

    if (typeSorting.includes(' ')) {
        splitTypeSorting = typeSorting.split(' ');
    } else {
        splitTypeSorting = typeSorting;
    }

    useMemo(() => {
        let cardsMap: IProduct[];

        if (splitTypeSorting === 'descending' || splitTypeSorting === 'ascending' || splitTypeSorting === 'title') {
            cardsMap = filteredMapState;
        } else if (splitTypeSorting === 'reset' || (typeSorting === "" && sortingProperty === "title")) {
            cardsMap = props.cardsMap;
        } else {
            cardsMap = (((sortingProperty === 'manufacturer' && activeIndexSortCard < 0)
                || (sortingProperty === 'brand' && activeIndexSortCard < 0))
                ? props.cardsMap : (activeIndexSortCard >= 0) ? props.cardsMap : filteredMapState).filter((element) => {
                
                const sortingValue = Array.isArray(element[sortingProperty])
                        ? element[sortingProperty] as string[] : element[sortingProperty] as string;
                console.log(activeIndexSortCard);
                if (Array.isArray(sortingValue)) {
                    for (let i = 0; i < sortingValue.length; ++i) {
                        return sortingValue.includes(typeSorting);
                    }
                } else {
                    if (Array.isArray(splitTypeSorting)) {
                        for (let y = 0; y < splitTypeSorting.length; ++y) {
                            if (splitTypeSorting[y] === sortingValue) return true;
                        }
                    } else {
                        return sortingValue.toLowerCase().includes(splitTypeSorting.toLowerCase());
                    }
                }
                });
        }

        if (rightPriceRange <= leftPriceRange) setRightPriceRange(Infinity);

        const filteredByPriceCardsMap = cardsMap.filter((element) => {
            return ((element.price >= leftPriceRange) && (element.price <= rightPriceRange));
        });

        filteredByPriceCardsMap.sort((a, b) => {
            if (splitTypeSorting === 'descending') {

                if (a[sortingProperty] > b[sortingProperty]) {
                    return -1;
                }
                if (a[sortingProperty] < b[sortingProperty]) {
                    return 1;
                }
                return 0;
            } else {
                if (a[sortingProperty] < b[sortingProperty]) {
                    return -1;
                }
                if (a[sortingProperty] > b[sortingProperty]) {
                    return 1;
                }
                return 0;
            }
        });

        setFilteredMapState(filteredByPriceCardsMap);

        numberOfPages = calculateNumberOfProductPages(filteredByPriceCardsMap.length);

        setPages(Array.from({ length: numberOfPages }, (_, i) => i + 1));

        setProductCardsInRange(getProductCardsInRange(
            filteredByPriceCardsMap,
            15 * page - 15,
            15 * page - 1
        ));

    }, [page, props.cardsMap, typeSorting, sortingProperty, leftPriceRange, rightPriceRange]);

    function getProductCardsInRange(productCardMap: Array<IProduct>, leftRange: number, rightRange: number): Array<IProduct> {
        const filteredArray = productCardMap.filter((product, index) => {
            return index >= leftRange && index <= rightRange;
        });

        return filteredArray;
    }

    return (
        <div className='paginationContainer'>
            <ProductCardsContainer cards={productCardsInRange} renderItem={(item: IProduct) =>
                <ProductCard card={item} />
            } />
            <div className='pagination'>
                {pages.map(p => (
                    <button
                        onClick={() => setPage(p)}
                        key={p}
                        className={p === page ?
                            'buttonNumberPage buttonNumberPage_current' : 'buttonNumberPage'}>{p}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Pagination;