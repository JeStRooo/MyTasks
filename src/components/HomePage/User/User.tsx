import React, {useState} from 'react';

import MuiModal from "../../../MUI/MuiModal/Modal";

import classes from "./User.module.scss";

import MyAvatar from "../../../assets/images/my_avatar.jpg";
import Location from "../../../assets/images/location.svg";

interface UserPropsType {
  whoseProfile: boolean,
  userURLId?: string
}

const User: React.FC<UserPropsType> = ({whoseProfile, userURLId}) => {
  const [isModal, setIsModal] = useState(false)

  const showModal = () => {
    setIsModal(!isModal)
  }

  return (
    <div className={classes.user}>
      <div className={classes.user__info}>
        <img src={whoseProfile ? MyAvatar : `https://i.pravatar.cc/?img=${userURLId}`}
             alt="Аватар"
             className={classes.user__info__avatar}
        />
        <div className={classes.user__info__name}>
          <p className={classes.user__info__name__title}>
            {whoseProfile ? 'Пермяков Руслан' : 'UserName'}
          </p>
          <p className={classes.user__info__name__nickname}>
            {whoseProfile ? '@JeStRooo' : '@nickname'}
          </p>
        </div>
        <div className={classes.user__info__speciality}>
          {whoseProfile ? 'Junior Frontend Developer' : ''}
        </div>
        <div className={classes.user__info__location}>
          <img src={Location} alt="Город"/>
          <p className={classes.user__info__location__town}>
            Ростов-на-Дону
          </p>
        </div>
      </div>
      <div className={classes.user__about}>
        <button type="submit"
                className={classes.user__about__showMore}
                onClick={showModal}
        >
          Подробнее...
        </button>
        {isModal &&
          <MuiModal
            open={isModal}
            handleModal={showModal}
          />
        }
      </div>
    </div>
  );
};

export default User;