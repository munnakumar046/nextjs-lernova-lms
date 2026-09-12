import { Bell, BellPlus, MessageCircle, Search } from "lucide-react";
import { Avatar } from "./ui/avatar";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-blue-50">
      {/* searchbar */}
      <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2 ">
        <Search />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200] p-2 bg-transparent outline-none"
        />
      </div>
      {/* icon and user */}

      <div className="flex items-center gap-6 justify-end w-full">
        <div className="size-7 flex items-center justify-center cursor-pointer">
          <MessageCircle />
        </div>
        <div className=" rounded-full size-7 items-center cursor-pointer relative">
          <Bell />
          <div className="absolute -top-3 -right-3 size-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col ">
          <span className="text-sm leading-3 font-medium">Munna</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Avatar />
      </div>
    </div>
  );
}

export default Navbar;
