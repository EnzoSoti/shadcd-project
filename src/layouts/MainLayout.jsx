// We import the useState hook to manage toggle state (open/close sidebar)
import { useState } from "react";

// Import the Sidebar component (reusable sidebar UI)
import Sidebar from "../components/Sidebar";

// Import an icon (hamburger menu) from react-icons
import { FaBars } from "react-icons/fa";

// This component wraps all pages with common layout (Sidebar + Header + Content)
const MainLayout = ({ children }) => {
  // State to track if the sidebar is open or closed
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // Flex container to hold the sidebar and main content side by side
    <div className="flex">
      
      {/* Sidebar component. We pass two props:
          - isOpen: true or false (from state)
          - toggleSidebar: function to toggle sidebarOpen state */}
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* This is the main content area (everything right of the sidebar) */}
      <div className="flex-1 ml-0 md:ml-64 min-h-screen bg-gray-100 transition-all">

        {/* Header section: visible at the top of every page */}
        <header className="p-4 bg-white shadow-md flex items-center">
          
          {/* Button to open/close sidebar (only visible on small screens - md:hidden) */}
          <button
            className="md:hidden text-xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars /> {/* Hamburger icon */}
          </button>

          {/* Title next to the menu button */}
          <h1 className="ml-4 text-xl font-semibold">My App</h1>
        </header>

        {/* Main content area where each page will be rendered */}
        <main className="p-4">
          {children} {/* This shows whatever page is passed in by the router */}
        </main>
      </div>
    </div>
  );
};

// Export this layout so it can be used in App.jsx
export default MainLayout;
