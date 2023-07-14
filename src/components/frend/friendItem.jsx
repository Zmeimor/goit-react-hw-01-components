import React from 'react';
import css from "./friends.module.css"
import {BsFillOctagonFill} from "react-icons/bs"
 import PropTypes from "prop-types"
 
 export const FriendItem = ({friendElement}) => {

   return (
      <>
         <span className={friendElement.isOnline ? css.status : css.ofline}><BsFillOctagonFill/>{' '}</span>
         <img className={css.avatar} src={friendElement.avatar} alt={friendElement.name} width="48" />
         <p className={css.name}> {friendElement.name}</p>
      </>

   );
}
FriendItem.propTypes = {
   avatar: PropTypes.any,
   name: PropTypes.string,
   isOnline: PropTypes.bool,
    
     }