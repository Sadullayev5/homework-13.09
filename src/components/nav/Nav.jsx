import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="bg-blue-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex space-x-6">
                    <li>
                        <Link
                            to='/'
                            className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/profile'
                            className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/auth'
                            className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                        >
                            Auth
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
