import React, { FC } from 'react';
import ProductCard from './ProductCard';
import { IProduct } from '../types/types';
import './ProductCardsContainer.scss'

interface cardsContainer {
    cards: IProduct[];
    renderItem: (item: IProduct) => React.ReactNode
}

export default function ProductCardsContainer<IProduct> (props: cardsContainer) {

    return (
        <div className='productCardsContainer'>
            {props.cards.map(props.renderItem)}
        </div>
    )
}