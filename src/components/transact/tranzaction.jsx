import PropTypes from "prop-types";
import React from 'react';
import css from "./transactions.module.css";
import {TransItem} from "./transactElem"

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactions}>
                    <thead>
                        <tr>
                            <th className={css.item} >Type</th>
                            <th className={css.item} >Amount</th>
                            <th className={css.item} >Currency</th>
                        </tr>
                    </thead>
 
                    <tbody >
 {items.map(transaction => (

          
 
          <tr key = {transaction.id}>
 <TransItem 
transactElem = {transaction}/>
 
                </tr>
    
        ))}
                    </tbody>
                    </table>
    );
};

TransactionHistory.propTypes = {
//    {id} = transaction,
    items: PropTypes.arrayOf,
    transaction: PropTypes.arrayOf,
    id: PropTypes.string,
 }