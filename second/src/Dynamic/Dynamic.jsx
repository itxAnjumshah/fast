import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import User from './User';

export default function Dynamic() {
  let users = [
    {
      id: 1,
      name: "anjum",
      email: "anjumshahhaq2h",
    },
    {
      id: 2,
      name: "anjum2",
      email: "anjumshahhaq2h2",
    },
    {
      id: 3,
      name: "anjum3",
      email: "anjumshahhaq2h3",
    },
    {
      id: 4,
      name: "anjum4",
      email: "anjumshahhaq2h4",
    },
    {
      id: 5,
      name: "anjum5",
      email: "anjumshahhaq2h5",
    },
  ];

  return (
    <div className="dynamic">
      <h1>This is a dynamic page</h1>
      <Router>
        {users.map((item) => (
          <div key={item.id}>
            <Link to={"/User/" + item.id}>{item.name}</Link>
          </div>
        ))}
      </Router>
      <Router path="User/:name" >
<User/>
      </Router>
    </div>
  );
}
