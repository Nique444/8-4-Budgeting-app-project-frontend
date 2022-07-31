import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;


export default function TransactionIndex() {
    const [transactions, setTransactions] = useState([]);
    // const [accountTotal, setAccountTotal] = useState(0);

    useEffect(() => {
      axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data);
        // console.log(response.data)
        
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

  return (
    <div>
      <h1 className='index-total'>Bank Account Total: $0 </h1>
      {transactions.map((transaction, index) => {
        return (
          <section key={index} className="index-table">
            <p className='index-date'>{transaction.date}</p>
            <Link to={`/transactions/${index}`}>
              <p className='index-name'>{transaction.item_name}</p>
            </Link>
            <p className='index-amount'>{transaction.amount}</p>
          </section>
        )
      })}
    </div>
  )
}

//make amount dynamic