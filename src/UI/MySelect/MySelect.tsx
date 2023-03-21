import React, {useState} from 'react';

import classes from "./MySelect.module.scss";
import drop_down_arrow from "../../assets/drop-down-arrow.svg";

const MySelect = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const toggling = () => {
    setIsOpen(!isOpen)
  }

  const selectOptionClicked = (value: any) => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  const options = ['Apple', 'Banana', 'Orange']

  return (
    <>
      <div className={classes.my_select}>
        <div className={classes.my_select__header} onClick={toggling}>
          <span className={classes.my_select__header__title}>
            {selectedOption || 'Выберите категорию'}
          </span>
          <img src={drop_down_arrow}
               className=
                 {isOpen ? classes.my_select__header__reverse_img : classes.my_select__header__img}
               alt="Выберите категорию"
          />
        </div>
        {isOpen && (
          <ul className={classes.my_select__list}>
            {options.map((option: any) =>
              <li className={classes.my_select__list__item}
                  onClick={() => selectOptionClicked(option)}
                  key={Math.random()}
              >
                {option}
              </li>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default MySelect;