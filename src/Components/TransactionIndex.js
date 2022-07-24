import React, { useState } from 'react';
import axios from "axios";
import { useState } from "react";

const API = process.env.REACT_APP_API_URL;


export default function TransactionIndex() {
    const [transactions, setTransactions] = useState([]);

  return (
    <div>TransactionIndex</div>
  )
}
