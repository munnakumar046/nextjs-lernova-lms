import UserCard from "@/components/UserCard";
import React from "react";

function AdminPage() {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4 ">
      {/* left */}
      <div className="bg-amber-400 w-full lg:w-2/3 ">
        {/* USER CARDS */}
        <div className="">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      {/* right */}
      <div className="bg-blue-200 w-full lg:w-1/3">right</div>
    </div>
  );
}

export default AdminPage;
