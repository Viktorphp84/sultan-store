import { useState, useRef } from 'react';
import './styles/App.scss';
import { productCardMap } from './cards';
import Pagination from './components/Pagination';
import SearchForParameters from './components/SearchForParameters';
import SortCards from './components/SortCards';
import Select from './components/Select';
import useResizeObserver from 'use-resize-observer';

function App() {

  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [top, setTop] = useState<number>(81.9);
  const [heightHorizontalContainer, setHeightHorizontalContainer] = useState<number | undefined>(0);
  const [buttonHideSortCardsClicked, setButtonHideSortCardsClicked] = useState<boolean>(true);

  const horizontalContainer = useRef<HTMLDivElement>(null);

  useResizeObserver<HTMLDivElement>({
    ref: horizontalContainer,
    onResize: (entry) => {
      setHeightHorizontalContainer(entry.height ? (entry.height / window.innerWidth * 100) : 0);
    }
  });

  function handlerContainerSortCards() {
    setIsVisible(!isVisible);
    moveElement();
    handlerButtonHideSortCards();
  }

  const moveElement = () => {
    if (!isVisible) {
      setTop(81.9);
    } else {
      setTop(35);
    }
  };

  function handlerButtonHideSortCards() {
    if (buttonHideSortCardsClicked) {
      setButtonHideSortCardsClicked(false);
    } else {
      setButtonHideSortCardsClicked(true);
    }
  }

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
        <hr />
        <div className='header__bottom'>
          <img className='header__phone-menu' src='images/phone-menu.svg' />
          <img className='header__sultan-logo' src='images/sultan-logo.svg' alt='sultan icon' />
          <button className='header__catalog-button'>Каталог</button>
          <button className='header__search-button'>
            Поиск...
            <button></button>
            <img src='images/search-icon.svg' />
            <img src='images/search-icon-black.svg' />
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
        <hr />
      </header>
      <main>
        <div className='main__back-button'>
          <button></button>
          <span>Назад</span>
        </div>
        <div className='breadcrumbs'>
          <span>Главная |</span>
          <span> Косметика и гигиена</span>
        </div>
        <div className='containerSorting'>
          <h1>Косметика и гигиена</h1>
          <div style={{ top: String(top) + 'vw' }}>
            <Select />
          </div>
        </div>
        <span className='parameterSelectionText'>
          Подбор по параметрам
          <button
            className={buttonHideSortCardsClicked ? 'buttonHideSortCards' : 'buttonHideSortCards buttonHideSortCards_clicked'}
            type='button'
            onClick={handlerContainerSortCards}
          ></button>
        </span>
        <div className='sortCardsContainer'>
          {isVisible && (<SortCards sortCardsMap={productCardMap} />)}
        </div>
        <div
          ref={horizontalContainer}
          className='horizontalContainer'
          style={{ top: String(top + 60) + 'vw' }}
        >
          <SearchForParameters />
          <Pagination cardsMap={productCardMap} />
        </div>
        <span
          className='subString'
          style={{ top: String(heightHorizontalContainer ? (heightHorizontalContainer + top + 70) : 0) + 'vw' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate<br />
          feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc<br />
          elit, dignissim sed nulla ullamcorper enim, malesuada.
        </span>
      </main>
      <footer
        style={{ top: String(heightHorizontalContainer ? (heightHorizontalContainer + top + 145) : 0) + 'vw' }}
      >
        <div>
          <img src='images/sultan-logo-white.svg' alt='sultan logo' />
          <span>Компания «Султан» — снабжаем<br /> розничные магазины товарами<br />
            "под ключ" в Кокчетаве и Акмолинской<br /> области</span>
          <span>Подпишись на скидки и акции</span>
          <input type='text' placeholder='Введите ваш e-mail' />
          <button></button>
        </div>
        <div>
          <span>Меню сайта:</span>
          <a href='#'>О компании</a>
          <a href='#'>Доставка и оплата</a>
          <a href='#'>Возврат</a>
          <a href='#'>Контакты</a>
        </div>
        <div>
          <span>Категории:</span>
          <a href='#'>Бытовая химия</a>
          <a href='#'>Косметика и гигиена</a>
          <a href='#'>Товары для дома</a>
          <a href='#'>Товары для детей и мам</a>
          <a href='#'>Посуда</a>
        </div>
        <div>
          <span>Скачать прайс-лист:</span>
          <button>Прайс-лист</button>
          <span>Связь в месседжерах:</span>
          <div>
            <img src='images/whatsapp-logo.svg' alt='whatsapp logo' />
            <img src='images/telegram-logo.svg' alt='telegram logo' />
          </div>
        </div>
        <div>
          <span>Контакты:</span>
          <span>+7 (777) 490-00-91</span>
          <span>время работы: 9:00-20:00</span>
          <a href='#'>Заказать звонок</a>
          <span>opt.sultan@mail.ru </span>
          <span>На связи в любое время</span>
          <div>
            <img src='images/visa.png' alt='visa image' />
            <img src='images/master-card.png' alt='master card image' />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
