import axios from "axios";
import React, { useState } from "react";

const RandomUser = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchUser() {
    try {
      setLoading(true);

      const response = await axios("https://randomuser.me/api");

      setLoading(false);

      if (response.data.results.length === 0) {
        setError("No user data was found. Please try again.");
        return;
      } else {
        setError("");
        setUser(response.data.results[0]);
      }
    } catch (error) {
      setError("An error occurred while fetching user data.");
    }
  }

  return (
    <div>
      <button onClick={fetchUser}>Fetch Random User</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}
      {user && (
        <div>
          <p data-testid="user-name">
            Name: {user.name?.first} {user.name?.last}
          </p>
          <p>Email: {user.email}</p>
          <img src={user.picture?.thumbnail} alt="User thumbnail" />
        </div>
      )}
    </div>
  );
};

export default RandomUser;
