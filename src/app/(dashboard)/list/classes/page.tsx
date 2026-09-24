import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, role } from "@/lib/data";
import {
  ArrowDownWideNarrow,
  Eye,
  Plus,
  SlidersHorizontal,
  Trash,
} from "lucide-react";
import Link from "next/link";

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};
const columns = [
  {
    header: "Class Name",
    accessor: "name",
    className: "table-cell",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];
function ClassesListPage() {
  const renderRow = (item: Class) => (
    <tr
      key={`${item.id}-${item.name}`}
      className="border-b border-gray-200 text-sm "
    >
      <td className="flex items-center gap-4 p-4">
        <h3 className="font-semibold">{item.name}</h3>
      </td>
      <td>{item.capacity}</td>
      <td>{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="size-5 flex items-center justify-center rounded-full cursor-pointer">
              <Eye className="size-5" />
            </button>
          </Link>
          {role === "admin" && (
            <button className="size-7 flex items-center justify-center rounded-full cursor-pointer">
              <Trash className="size-5" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto ">
          <TableSearch />
          <div className="flex items-center gap-4 self-end mb-2">
            <SlidersHorizontal className="cursor-pointer" />
            <ArrowDownWideNarrow className="cursor-pointer" />
            {role === "admin" && <Plus className="cursor-pointer" />}
          </div>
        </div>
      </div>
      {/* list */}
      <div>
        <Table columns={columns} renderRow={renderRow} data={classesData} />
      </div>
      {/* pagination */}
      <Pagination />
    </div>
  );
}

export default ClassesListPage;
