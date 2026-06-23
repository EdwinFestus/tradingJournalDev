// import Register from "../pages/auth/Register";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";


import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";

function AppRoutes() {
    return (
        <Routes>
            <Route 
                path="/login"
                element={<Login/>} 
            />

            <Route element={<ProtectedRoute/>}  >        
                <Route element={<DashboardLayout/>} >

                    <Route 
                        path="/dashboard"
                        element={<Dashboard/>} 
                    />

                    {/* <Route 
                        path="/journal"
                        element={<TradeJournal/>} 
                    /> */}

                    {/* <Route 
                        path="/analytics"
                        element={<Analytics />} 
                    /> */}


                </Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes;                                                                                                                   
            {/* <Route path="/register" element={<Register/>} /> */}
{/* <Route path="/" element={<h1>Home</h1>} /> */}