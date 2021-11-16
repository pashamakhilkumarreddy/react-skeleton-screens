import { useState, useEffect, useCallback } from "react";
import User from "./User";

const URL = "https://fakestoreapi.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    try {
      const res = await fetch(URL);
      const users = await res.json();
      setUsers(users);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="columns is-mobile is-centered is-vcentered is-multiline">
      <h2 className="title mb-0">Users</h2>
      <hr className="is-fullwidth" />
      {users &&
        users.map(
          ({
            id,
            name: { firstname, lastname } = {},
            username,
            email,
            phone,
          }) => {
            const props = {
              id,
              firstname,
              lastname,
              username,
              email,
              phone,
            };
            return <User {...props} key={id} />;
          }
        )}
    </div>
  );
};

export default Users;
