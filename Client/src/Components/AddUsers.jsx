import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-hot-toast';
const API_URL = import.meta.env.VITE_API_BASE_URL;

const AddUsers = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    age: "",
    address: "",
    email: ""
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/AddUsers`, userInfo);
      toast.success("User Added Successfully");
      setUserInfo({
        username: "",
        age: "",
        address: "",
        email: ""
      }); // Clear form fields
    } catch (error) {
      toast.error("Failed to add user");
    }
  };

  return (
    <>
      <div className="w-full max-w-xs mx-auto py-9">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              value={userInfo.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Age
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              name="age"
              type="number"
              placeholder="Age"
              value={userInfo.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              value={userInfo.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={userInfo.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center justify-center mt-7">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit gaurav
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center items-center">
        <Link to="/">
          <button className="bg-slate-500 px-4 py-2 rounded-md text-white">
            See All Users
          </button>
        </Link>
      </div>
    </>
  );
};

export default AddUsers;
