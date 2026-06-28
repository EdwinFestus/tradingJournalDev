import { Routes, Route } from "react-router-dom";
import Login from "../../features/auth/pages/Login"
import Dashboard from "../../features/dashboard/pages/Dashboard";
import TradeJournal from "../../features/trade/pages/TradeJournal";


import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../../layouts/DashboardLayout";

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

                    <Route 
                        path="/journal"
                        element={<TradeJournal/>} 
                    />

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
