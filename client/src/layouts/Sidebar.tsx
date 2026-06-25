import {
    LayoutDashboard,
    BookOpen,
    BarChart3,
    Settings,
} from "lucide-react"

import { NavLink } from "react-router-dom";


const Sidebar = () => {
    const navItems = [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path: "/dashboard"
        },
        {
            name: "Journal",
            icon: BookOpen,
            path: "/journal"
        },
        {
            name: "Analytics",
            icon: BarChart3,
            path: "/analytics"
        },
        {
            name: "Settins",
            icon: Settings,
            path: "/settings"
        },
    ];

     return (
        <aside className="w-64 bg-[#0B132B] text-white min-h-screen border-r border-slate-800">
            <div className="p-6">
                <h1 className="text-2xl font-bold">
                    Ella
                </h1>

                <p className="text-xs text-slate-400 mt-1">
                    Trading Intelligence Platform
                </p>
            </div>

              <nav className="px-3">
                    {navItems.map((item) => {
                     const Icon = item.icon;

                        return (
                            <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
                                isActive
                                    ? "bg-[#1C2541] text-[#5BC0BE]"
                                    : "hover:bg-slate-800"
                                }`
                            }
                            >
                            <Icon size={18} />
                            <span>{item.name}</span>
                            </NavLink>
                        );
                    })}
                </nav>
        </aside>
    )
}




export default Sidebar;