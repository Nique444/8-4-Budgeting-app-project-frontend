import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function TransactionShow() {
  const [transaction, setTransaction] = useState({});
  const { index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [index]);
  
  return (
    <div>
      <h3>Item: {transaction.item_name}</h3>
      <p>From: {transaction.from}</p>
      <p>Category: {transaction.category}</p>
    </div>
  );
}
