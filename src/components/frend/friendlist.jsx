import React from 'react';
import css from "./friends.module.css"
 import PropTypes from "prop-types"
 import {FriendItem} from './friendItem';

export const FriendList = ({ friends }) => {
    return (
        <div className={css.friends}>
            {friends.map(friend => (
                <li className={css.item} key={friend.id}>
 <FriendItem 
 friendElement = {friend}/>
 </li>
            ))}
        </div>
        );
    };
 FriendList.propTypes = {

   friends: PropTypes.array,
    id: PropTypes.number,
     }