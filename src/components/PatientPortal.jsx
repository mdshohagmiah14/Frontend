import React, { useState } from 'react';

const BookingForm = ({ onBooking }) => {
    const [formData, setFormData] = useState({
        user: '',
        date: '',
        time: '',
        reason: '',
        status: 'Pending'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting appointment:', formData);
        if (onBooking) {
            onBooking(formData);
            setFormData({ user: '', date: '', time: '', reason: '', status: 'Pending' });
        } else {
            console.error('onBooking function is not defined');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-xl shadow-2xl max-w-lg mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold text-white text-center tracking-wide drop-shadow-lg">Book Your Appointment</h2>
            <div className="mb-4">
                <input
                    type="text"
                    name="user"
                    placeholder="Full Name"
                    value={formData.user}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-transparent rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition duration-200"
                />
            </div>
            <div className="mb-4">
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-transparent rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition duration-200"
                />
            </div>
            <div className="mb-4">
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-transparent rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition duration-200"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="reason"
                    placeholder="Reason for Appointment"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-transparent rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition duration-200"
                />
            </div>
            <button
                type="submit"
                className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
                Book Appointment
            </button>
        </form>
    );
};

export default BookingForm;
