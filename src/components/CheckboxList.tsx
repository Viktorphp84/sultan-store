import { FC, useState } from 'react';
import './CheckboxList.scss';

interface ICheckboxList {
    checkBoxList: {
        checkBoxProperty: string;
        count: number;
    }[]
}

const CheckboxList: FC<ICheckboxList> = ({ checkBoxList }) => {
    const [showAll, setShowAll] = useState(false);
    const visibleItems = showAll ? checkBoxList : checkBoxList.slice(0, 4);

    const toggleShowAll = () => setShowAll(!showAll);

    const [checkboxState, setCheckboxState] = useState<string>('');

    function handleCheck() {

    }

    return (
        <div className='containerCheckboxList'>
            {visibleItems.map((item, index) => (
                <div key={index}>
                    <input
                        type='checkbox'                       
                    ></input>
                    <span>{item.checkBoxProperty}</span>
                    <span>({item.count})</span>
                </div>
            ))}
            {(checkBoxList.length > 4) &&
                (<div className='showAll'>
                    <button onClick={toggleShowAll}>
                        {!showAll ? 'Показать все' : 'Скрыть'}
                        <img className={!showAll ? 'triangle' : 'triangle triangle_rotated'} src='images/triangle.svg' />
                    </button>
                </div>)
            }
        </div>
    );
};

export default CheckboxList;