"use client";
import { Ellipsis } from "lucide-react";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expence: 2400, amt: 1600 },
  { name: "Feb", income: 4200, expence: 2800, amt: 1400 },
  { name: "Mar", income: 4500, expence: 2600, amt: 1900 },
  { name: "Apr", income: 4100, expence: 4000, amt: 100 },
  { name: "May", income: 4800, expence: 2900, amt: 1900 },
  { name: "Jun", income: 5200, expence: 3500, amt: 1700 },
  { name: "Jul", income: 4300, expence: 2700, amt: 1600 },
  { name: "Aug", income: 4600, expence: 2400, amt: 2200 },
  { name: "Sep", income: 4400, expence: 3200, amt: 1200 },
  { name: "Oct", income: 5000, expence: 3800, amt: 1200 },
  { name: "Nov", income: 5500, expence: 4100, amt: 1400 },
  { name: "Dec", income: 6000, expence: 4800, amt: 1200 },
];

const FinanceChart = () => {
  const [hoveringDataKey, setHoveringDataKey] = React.useState<
    string | undefined
  >(undefined);

  const incomeOpacity = hoveringDataKey === "expence" ? 0.2 : 1;
  const expenceOpacity = hoveringDataKey === "income" ? 0.2 : 1;

  const handleMouseEnter = (o: any) => {
    const { dataKey } = o;
    setHoveringDataKey(dataKey);
  };

  const handleMouseLeave = () => {
    setHoveringDataKey(undefined);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 box-border rounded-xl">
      {/* TITLE */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold text-gray-800">
          Finance Overview
        </h1>
        <Ellipsis className="cursor-pointer text-gray-500" />
      </div>

      {/* CHART CONTAINER */}
      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              wrapperStyle={{ paddingTop: "10px" }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#3b82f6"
              strokeWidth={3}
              strokeOpacity={incomeOpacity}
              activeDot={{ r: 8 }}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="expence"
              stroke="#ef4444"
              strokeWidth={3}
              strokeOpacity={expenceOpacity}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceChart;
