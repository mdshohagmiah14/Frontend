import React from 'react';

const Logout = ({ onLogout }) => {
    const handleLogout = () => {
        onLogout();
        console.log('Logged out successfully!');
    };

    return (
        <div className="auth-container flex justify-center items-center min-h-screen">
            <button 
                className="logout-button bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
