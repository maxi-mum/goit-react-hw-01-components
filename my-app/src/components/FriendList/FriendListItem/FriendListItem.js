import React from 'react';
import s from './FriendListItem.module.css';

const FriendlistItem = ({ avatar, name, isOnline, id }) => {
  // const statusClasses = [s.status];

  // if (!isOnline) {
  //   statusClasses.push(s.isOffline);
  // }
  // console.log(statusClasses);
  // заменил тернарным оператором и шаблонной строкой

  return (
    <li className={s.item} key={id}>
      {/* <span className={statusClasses.join(" ")}>{isOnline}</span> */}
      <span
        className={
          !isOnline ? `${s.isOffline} ${s.status}` : `${s.isOnline} ${s.status}`
        }
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendlistItem;
