import React, { useContext } from 'react';
import { FaTools } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../../components/AuthContext/AuthContext';

const UnderConstruction = () => {
  const { theme } = useContext(AuthContext);
  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center 
        ${isDark ? 'bg-gray-900 text-white' : 'bg-[#F7F7F7] text-[#005A52]'}`}
    >
      <FaTools className="text-7xl mb-6" />
      <h1 className="text-5xl font-bold mb-4">Page Under Construction</h1>
      <p className={`max-w-xl mb-8 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        We're working hard to bring you something deliciously new! Please check back soon.
      </p>
      <Link to='/Support'>
        <h1
            
            className={`inline-block px-6 py-3 rounded-full font-semibold
            ${isDark ? 'bg-green-700 hover:bg-green-600 text-white' : 'bg-[#005A52] hover:bg-[#004C45] text-white'}
            transition`}
        >
            Go Back
        </h1> 
      </Link>
    </div>
  );
};

export default UnderConstruction;
