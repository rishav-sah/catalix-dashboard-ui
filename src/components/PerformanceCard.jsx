
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PerformanceCard = ({ metric, status, details }) => {
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">{metric}</h2>
        <span className={`${status == "green" ? "text-green-400" : "text-red-400"}`}><FontAwesomeIcon icon={faCircle} /></span>
      </div>
      <div className="mt-4 space-y-2">
        {Object.entries(details).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-600">{key}</span>
            <span className="text-gray-800 font-bold">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceCard;