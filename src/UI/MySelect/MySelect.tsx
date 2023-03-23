import React, {useState} from 'react';

import {options} from "../../mockData/optionData";

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

  return (
    <>
      <div className={classes.mySelect}>
        <div className={classes.mySelect__header} onClick={toggling}>
          <span className={classes.mySelect__header__title}>
            {selectedOption || 'Выберите категорию'}
          </span>
          <img src={drop_down_arrow}
               className=
                 {isOpen ? classes.mySelect__header__reverseImg : classes.mySelect__header__img}
               alt="Выберите категорию"
          />
        </div>
        {isOpen && (
          <ul className={classes.mySelect__list}>
            {options.map((option: any) =>
              <li className={classes.mySelect__list__item}
                  onClick={() => selectOptionClicked(option)}
                  key={Date.now()}
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