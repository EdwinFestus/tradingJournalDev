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
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-slate-200/80 bg-white/90 text-slate-900 backdrop-blur-xl lg:flex lg:flex-col">
      <div className="border-b border-slate-200 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">
            E
          </div>

          <div>
            <h1 className="text-base font-bold tracking-wide">
              ELLA
            </h1>

            <p className="text-xs font-medium text-slate-500">
              Trading intelligence
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition ${
                isActive
                  ? "bg-slate-950 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              }`
            }
          >
            <span className="[&_.MuiSvgIcon-root]:text-[20px]">
              {item.icon}
            </span>
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-200 p-4">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <div className="text-sm font-semibold">
            Festus Edwin
          </div>

          <div className="mt-1 text-xs text-slate-500">
            Mastermind Developer
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
