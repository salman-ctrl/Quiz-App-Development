import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar (Kiri - 1/5 layar) */}
            <div className="w-1/8 bg-gray-800 text-white p-4">
                <Sidebar />
            </div>

            {/* Konten (Kanan - 4/5 layar) */}
            <div className="flex-1 ">
                <Outlet />

            </div>
        </div>
    );
};

export default Dashboard;
