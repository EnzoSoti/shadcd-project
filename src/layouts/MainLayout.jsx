import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { GiNinjaHeroicStance } from "react-icons/gi";

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex-1 ml-0 md:ml-64 min-h-screen bg-orange-50 transition-all">
        <header className="p-4 bg-orange-100 shadow-md flex items-center">
          <button
            className="md:hidden text-xl text-orange-800"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <GiNinjaHeroicStance /> {/* Ninja icon instead of hamburger */}
          </button>

          <h1 className="ml-4 text-xl font-semibold text-orange-800">Konoha App</h1>
        </header>

        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;