import PropTypes from "prop-types";
import React from 'react';
import css from "./transactions.module.css"

export const TransItem = ({transactElem}) => {

    return (
       <>
       <th className={css.item} >{transactElem.type}</th>
       <th className={css.item} >{transactElem.amount}</th>
       <th className={css.item} >{transactElem.currency}</th>
       </>
 
    );
 };
 TransItem.propTypes = {
    //  { type, amount, currency} =  transaction,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
 }