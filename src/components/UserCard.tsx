import { Ellipsis } from "lucide-react";

function UserCard({ type }: { type: string }) {
  return (
    <div className="p-4 rounded-2xl bg-indigo-300 flex-1">
      <div className="flex items-center justify-between">
        <span className="text-sm bg-white px-2 py-1 rounded-2xl text-green-700">
          18/10/2001
        </span>
        <Ellipsis />
      </div>
      <h1 className="text-2xl font-semibold my-2 ">382343</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
}

export default UserCard;
