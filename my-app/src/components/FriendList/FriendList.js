import React from 'react';
import ProtoTypes from 'prop-types';
import FriendlistItem from './FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  // console.log(friends);
  return (
    <>
      <section className={s.friends}>
        <h2>FriendList</h2>
        <ul className={s.friendsList}>
          {friends.map(el => {
            const { avatar, name, isOnline, id } = el;

            // const statusClasses = [s.status];
            // // console.log(statusClasses);

            // if (!isOnline) {
            //   statusClasses.push(s.isOffline);
            // }

            return (
              <FriendlistItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                id={id}
                // className={s.item}
                // statusClasses={statusClasses}
              />
              // <li className={s.item} key={id}>
              //   <span className={statusClasses.join(" ")}>{isOnline}</span>
              //   <img className={s.avatar} src={avatar} alt={name} width="48" />
              //   <p className={s.name}>{name}</p>
              // </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default FriendList;

FriendList.protoTypes = {
  avatar: ProtoTypes.string.isRequired,
  name: ProtoTypes.string.isRequired,
  isOnline: ProtoTypes.bool.isRequired,
  id: ProtoTypes.string.isRequired,
};
