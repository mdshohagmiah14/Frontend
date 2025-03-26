import React from 'react';
const PatientPage = () => {
    return (
        <div className="patient-page">
            <h1>Patient Dashboard</h1>
            <p>Manage your profile, view appointments, and connect with your doctor.</p>
            <ul className="patient-options">
                <li>View your upcoming appointments</li>
                <li>Update your profile information</li>
                <li>Search for nearby clinics</li>
            </ul>
        </div>
    );
};

export default PatientPage;
