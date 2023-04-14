import React, { FC } from 'react';
import { IProduct } from '../types/types';
import './ProductCard.scss'

interface Card {
    card: IProduct;
}

const ProductCard: FC<Card> = ({card}) => {
    return (
        <div className='cardStyle'>
            <img className='imageCard' src={card.url} alt='Product Card' />
            <div>
                <span>{card.size}</span>
                <span>{card.typeOfSize}</span>
            </div>
            <span>{card.name}</span>
            <div>
                <span>Штрихкод: </span>
                <span>{card.barcode}</span>
            </div>
            <div>
                <span>Производитель: </span>
                <span>{card.manufacturer}</span>
            </div>
            <div>
                <span>Бренд: </span>
                <span>{card.brand}</span>
            </div>
            <span>{card.price} &#8381;</span>
            <button>
                В корзину
                <img src='images/simple-line-icons_basket.svg'/>
            </button>

        </div>
    );
};

export default ProductCard;