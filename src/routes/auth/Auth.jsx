
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Auth = () => {
  const location = useLocation(); 

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-full max-w-[400px] bg-gray-100 rounded-lg shadow-lg p-8">

          {!(location.pathname === '/auth/signup' || location.pathname === '/auth/login') && (
            <div className="flex justify-between">
              <Link
                to="/auth/signup"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Sign Up
              </Link>
              <Link
                to="/auth/login"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Login
              </Link>
            </div>
          )}

          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Auth;
