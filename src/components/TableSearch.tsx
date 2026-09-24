import { Search } from "lucide-react";
import React from "react";

function TableSearch() {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2 ">
      <Search />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200] p-2 bg-transparent outline-none"
      />
    </div>
  );
}

export default TableSearch;
