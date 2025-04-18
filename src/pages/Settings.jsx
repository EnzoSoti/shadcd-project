import React from 'react';

const Settings = () => {
  return (
    <div className="bg-orange-100 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-orange-800 mb-4">Jutsu Settings</h2>
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="font-bold mb-3 text-orange-800">Jutsu Preferences</h3>
          <div className="space-y-3">
            <div>
              <label className="block mb-1">Default Combat Style</label>
              <select className="w-full p-2 border rounded-md">
                <option>Ninjutsu</option>
                <option>Taijutsu</option>
                <option>Genjutsu</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Chakra Display</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="chakra" className="mr-2" defaultChecked />
                  <span>Show</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="chakra" className="mr-2" />
                  <span>Hide</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="font-bold mb-3 text-orange-800">Notification Settings</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span>Mission Alerts</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span>Training Reminders</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Village Updates</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;