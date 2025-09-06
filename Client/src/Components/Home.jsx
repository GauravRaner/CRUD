import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
const API_URL = import.meta.env.VITE_API_BASE_URL;

const Home = () => {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${API_URL}/GetUsers`);
      setUserData(res.data);
    }
    fetchData()

  }, [])

  const handleDelete = async (userId) => {
    await axios.delete(`${API_URL}/DeleteUser/${userId}`)
    const filterUsers = userData.filter((user) => user._id !== userId)
    setUserData(filterUsers)
    toast.success("User deleted")
  }
  return (
    <>


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((item) => (

                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={item._id}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.username}
                  </th>
                  <td className="px-6 py-4">{ }
                    {item.age}
                  </td>
                  <td className="px-6 py-4">
                    {item.email}
                  </td>
                  <td className="px-6 py-4">
                    {item.address}
                  </td>
                  <td className="px-6 py-4 flex gap-3">

                  <Link to={`/UpdateUser/${item._id}`}>
                      <button className='bg-yellow-400 px-4 py-1 rounded-sm text-white'>Edit</button>
                    </Link>
                    <button className='bg-red-600 px-4 py-1 rounded-sm text-white' onClick={() => handleDelete(item._id)}>Delete</button>
                  </td>
                </tr>

              ))
            }


          </tbody>
        </table>
      </div>

      <div className='mt-6 flex justify-center items-center'>
        <Link to="/AddUsers">
          <button className='bg-blue-400 px-4 py-2 rounded-md'>Add User</button>
        </Link>
      </div>


    </>
  )
}

export default Home