import {
  Dashboard,
  BarChart,
  MenuBook,
  Psychology,
  SmartToy,
  CalendarMonth,
  Description,
  Payments,
  Settings,
} from "@mui/icons-material";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Dashboard />,
  },
  {
    title: "Trade Journal",
    path: "/journal",
    icon: <MenuBook />,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: <BarChart />,
  },
  {
    title: "Psychology",
    path: "/psychology",
    icon: <Psychology />,
  },
  {
    title: "THIA AI",
    path: "/thia",
    icon: <SmartToy />,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <CalendarMonth />,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <Description />,
  },
  {
    title: "Billing",
    path: "/billing",
    icon: <Payments />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <Settings />,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold tracking-wide">
          ELLA
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Trading Intelligence Platform
        </p>
      </div>

      <nav className="flex-1 px-3 py-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 mb-2 transition ${
                isActive
                  ? "bg-cyan-600 text-white"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-800 p-4">
        <div className="font-semibold">
          Festus Edwin
        </div>

        <div className="text-sm text-slate-400">
          Mastermind Developer
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;