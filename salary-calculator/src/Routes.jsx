import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes
import SalaryCalculator from "./pages/SalaryCalculator";

const ProjectRoutes = () => {
    return (
        <Routes> {/* Use Routes to wrap Route components */}
            <Route path="/" element={<SalaryCalculator />} />
        </Routes>
    );
};

export default ProjectRoutes;