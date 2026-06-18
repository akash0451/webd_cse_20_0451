import React, { useEffect, useState } from "react";

function Users() {

  // State for storing users
  const [users, setUsers] = useState([]);

  // Fetch API data using useEffect
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });

  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <h1>Fetching API Data using useEffect</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px"
          }}
        >
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      ))}

    </div>
  );
}

export default Users;