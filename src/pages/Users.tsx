import React, { FC, useEffect, useState } from "react";
import Profile from "../components/Profile";

type Props = {};
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: Float32Array;
      lng: Float32Array;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const Users: FC<User> = (props: User) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  let cLetterNames: User[] = [];

  const getAllPlaceholderUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        Authentication:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3RuYW1lIjoiWGF2aWVyIiwibGFzdG5hbWUiOiJEb21pbmlxdWUiLCJ1c2VybmFtZSI6IkRvbTU4IiwiZW1haWwiOiJkbmRhaGltYW5hNThAZ21haWwuY29tIiwidGVsZXBob25lIjoiMDc4ODg2MzQ4OCIsInByb2ZpbGUiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9oYWFwYS1zdG9yZS9pbWFnZS91cGxvYWQvdjE2NTY3NDM0MjEvQm9va0NvdmVyL3JqenEwdnNqMjF5NGd1emExbmdzLmpwZyIsInJvbGUiOiJub3JtYWwiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjc4NzEyMjE3LCJleHAiOjE2Nzg3OTg2MTd9.1lqSSFRdWmijctrMmi0kx_zzgZ8N9rCFOuZ01AtIOYk",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
      })
      .catch((error: Error) => {
        console.log("======error====", error);
      });
  };

  if (users) {
    const dt = users.filter((name) => name.name.startsWith("C"));
    localStorage.setItem("names", JSON.stringify(dt));
    cLetterNames = dt;
  }

  useEffect(() => {
    getAllPlaceholderUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>{" "}
      {cLetterNames &&
        cLetterNames
          // .filter((a) => a.name.startsWith("C"))
          .map((usr) => {
            // const { id, name, username } = usr;
            return (
              <div key={usr.id}>
                <Profile {...usr} />
              </div>
            );
          })}
    </div>
  );
};
export default Users;
