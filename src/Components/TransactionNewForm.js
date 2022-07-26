import React from "react";

export default function TransactionNewForm() {
  return (
    <div>
      <form className="new-form">
        <h2>Add a new item</h2>
        <div>
          <strong><label for="date">Date</label></strong>
        </div>
        <input type="date" name="date" id="date" placeholder="date" />
        <div>
          <strong><label for="name">Name</label></strong>
        </div>
        <input type="text" name="name" id="name" placeholder="name" />
        <div>
          <strong><label for="amount">Amount</label></strong>
        </div>
        <input
          type="number"
          name="amount"
          id="amount"
          min="0"
          max="20000"
          placeholder="amount"
        />
        <div>
          <strong><label>From</label></strong>
        </div>
        <input placeholder="from" />
        <div>
          <button className="create-new">Create New Item</button>
        </div>
      </form>
    </div>
  );
}
