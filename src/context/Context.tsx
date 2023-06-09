import React, { useState, FC, ReactNode } from "react";
import { IProduct } from "../types/types";

interface ISortContext {
    typeSorting: string;
    setTypeSorting: React.Dispatch<React.SetStateAction<string>>;
    sortingProperty: keyof IProduct;
    setSortingProperty: React.Dispatch<React.SetStateAction<keyof IProduct>>;
    leftPriceRange: number;
    rightPriceRange: number;
    setLeftPriceRange: React.Dispatch<React.SetStateAction<number>>;
    setRightPriceRange: React.Dispatch<React.SetStateAction<number>>;
    activeIndexSortCard: number;
    setActiveIndexSortCard: React.Dispatch<React.SetStateAction<number>>;
}

export const SortContext = React.createContext<ISortContext>({
    typeSorting: '',
    setTypeSorting: () => { },
    sortingProperty: 'title',
    setSortingProperty: () => { },
    leftPriceRange: 0,
    rightPriceRange: Infinity,
    setLeftPriceRange: () => { },
    setRightPriceRange: () => { },
    activeIndexSortCard: -1,
    setActiveIndexSortCard: () => { }
});

export const SortContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [typeSorting, setTypeSorting] = useState('');
    const [sortingProperty, setSortingProperty] = useState<keyof IProduct>('title');
    const [leftPriceRange, setLeftPriceRange] = useState(0);
    const [rightPriceRange, setRightPriceRange] = useState(Infinity);
    const [activeIndexSortCard, setActiveIndexSortCard] = useState<number>(-1);

    return <SortContext.Provider value={{
        typeSorting,
        setTypeSorting,
        sortingProperty,
        setSortingProperty,
        leftPriceRange,
        rightPriceRange,
        setLeftPriceRange,
        setRightPriceRange,
        activeIndexSortCard,
        setActiveIndexSortCard
    }}>
        {children}
    </SortContext.Provider>
}
