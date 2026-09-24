"use client";
import { Ellipsis } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", present: 18, absent: 2 },
  { name: "Tue", present: 19, absent: 1 },
  { name: "Wed", present: 17, absent: 3 },
  { name: "Thu", present: 20, absent: 0 },
  { name: "Fri", present: 15, absent: 5 },
  { name: "Sat", present: 10, absent: 2 },
  { name: "Sun", present: 8, absent: 1 },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white h-full flex flex-col justify-between p-4 box-border border border-gray-100 rounded-xl">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">Attendance</h1>
        <Ellipsis className="cursor-pointer text-gray-500" />
      </div>

      <div className="w-full flex-1 min-h-[250px] mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f3f4f6"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar
              dataKey="present"
              fill="#4ade80"
              radius={[4, 4, 0, 0]}
              name="Present"
              barSize={16}
            />
            <Bar
              dataKey="absent"
              fill="#f87171"
              radius={[4, 4, 0, 0]}
              name="Absent"
              barSize={16}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
