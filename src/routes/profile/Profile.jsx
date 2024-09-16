import React from 'react';
import { Outlet } from 'react-router-dom';
import { useProfileQuery } from '../../redux/api/profileApi';

const Profile = () => {
  const { data } = useProfileQuery();

  return (
    <div className="h-64 flex items-center justify-center bg-white overflow-hidden">
      {data && data.payload && (
        <div className="bg-white shadow-xl rounded-lg p-6 max-w-md w-full m-4">
          <div className="flex items-center space-x-4 mb-4">
            <img 
              src={data.payload.photo_url} 
              alt="Profile" 
              className="w-24 h-24 rounded-full border-4"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{data.payload.username}</h1>
              <p className="text-gray-500">{data.payload.first_name}</p>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Profile;

