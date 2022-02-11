import React, { useState } from "react";
import NewUser from "./Components/User/NewUser";
import Card from "./Components/UI/Card";
import UserList from "./Components/User/UserList";
import { v4 as uuidv4 } from "uuid";
import "./global-styles.css";
const App = () => {
  const [userList, setUserList] = useState([]);
  const newUserDataHandler = (Uname, Uage, id) => {
    setUserList((prevList) => {
      return [...prevList, { username: Uname, age: Uage, id: uuidv4() }];
    });
  };

  return (
    <>
      <NewUser onSubmit={newUserDataHandler} />
      <UserList users={userList} />
    </>
  );
};

export default App;
