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
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800 text-center">Book Your Appointment</h2>
            <div className="space-y-4">
                
                <div>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="reason"
                        placeholder="Reason for Appointment"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Book Appointment
                    </button>
                </div>
            </div>
        </form>
    );
};

export default BookingForm;
