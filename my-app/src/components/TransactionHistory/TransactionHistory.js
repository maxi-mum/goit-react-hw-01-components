import React from 'react';
import ProtoTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ transaction }) => {
  // console.log(transaction);

  return (
    <>
      <h2>TransactionHistory</h2>
      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr>
            <th className={s.tableItem}>Type</th>
            <th className={s.tableItem}>Amount</th>
            <th className={s.tableItem}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transaction.map(el => {
            const { id, type, amount, currency } = el;
            return (
              <tr className={s.tableRow} key={id}>
                <td className={s.tableItem}>{type}</td>
                <td className={s.tableItem}>{amount}</td>
                <td className={s.tableItem}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;

TransactionHistory.protoTypes = {
  id: ProtoTypes.string.isRequired,
  type: ProtoTypes.string.isRequired,
  amount: ProtoTypes.number.isRequired,
  currency: ProtoTypes.string.isRequired,
};
