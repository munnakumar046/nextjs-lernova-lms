"use client";

import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
const EventCalendar = dynamic(() => import("@/components/EventCalendar"), {
  ssr: false,
  loading: () => <Skeleton className="aspect-video w-full" />,
});

function AdminPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] p-4 gap-4 items-stretch">
      <div className="flex flex-col gap-4 h-full flex-1">
        {/* USER CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/* middle chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-6">
          <div>
            <CountChart />
          </div>
          <div>
            <AttendanceChart />
          </div>
        </div>

        {/* BOTTOM CHART: flex-grow lagaya taaki bacha hua space ye cover kare agar jarurat ho */}
        <div>
          <FinanceChart />
        </div>
      </div>

      {/* 3. Right Side: h-full lagaya aur components ko space-between distribute karne ke liye flex-1 diya */}
      <div className="w-full flex flex-col gap-4 h-full flex-1">
        <div className="bg-white">
          <EventCalendar />
        </div>
        <div>
          <Announcements />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
