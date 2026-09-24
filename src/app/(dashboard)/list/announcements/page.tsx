import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { announcementsData, eventsData, role, teachersData } from "@/lib/data";
import {
  ArrowDownWideNarrow,
  Eye,
  Plus,
  SlidersHorizontal,
  Trash,
} from "lucide-react";
import Link from "next/link";

type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};
const columns = [
  {
    header: "Title",
    accessor: "title",
    className: "table-cell",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];
function AnnouncementsListPage() {
  const renderRow = (item: Announcement) => (
    <tr key={item.id} className="border-b border-gray-200 text-sm ">
      <td className="flex items-center gap-4 p-4">
        <h3 className="font-semibold">{item.title}</h3>
      </td>
      <td>{item.class}</td>
      <td>{item.date}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/exams/${item.id}`}>
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
        <h1 className="hidden md:block text-lg font-semibold">
          All Announcements
        </h1>
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
        <Table
          columns={columns}
          renderRow={renderRow}
          data={announcementsData}
        />
      </div>
      {/* pagination */}
      <Pagination />
    </div>
  );
}

export default AnnouncementsListPage;
