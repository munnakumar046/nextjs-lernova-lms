"use client";
import { Ellipsis } from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Total", count: 70, fill: "#facc15" },
  { name: "Girls", count: 20, fill: "#4ade80" },
  { name: "Boys", count: 50, fill: "#b45309" },
];

const CountChart = () => {
  return (
    <div className="bg-white h-full flex flex-col justify-between p-4 box-border rounded-xl">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">Students</h1>
        <Ellipsis className="cursor-pointer text-gray-500" />
      </div>

      <div className="w-full flex-1 min-h-[250px] my-2">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="100%"
            barSize={14}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff", fontSize: 10 }}
              background
              dataKey="count"
            />
            <Legend
              iconSize={10}
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }}
            />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center gap-10 border-t border-blue-200 pt-2">
        <div className="flex flex-col items-center">
          <div className="size-4 bg-amber-700 rounded-full mb-1" />
          <h1 className="font-bold text-sm">382</h1>
          <h2 className="text-xs text-gray-500">Boys (55%)</h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-4 bg-yellow-400 rounded-full mb-1" />
          <h1 className="font-bold text-sm">382</h1>
          <h2 className="text-xs text-gray-500">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
