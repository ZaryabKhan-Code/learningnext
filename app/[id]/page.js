"use client";
import React, { use, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";

const page = ({ params }) => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + params.id
    );
    setUsers(res.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>page {JSON.stringify(users.username)}</h1>
    </div>
  );
};

export default page;
