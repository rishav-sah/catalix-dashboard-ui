import DashboardMain from "./components/DashboardMain";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="p-4 flex flex-auto bg-[#f8f8f8]">
      <Sidebar />
      <DashboardMain />
    </div>
  );
};

export default App;