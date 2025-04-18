import { useState } from "react";
import { NavLink } from "react-router-dom";

import { 
  GiNinjaHeroicStance, 
  GiScrollQuill, 
  GiNinjaStar 
} from "react-icons/gi";  
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { label: "Dashboard", icon: <GiNinjaHeroicStance />, path: "/" },
    { label: "Profile", icon: <GiScrollQuill />, path: "/profile" },
    { label: "Settings", icon: <GiNinjaStar />, path: "/settings" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-orange-800 text-white transition-all z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 ${collapsed ? "w-20" : "w-64"}`}
    >
      <div className="flex items-center justify-between p-4 border-b border-orange-700">
        {!collapsed && <span className="font-bold text-xl">🍥 Konoha App</span>}
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
      <nav className="flex flex-col gap-2 p-4">
        {menuItems.map(({ label, icon, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-orange-700 ${
                isActive ? "bg-orange-600" : ""
              }`
            }
          >
            <span className="text-lg">{icon}</span>
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;