import { useEffect, useState } from "react";
import metricDataJson from "../utils/metricDataJson.json"
import MetricCard from "./MetricCard";
import performanceMetrics from "../utils/performanceMetrics.json"
import PerformanceCard from "./PerformanceCard";
import Pageviews from "./Pageviews";
import Header from "./Header";

const DashboardMain = () => {
  
  const [metricData, setMetricData] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);
  console.log(metricData);
  console.log(performanceData)

  useEffect(() => {
    getMetricData();
    getPerformanceData();
  }, [])

  function getMetricData() {
    setMetricData(metricDataJson);
  };

  function getPerformanceData() {
    setPerformanceData(performanceMetrics);
  };

  return (
    <div className="flex-grow p-4">
      <div className="mb-4">
        <Header />
      </div>
      <div className="mb-4 flex justify-around items-center">
        <a className="py-2 px-6 border border-[#125c72] bg-[#125c72] rounded-full font-semibold text-white tracking-wide" href="#">+ Create Report</a>
        <a className="py-2 px-6 border border-[#125c72] rounded-full font-semibold text-[#125c72] tracking-wide" href="#">Share this dashboard</a>
        <a className="py-2 px-6 border border-[#125c72] rounded-full font-semibold text-[#125c72] tracking-wide" href="#">Select Duration</a>
        <a className="py-2 px-6 border border-[#125c72] rounded-full font-semibold text-[#125c72] tracking-wide" href="#">Compare with Duration</a>
      </div>
      <div className="mb-4 grid grid-cols-4 gap-4">
        {metricData.length &&
          metricData.map((data, index) => <MetricCard key={data.id} index={index} {...data} />)}
      </div>
      <div className="mb-4 grid grid-cols-3 gap-4">
        {performanceData.length && performanceData.map((data) => (
          <PerformanceCard key={data.id} {...data} />
        ))}
      </div>
      <div>
        <Pageviews />
      </div>
    </div>
  );
};

export default DashboardMain;