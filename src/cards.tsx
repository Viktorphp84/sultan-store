import { IProduct } from './types/types';

const card_1: IProduct = {
    id: 1,
    url: 'images/card-1.png',
    title: 'AOS Ср-во для мытья посуды Апельсин+мята',
    typeOfSize: 'мл',
    size: '450',
    typeOfCare: ['Уход за руками'],
    barcode: Date.now(),
    manufacturer: 'Нэфис',
    brand: 'AOS',
    description: 'Средство для мытья посуды жидкое AOS Апельсин и мята — цитрусовый ' +
        'аромат нейтрализует неприятные запахи, отлично пенится и легко смывается водой.' +
        'Эффективно удаляет загрязнения даже в холодной воде.Придает посуде кристально чистый ' +
        'блеск.После ополаскивания не оставляет на посуде разводов.',
    price: 123
}

const card_2: IProduct = {
    id: 2,
    url: 'images/card-2.png',
    title: 'AOS средство для мытья посуды Crystal',
    typeOfSize: 'мл',
    size: '450',
    typeOfCare: ['Уход за руками'],
    barcode: Date.now(),
    manufacturer: 'Нэфис',
    brand: 'AOS',
    description: 'Средство для мытья посуды AOS Crystal 450 г. Современное,' +
        'высокофункциональное средство с легкостью отмывает даже самые сложные загрязнения ' +
        'и глубоко въевшийся жир.Главной отличительной особенностью формулы "AOS" является ' +
        'его безопасность, так как оно полностью смывается с поверхности посуды.Идеальное ' +
        'решение для тех, кто заботится о себе и своих близких.',
    price: 274
}

const card_3: IProduct = {
    id: 3,
    url: 'images/card-3.png',
    title: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
    typeOfSize: 'г',
    size: '15x28,8',
    typeOfCare: ['Средство для стирки'],
    barcode: Date.now(),
    manufacturer: 'Франция',
    brand: 'Ariel',
    description: 'Невероятная чистота в одной маленькой капсуле! Капсулы для стирки Ariel Pods Всё-в-1 Горный родник имеют уникальный многосекционный дизайн, позволяющий надежно сохранять компоненты в отдельных секциях капсулы до начала стирки, и обладают высококонцентрированными очищающими свойствами.',
    price: 675
}

const card_4: IProduct = {
    id: 4,
    url: 'images/card-4.png',
    title: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
    typeOfSize: 'г',
    size: '1500',
    typeOfCare: ['Средство для стирки'],
    barcode: Date.now(),
    manufacturer: 'Россия',
    brand: 'Bimax',
    description: 'Стиральный порошок предназначен для замачивания, стирки и отбеливания изделий из хлопчатобумажных, льняных, синтетических тканей, а также тканей из смешанных волокон. Не предназначен для стирки изделий из шерсти и натурального шелка. Порошок имеет пониженное пенообразование, содержит биодобавки и перекисные соли.',
    price: 299
}

const card_5: IProduct = {
    id: 5,
    url: 'images/card-5.png',
    title: 'BioMio BIO-SOAP Экологичное туалетное мыло',
    typeOfSize: 'г',
    size: '90',
    typeOfCare: ['Уход за руками'],
    barcode: Date.now(),
    manufacturer: 'Россия',
    brand: 'Biomio',
    description: 'Экологичное гипоаллергенное мыло BioMio BIO-SOAP с эфирными маслами бергамота и литсея кубебы мягко очищает даже чувствительную кожу. Оливковое масло и витамин Е питают и смягчают ее. Ионы серебра придают мылу антибактериальный эффект. Эфирные масла бергамота и литсея кубебы с его леденцово-лимонным ароматом бодрят и освежают. Мыло BIO-SOAP не содержит компоненты животного происхождения, подходит для веганов.',
    price: 67
}

const card_6: IProduct = {
    id: 6,
    url: 'images/card-6.jpg',
    title: 'BioMio BIO-SOAP Натуральное мыло. Гранат и базилик',
    typeOfSize: 'г',
    size: '90',
    typeOfCare: ['Уход за руками'],
    barcode: Date.now(),
    manufacturer: 'Россия',
    brand: 'Biomio',
    description: 'Натуральное веганское мыло BioMio AROMATHERAPY заботится о вашей коже и настроении. В составе мыла эфирное масло базилика, которое превращает каждое мытье рук в сеанс ароматерапии. Его запах окутывает вас как теплый плед и навевает согревающие уютные воспоминания. Гидролат плодов граната увлажняет и тонизирует кожу рук.',
    price: 80
}

const card_7: IProduct = {
    id: 7,
    url: 'images/card-7.jpg',
    title: 'Гель для душа "Удовое дерево и сандал"',
    typeOfSize: 'мл',
    size: '250',
    typeOfCare: ['Уход за телом'],
    barcode: Date.now(),
    manufacturer: 'Россия',
    brand: '4frech BEAUTY',
    description: 'Восстанавливающий гель для душа 4fresh BEAUTY - это особенно мягкое очищение кожи и потрясающий глубокий древесно-восточный аромат, который погружает вас в состояние баланса и спокойствия.',
    price: 377
}

const card_8: IProduct = {
    id: 8,
    url: 'images/card-8.jpg',
    title: 'Шампунь для объема с Медом и Пивом Logona',
    typeOfSize: 'мл',
    size: '500',
    typeOfCare: ['Уход за волосами'],
    barcode: Date.now(),
    manufacturer: 'Германия',
    brand: 'Logona',
    description: 'Шампунь объем с пивом и медом специально разработан для особо тонких и требовательных волос. Мягкие очищающие субстанции, пиво, укрепляющее структуру волос, и тщательно подобранная композиция растительных экстрактов придают Вашим волосам ощутимо больше объёма и упругости, не утяжеляя их.',
    price: 1870
}

const card_9: IProduct = {
    id: 9,
    url: 'images/card-9.jpg',
    title: 'Гель для душа "Органический Инжир"',
    typeOfSize: 'мл',
    size: '1000',
    typeOfCare: ['Уход за телом'],
    barcode: Date.now(),
    manufacturer: 'Франция',
    brand: 'Coslys',
    description: '100% натуральный нежный гель для душа с мягкими моющими веществами растительного происхождения бережно очищает кожу и обладает оптимальным уровнем pH. Органический экстракт инжира защищает её от внешних воздействий, а экстракт корня цикория делает кожу мягкой и гладкой.',
    price: 1823
}

const card_10: IProduct = {
    id: 10,
    url: 'images/card-10.jpg',
    title: 'Сыворотка для лица "Витамин С"',
    typeOfSize: 'мл',
    size: '30',
    typeOfCare: ['Уход за лицом'],
    barcode: Date.now(),
    manufacturer: 'Россия',
    brand: 'Levrana',
    description: 'Всем известно что витамин С – это сильнейший антиоксидант, но к сожалению в чистом виде аскорбиновая кислота не стабильна. Зная это, мы используем Л-аскорбиновую кислоту, она устойчива к свету и стабильна.',
    price: 494
}

const card_11: IProduct = {
    id: 11,
    url: 'images/card-11.jpg',
    title: 'Полирующий скраб для лица №50 Sativa',
    typeOfSize: 'мл',
    size: '50',
    typeOfCare: ['Уход за лицом'],
    barcode: Date.now(),
    manufacturer: 'Беларусь',
    brand: 'Sativa',
    description: 'Эффективный скраб интенсивного ухода с повышенным содержанием нежных бамбуковых частиц. Тщательно очищает кожу не пересушивая и не травмируя её. Специальный комплекс растительных экстрактов и масел обладает противовоспалительным действием, улучшает кислородный обмен и кровообращение.',
    price: 972
}

const card_12: IProduct = {
    id: 12,
    url: 'images/card-12.jpg',
    title: 'Увлажняющий мусс для тела "Strawberry & Chocolate" Organic Shop',
    typeOfSize: 'мл',
    size: '450',
    typeOfCare: ['Уход за телом', 'Уход за лицом'],
    barcode: Date.now(),
    manufacturer: 'Россия',
    brand: 'Organic Shop',
    description: 'Побалуйте вашу кожу нежнейшим лакомством Strawberry & Chocolate и насладитесь максимально длительным ощущением мягкости и комфорта.',
    price: 640
}

const card_13: IProduct = {
    id: 13,
    url: 'images/card-13.jpg',
    title: 'Шампунь-скраб для укрепления и роста волос с репейным маслом 4fresh BEAUTY',
    typeOfSize: 'мл',
    size: '300',
    typeOfCare: ['Уход за волосами'],
    barcode: Date.now(),
    manufacturer: 'Россия',
    brand: '4frech BEAUTY',
    description: 'Шампунь для укрепления и роста волос с отшелушивающими сахарными частичками специального помола эффективно очищает кожу головы и улучшает питание корней.',
    price: 525
}

const card_14: IProduct = {
    id: 14,
    url: 'images/card-14.jpg',
    title: 'Гель для интимной гигиены Levrana',
    typeOfSize: 'мл',
    size: '250',
    typeOfCare: ['Уход за телом'],
    barcode: Date.now(),
    manufacturer: 'Россия',
    brand: 'Levrana',
    description: 'Очень мягкое и бережное очищение, ухаживает за самой нежной кожей тела, восстанавливает и поддерживает естественный рН-баланс, идеально подходит для ежедневного применения.',
    price: 310
}

const card_15: IProduct = {
    id: 15,
    url: 'images/card-15.jpg',
    title: 'Масло "Кокосовое" Parachute',
    typeOfSize: 'мл',
    size: '200',
    typeOfCare: ['Уход за телом', 'Уход за лицом', 'Уход за волосами'],
    barcode: Date.now(),
    manufacturer: 'Индия',
    brand: 'Parachute',
    description: 'Кокосовое масло Parachute — это натуральный продукт. Масло изготавливается без использования ароматизаторов, отдушек, загустителей, красителей.',
    price: 260
}

const card_16: IProduct = {
    id: 16,
    url: 'images/card-16.jpg',
    title: 'Дезодорант-кристалл с соком Алоэ DeoNat',
    typeOfSize: 'г',
    size: '60',
    typeOfCare: ['Уход за телом'],
    barcode: Date.now(),
    manufacturer: 'Таиланд',
    brand: 'DeoNat',
    description: 'Основа кристалла – минеральная соль, добываемая из природных бокситов - аммониево-калиевые квасцы, называемые в Тайланде «сан сом». Абсолютно безвреден для организма, так как в отличие от многих современных дезодорантов не содержит хлоридрат алюминия, и прочие вредные химические субстанции.',
    price: 274
}

const card_17: IProduct = {
    id: 17,
    url: 'images/card-17.jpg',
    title: 'Шампунь с био-манго и алое, увлажняющий Sante',
    typeOfSize: 'мл',
    size: '950',
    typeOfCare: ['Уход за волосами'],
    barcode: Date.now(),
    manufacturer: 'Германия',
    brand: 'Sante',
    description: 'Натуральный увлажняющий шампунь с био-манго и алое свободен от силиконов. Его эффективная формула разработана специально для ухода за сухими волосами. Шампунь с инулином и мягкими растительными тензидами бережно очищает кожу головы и волосы. Входящие в состав алое и органический экстракт плода манго обеспечивают интенсивное увлажнение и защиту от потери влаги.',
    price: 1694
}

const card_18: IProduct = {
    id: 18,
    url: 'images/card-18.jpg',
    title: 'Крем солнцезащитный для лица и тела "Sun Screen"',
    typeOfSize: 'мл',
    size: '50',
    typeOfCare: ['Уход за телом'],
    barcode: Date.now(),
    manufacturer: 'Россия',
    brand: 'Mi&Ko',
    description: 'Cолнцезащитный крем Sun Screen SPF 30 разработан на основе природных фильтров, полезных для кожи. В составе нет диоксида титана. UVA- и UVB-защиту обеспечивает безопасный минеральный фильтр - оксид цинка, который одобрен даже для младенцев и встречается во многих поливитаминах.',
    price: 900
}

export const productCardMap: Array<IProduct> = [
    card_1,
    card_2,
    card_3,
    card_4,
    card_5,
    card_6,
    card_7,
    card_8,
    card_9,
    card_10,
    card_11,
    card_12,
    card_13,
    card_14,
    card_15,
    card_16,
    card_17,
    card_18
];

interface ICountProperty {
    [key: string]: number;
}

const manufacturerCounts: ICountProperty = productCardMap.reduce((acc: ICountProperty, product: IProduct) => {
    const manufacturer = product.manufacturer;
    acc[manufacturer] = acc[manufacturer] ? acc[manufacturer] + 1 : 1;
    return acc;
}, {});

const brandCounts: ICountProperty = productCardMap.reduce((acc: ICountProperty, product: IProduct) => {
    const brand = product.brand;
    acc[brand] = acc[brand] ? acc[brand] + 1 : 1;
    return acc;
}, {});

export const manufacturerArray = Object.entries(manufacturerCounts).map(([checkBoxProperty, count]) => ({ checkBoxProperty, count }));
export const brandArray = Object.entries(brandCounts).map(([checkBoxProperty, count]) => ({ checkBoxProperty, count }));

export function addCard(card: IProduct): Array<IProduct> {
    productCardMap.push(card);
    return productCardMap;
}
