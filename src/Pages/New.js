import React from "react";
import TransactionNewForm from "../Components/TransactionNewForm";

export default function New() {
  return (
    <div className="New">
      <h2 className="new-title">Add a new item</h2>
      <TransactionNewForm />
    </div>
  );
}
