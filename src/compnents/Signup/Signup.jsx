import React, { useState } from 'react';
import { NavLink,Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <div className="bg-white p-6 md:w-1/2 lg:w-1/4 rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Suman Das'
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="xyz@email.con"

              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-border-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*******"

              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Signup
          </button>
        </form>
      </div>
      <div className="bg-white p-6 md:w-1/2 lg:w-1/4 rounded-lg shadow-2xl">
        <h2 className="text-2xl font-light mb-4"> Signup Done! Login Now. </h2>

        <NavLink to="/login" >
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Signup;
