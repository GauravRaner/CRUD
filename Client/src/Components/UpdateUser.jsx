import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const API_URL = import.meta.env.VITE_API_BASE_URL;


const UpdateUser = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    age: "",
    address: "",
    email: ""
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API_URL}/GetUser/${id}`);
        setUserInfo(res.data);
      } catch (error) {
        toast.error("Failed to fetch user data");
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/UpdateUser/${id}`, userInfo);
      toast.success("User updated successfully");
      navigate('/');
    } catch (error) {
      toast.error("Failed to update user");
    }
  };

  return (
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
