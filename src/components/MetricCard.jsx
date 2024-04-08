import { AreaChart, Area, ResponsiveContainer } from "recharts";

const MetricCard = ({ title, value, change, unit, index }) => {

  const chartStrokeColors = ["#2994e4",  "#00adf0", "#ff9d9f", "#ec3136" ];
  const bgColors = ["#75b3dc", "#007670", "#ffffff", "#ff464c"];
  const chartFillColors = ["#69acd3", "#00544f", "#ffdde0", "#ff3c41 "];

  const strokeColor = chartStrokeColors[index % chartStrokeColors.length];
  const bg = bgColors[index % bgColors.length];
  const chartAreaColor = chartFillColors[index % chartFillColors.length];
  
  // Sample data for the chart
  const data = [
    {
      value: value * 100,
    },
    {
      value: value * 100,
    },
    {
      value: value * 300,
    },
    {
      value: value * 250,
    },
    {
      value: value * 400,
    },
    {
      value: value * 800,
    },
    {
      value: value * 850,
    },
    {
      value: value * 650,
    },
    {
      value: value * 250,
    },
    {
      value: value * 320,
    },
    {
      value: value * 300,
    },
  ];
  const textColor = bg == "#ffffff" ? "text-black" : "text-white";

  return (
    <div className="relative shadow rounded-lg overflow-hidden mx-2 max-w-xs h-40" style={{backgroundColor: bg}}>
      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
        >
          <Area type="monotone" dataKey="value" stroke={strokeColor} strokeWidth={"2"} fill={chartAreaColor} />
        </AreaChart>
      </ResponsiveContainer>
      <div className={`absolute top-0 left-0 p-4 ${textColor}`}>
        <div className="mb-3">
          <p className="mb-1 font-semibold uppercase tracking-wide">{title}</p>
          <p className="text-xs text-[#ffb3b9]">Lorem Epsum</p>
        </div>
        <div className="mb-3">
          <p className="mb-1 text-2xl font-semibold">{value} </p>
          <p className="text-xs">
            {change?.absolute}
            <span> ({change?.percentage})</span>
          </p>
        </div>
        <p className="text-xs">{Math.round(Math.abs(change?.absolute * value * 100) / 100)} {unit}</p>
      </div>
    </div>
  );
};

export default MetricCard;
