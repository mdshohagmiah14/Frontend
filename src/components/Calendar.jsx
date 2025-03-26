import React, { useState } from 'react';

const Calendar = () => {
    const [appointments] = useState([
        { id: 1, title: "Consultation with Dr. Smith", date: "2025-03-26", time: "10:00 AM" },
        { id: 2, title: "Dental Checkup", date: "2025-03-27", time: "2:00 PM" },
    ]);

    return (
        <div className="calendar-container p-8 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-semibold text-center mb-6">Appointment Calendar</h2>
            <div className="calendar-list space-y-4">
                {appointments.map((appointment) => (
                    <div key={appointment.id} className="appointment-card bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-medium mb-2">{appointment.title}</h3>
                        <p className="text-lg">Date: {appointment.date}</p>
                        <p className="text-lg">Time: {appointment.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
