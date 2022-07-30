import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-title">
        <h1>Budget App</h1>
        <button className="new-transaction">
          <Link to="/transactions/new" className="nav-link">New Transaction</Link>
        </button>
    </nav>
  )
}
