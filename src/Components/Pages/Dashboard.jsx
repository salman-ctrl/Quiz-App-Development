import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div className="flex h-auto ">
            {/* Sidebar - 1/8 dari layar */}
            <div className="basis-1/7 bg-gray-800 text-white ">
                <Sidebar />
            </div>

            {/* Konten - Sisa layar */}
            <div className="flex-1 ">
                <Outlet />
            </div>
            
        </div>
    );
};

export default Dashboard;
