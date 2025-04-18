import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-orange-100 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-orange-800 mb-4">Village Dashboard</h2>
      <p className="text-orange-700">Welcome to the Hidden Leaf Village!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-md shadow border-l-4 border-orange-500">
          <h3 className="font-bold">Active Missions</h3>
          <p className="text-lg">5</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow border-l-4 border-blue-500">
          <h3 className="font-bold">Available Ninjas</h3>
          <p className="text-lg">12</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow border-l-4 border-green-500">
          <h3 className="font-bold">Completed Missions</h3>
          <p className="text-lg">27</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;