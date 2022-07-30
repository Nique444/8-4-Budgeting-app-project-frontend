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
      .then((response) => navigate("/transactions"))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction();
  };

  const handleChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <form className="new-form" onSubmit={handleSubmit}>
        <div>
          <strong>
            <label htmlFor="date">Date</label>
          </strong>
        </div>
        <input
          type="date"
          name="date"
          id="date"
          onChange={handleChange}
          placeholder="Date"
        />
        <div>
          <strong>
            <label htmlFor="name">Name</label>
          </strong>
        </div>
        <input
          type="text"
          name="item_name"
          id="item_name"
          placeholder="Name"
          onChange={handleChange}
        />
        <div>
          <strong>
            <label htmlFor="amount">Amount</label>
          </strong>
        </div>
        <input
          type="number"
          name="amount"
          id="amount"
          min="0"
          max="20000"
          onChange={handleChange}
          placeholder="Amount"
        />
        <div>
          <strong>
            <label htmlFor="from">From</label>
          </strong>
        </div>
        <input
          type="text"
          name="from"
          id="from"
          placeholder="From"
          onChange={handleChange}
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
