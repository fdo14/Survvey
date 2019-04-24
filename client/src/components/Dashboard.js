import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="fixed-action-btn">
      <Link
        to="/surveys/new"
        className="btn-floating btn-large red"
        style={{ position: "absolute", bottom: "50px", right: "50px" }}
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
}
