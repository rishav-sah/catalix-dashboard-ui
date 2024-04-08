
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faHome, faStopwatch, faChartColumn, faRocket, faLayerGroup, faGear, faRightFromBracket, faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { name: "Home", icon:faHome, path: "/"},
    { name: "Activities", icon: faStopwatch, path: "/activities"},
    { name: "Analytics", icon: faChartColumn, path: "/analytics"},
    { name: "Transformation", icon: faRocket, path: "/transformation"},
    { name: "Library", icon: faLayerGroup, path: "/library"},
    { name: "Settings", icon: faGear, path: "/settings"},
    { name: "Logout", icon: faRightFromBracket, path: "/logout"},
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <aside className={`transition-width duration-300 ease-in-out ${isOpen ? "w-64" : "w-16"} rounded-3xl bg-[#125c72] h-[96vh] p4 text-white`} aria-label="Sidebar">
      <div className="pr-4 pt-8 text-3xl text-right">
        <button className="cursor-pointer" onClick={toggleSidebar}>
          {
            !isOpen ? <FontAwesomeIcon icon={faChevronCircleRight} /> : <FontAwesomeIcon icon={faChevronCircleLeft} />
          }
        </button>
      </div>
      <div className="mt-6 text-4xl font-semibold flex items-center space-x-2">
        <FontAwesomeIcon className="pl-4 mr-6" icon={faCube} />
        {isOpen && <span>Catalix</span>}
      </div>

      <nav className="px-4 py-16">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="hover:bg-[#2d91b0] rounded-md transition-colors cursor-pointer"
            >
              <span className="flex items-center p-2 rounded-md">
                <FontAwesomeIcon size="lg" icon={item.icon} />
                {isOpen && <span className="ml-6">{item.name}</span>}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;