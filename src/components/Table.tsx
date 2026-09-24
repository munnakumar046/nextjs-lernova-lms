import { ReactNode } from "react";

type Column = {
  header: string;
  accessor: string;
  className?: string;
};

function Table({
  columns,
  renderRow,
  data,
}: {
  columns: Column[];
  renderRow: (item: any) => ReactNode;
  data: any[];
}) {
  return (
    <table className="w-full mt-4 border-collapse">
      <thead>
        <tr className="text-left font-semibold text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
}

export default Table;
