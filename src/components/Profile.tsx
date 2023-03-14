import React from "react";
import { User } from "../pages/Users";

type Props = User;

const Profile = (props: Props) => {
  const { id, name, username, email } = props && props;
  return (
    <div>
      {id} | {name} | {username} | {email}
    </div>
  );
};
export default Profile;
