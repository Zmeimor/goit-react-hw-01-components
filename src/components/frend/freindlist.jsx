import React from 'react';
import css from "./friends.module.css"
// import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
    return (
        <div className={css.friends}>
            {friends.map(friend => (
                <li className={css.item} key={friend.id}>
                    <span className={friend.isOnline ? css.status : css.ofline}>{friend.isOnline ? 'Online' : 'Offline'}{' '}</span>
                    <img className={css.avatar} src={friend.avatar} alt={friends.name} width="48" />
                    <p className={css.name}> {friend.name}</p>
                </li>
            ))}
        </div>
        );
    };
    // FriendList.propTypes = {
    // }