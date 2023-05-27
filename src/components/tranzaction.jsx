import css from "./transactions.module.css"

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
                            <th className={css.item} >{transaction.type}</th>
                            <th className={css.item} >{transaction.amount}</th>
                            <th className={css.item} >{transaction.currency}</th>
                </tr>
    
        ))}
                    </tbody>
                    </table>
    );
};