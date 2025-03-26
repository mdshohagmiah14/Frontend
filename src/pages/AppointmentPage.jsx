import React, { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import BookingForm from "../components/BookingForm";

const AppointmentPage = () => {
    const [appointments, setAppointments] = useState([]);
    const [editingAppointment, setEditingAppointment] = useState(null);
    const [editForm, setEditForm] = useState({ date: "", time: "", reason: "" });

    // Fetch Appointments (READ)
    const fetchAppointments = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/appointments");
            if (!response.ok) throw new Error("Failed to fetch appointments");
            const data = await response.json();
            setAppointments(data);
        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    // Add Appointment (CREATE)
    const addAppointment = async (newAppointment) => {
        try {
            const response = await fetch("http://localhost:4000/api/appointments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newAppointment),
            });

            if (!response.ok) throw new Error("Failed to add appointment");

            const addedAppointment = await response.json();
            setAppointments((prev) => [...prev, addedAppointment]);
        } catch (error) {
            console.error("Error adding appointment:", error);
        }
    };

    // Update Appointment (PATCH)
    const updateAppointment = async (id, updatedData) => {
        try {
            const response = await fetch(`http://localhost:4000/api/appointments/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) throw new Error("Failed to update appointment");

            const updatedAppointment = await response.json();
            setAppointments((prev) =>
                prev.map((appt) => (appt._id === id ? updatedAppointment : appt))
            );
            setEditingAppointment(null); // Close edit form after update
        } catch (error) {
            console.error("Error updating appointment:", error);
        }
    };

    // Delete Appointment (DELETE)
    const deleteAppointment = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/api/appointments/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) throw new Error("Failed to delete appointment");

            setAppointments((prev) => prev.filter((appt) => appt._id !== id));
        } catch (error) {
            console.error("Error deleting appointment:", error);
        }
    };

    // Handle Edit Click
    const handleEditClick = (appointment) => {
        setEditingAppointment(appointment);
        setEditForm({ date: appointment.date, time: appointment.time, reason: appointment.reason });
    };

    // Handle Edit Form Change
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({ ...prev, [name]: value }));
    };

    // Submit Edited Appointment
    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateAppointment(editingAppointment._id, editForm);
    };

    return (
        <div className="appointment-page bg-gray-50 min-h-screen p-6">
            <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">
                Manage Appointments
            </h1>

            {/* Display Appointments */}
            <div className="appointment-list space-y-6">
                {appointments.map((appointment) => (
                    <div
                        key={appointment._id}
                        className="appointment-card bg-white p-6 rounded-lg shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800">
                            User: {appointment.user}
                        </h2>
                        <p className="text-gray-600">Date: {appointment.date}</p>
                        <p className="text-gray-600">Time: {appointment.time}</p>
                        <p className="text-gray-600">Reason: {appointment.reason}</p>
                        <p className="text-gray-600">Status: {appointment.status}</p>

                        {/* Update & Delete Buttons */}
                        <div className="mt-4 flex space-x-4">
                            <button
                                onClick={() =>
                                    updateAppointment(appointment._id, { status: "Confirmed" })
                                }
                                className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition transform hover:scale-105"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={() => deleteAppointment(appointment._id)}
                                className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition transform hover:scale-105"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => handleEditClick(appointment)}
                                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit Appointment Form */}
            {editingAppointment && (
                <div className="edit-form bg-white p-6 rounded-lg shadow-xl mt-6 max-w-lg mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-4">Edit Appointment</h2>
                    <form onSubmit={handleEditSubmit}>
                        <label className="block mb-2">
                            Date:
                            <input
                                type="date"
                                name="date"
                                value={editForm.date}
                                onChange={handleEditChange}
                                className="block w-full p-2 border rounded"
                                required
                            />
                        </label>
                        <label className="block mb-2">
                            Time:
                            <input
                                type="time"
                                name="time"
                                value={editForm.time}
                                onChange={handleEditChange}
                                className="block w-full p-2 border rounded"
                                required
                            />
                        </label>
                        <label className="block mb-2">
                            Reason:
                            <textarea
                                name="reason"
                                value={editForm.reason}
                                onChange={handleEditChange}
                                className="block w-full p-2 border rounded"
                                required
                            />
                        </label>
                        <div className="flex justify-between mt-4">
                            <button
                                type="submit"
                                className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setEditingAppointment(null)}
                                className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Calendar & Booking Form */}
            <div className="appointment-content mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="calendar bg-white p-4 rounded-lg shadow-md">
                    <Calendar />
                </div>
                <div className="booking-form bg-white p-4 rounded-lg shadow-md">
                    <BookingForm onBooking={addAppointment} />
                </div>
            </div>
        </div>
    );
};

export default AppointmentPage;
