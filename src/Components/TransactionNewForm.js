import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function TransactionNewForm() {
  const [newTransaction, setNewTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });
  const navigate = useNavigate();

  const addTransaction = () => {
    axios
      .post(`${API}/transactions`, newTransaction)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.prevemtDefault();
    addTransaction();
  };

  const handleTextChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <form className="new-form" onSubmit={handleSubmit}>
        <h2>Add a new item</h2>
        <div>
          <strong>
            <label for="date">Date</label>
          </strong>
        </div>
        <input type="date" name="date" id="date" placeholder="Date" />
        <div>
          <strong>
            <label for="name">Name</label>
          </strong>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={handleTextChange}
        />
        <div>
          <strong>
            <label for="amount">Amount</label>
          </strong>
        </div>
        <input
          type="number"
          name="amount"
          id="amount"
          min="0"
          max="20000"
          placeholder="Amount"
        />
        <div>
          <strong>
            <label>From</label>
          </strong>
        </div>
        <input
          type="text"
          name="from"
          id="from"
          placeholder="From"
          onChange={handleTextChange}
        />
        <div>
          <button className="create-new" type="submit">
            Create New Item
          </button>
        </div>
      </form>
    </div>
  );
}
