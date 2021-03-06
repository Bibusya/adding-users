import React from "react";
import "./UserList.css";
import Card from "../UI/Card";
const UserList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
