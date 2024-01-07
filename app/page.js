"use client";
import React, { use, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Header from "@/Components/Header";
import { MyContext } from "@/Helper/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const [num, setNum] = useState(10);
  const user_data = useContext(MyContext);
  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    setUsers(res.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const notify = () => toast("Wow so easy!");

  return (
    <>
      <button className="btn btn-success mt-5" onClick={notify}>
        Get login
      </button>
      <ToastContainer />
      <h1>{user_data}</h1>
      <Header />

      <button onClick={getUsers} className="btn btn-primary p-2 m-5">
        Get Data
      </button>
      <div className="p-8 mt-5">
        {users.map((elem, i) => {
          return (
            <ul>
              <li key={i}>
                {elem.email} --- <Link href={`/${elem.id}`}>Explore</Link>
              </li>
            </ul>
          );
        })}
      </div>

      <Link href="/Contact">Contact</Link>
      <h1>This is Home Page</h1>
      <form className="container mt-4">
        <div className="form-group">
          <lable>Enter your name:</lable>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
      </form>
    </>
  );
};

export default page;
