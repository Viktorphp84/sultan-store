import {useState, useEffect, useContext, useMemo} from 'react';
import './Pagination.scss';
import ProductCardsContainer from './ProductCardsContainer';
import ProductCard from './ProductCard';
import { IProduct } from '../types/types';
import SortCards from './SortCards';
import { SortContext } from '../context/Context';

interface IPagination {
    cardMap: IProduct[];
}

const Pagination = (props: IPagination) => {

    let [page, setPage] = useState<number>(1);
    let [productCardsInRange, setProductCardsInRange] = useState<IProduct[]>([]);
    let [pages, setPages] = useState<number[]>([]);

    const { typeSorting } = useContext(SortContext);

    function calculateNumberOfProductPages(length: number): number {
        return Math.ceil(length / 15);
    }

    let numberOfPages: number;

    useMemo(() => {
        let sortCardMap: IProduct[];

        if (typeSorting) {
            sortCardMap = props.cardMap.filter((element) => {
                return Object.values(element).some((val) => Array.isArray(val) ? val.includes(typeSorting) : val === typeSorting);
            });
        } else {
            sortCardMap = props.cardMap;
        }
        
        numberOfPages = calculateNumberOfProductPages(sortCardMap.length);

        setPages(Array.from({ length: numberOfPages }, (_, i) => i + 1));

        setProductCardsInRange(getProductCardsInRange(
            sortCardMap,
            15 * page - 14,
            15 * page
        ));

    }, [page, props.cardMap, typeSorting]);

    function getProductCardsInRange(productCardMap: Array<IProduct>, leftRange: number, rightRange: number): Array<IProduct> {
        const filteredArray = productCardMap.filter((product) => {
            return product.id >= leftRange && product.id <= rightRange;
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