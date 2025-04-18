import React from 'react';

const Profile = () => {
  return (
    <div className="bg-orange-100 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-orange-800 mb-4">Ninja Card</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-white p-4 rounded-md shadow-md">
          <img src="https://icons.iconseeker.com/png/fullsize/naruto-vol-1/uzumaki-naruto.png" alt="Ninja Avatar" className="rounded-full mx-auto" />
          <h3 className="text-center mt-4 font-bold">Naruto Uzumaki</h3>
          <p className="text-center text-orange-700">Jōnin Rank</p>
        </div>
        <div className="flex-1 bg-white p-4 rounded-md shadow-md">
          <h3 className="font-bold mb-2 text-orange-800">Ninja Stats</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Chakra Level:</span>
              <span className="font-bold">High</span>
            </li>
            <li className="flex justify-between">
              <span>Ninjutsu:</span>
              <span className="font-bold">A</span>
            </li>
            <li className="flex justify-between">
              <span>Taijutsu:</span>
              <span className="font-bold">B+</span>
            </li>
            <li className="flex justify-between">
              <span>Genjutsu:</span>
              <span className="font-bold">C</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;