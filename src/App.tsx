import { useMemo, useState } from 'react';
import './styles/App.scss';
import { productCardMap } from './cards';
import { addCard } from './cards';
import Pagination from './components/Pagination';
import SearchForParameters from './components/SearchForParameters';
import SortCards from './components/SortCards';
import Select from './components/Select';

function App() {
  let [numberOfProductPages, setNumberOfProductPages] = useState<number>(0);
  
  return (
    <div className='App'>
      <header className="header">
        <div className="header__top">
          <div className='header__location'>
            <img className='header__location-icon' src='images/location-icon.svg' alt='location icon' />
            <div className='header__location-text'>
              <span className='header__span-bold-text'>г. Кокчетав, ул. Ж. Ташенова 129Б</span><br />
              <span className='header__normal-text'>(Рынок Восточный)</span>
            </div>
          </div>
          <div className='header__email'>
            <img className='header__envelop-icon' src='images/email-icon.svg' alt='envelop icon' />
            <div className='header__email-text'>
              <span className='header__span-bold-text'>opt.sultan@mail.ru</span><br />
              <span className='header__normal-text'>На связи в любое время</span>
            </div>
          </div>
          <a href='#'>О компании</a>
          <a href='#'>Доставка и оплата</a>
          <a href='#'>Возврат</a>
          <a href='#'>Контакты</a>
          
        </div>
        <hr/>
        <div className='header__bottom'>
          <img className='header__sultan-logo' src='images/sultan-logo.svg' alt='sultan icon' />
          <button className='header__catalog-button'>Каталог</button>
          <button className='header__search-button'>
            Поиск...
            <button></button>
            <img src='images/search-icon.svg' />
          </button>
          <div>
            <span>+7 (777) 490-00-91</span>
            <span>время работы: 9:00-20:00</span>
            <span>Заказать звонок</span>
          </div>
          <img className='header__girl-with-microphone' src='images/girl-with-microphone.png' alt='girl with microphone' />
          <button className='header__download-button'>
            Прайс-лист
            <img src='images/download-icon.svg' />
          </button>
          <img className='header__basket-icon' src='images/basket-icon.svg' alt='basket icon' />
          <button className='header__basket-count'>3</button>
          <div>
            <span>Корзина</span>
            <span className='header__price'>12 500 р</span>
          </div>
        </div>
        <hr/>
      </header>
      <main>
        <span className='breadcrumbs'>
          <span>Главная |</span>
          <span> Косметика и гигиена</span>
        </span>
        <div className='containerSorting'>
          <h1>Косметика и гигиена</h1>
          <div>
            <Select/>
          </div>
        </div>
        <SortCards sortCardsMap={productCardMap} />
        <div className='horizontalContainer'>
          <SearchForParameters />
          <Pagination cardsMap={productCardMap} />
        </div>
        <span className='subString'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate<br />
          feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc<br />
          elit, dignissim sed nulla ullamcorper enim, malesuada.
        </span>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
