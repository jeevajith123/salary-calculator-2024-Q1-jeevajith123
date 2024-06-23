import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes
import SalaryCalculator from "./pages/SalaryCalculator";
import NotFound from "./pages/NotFound";

const ProjectRoutes = () => {
    return (
        <Routes> {/* Use Routes to wrap Route components */}
            <Route path="/" element={<SalaryCalculator />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default ProjectRoutes;