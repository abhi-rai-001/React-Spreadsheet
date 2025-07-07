import React, { useState, useEffect, useCallback, useRef } from "react";
import ActionButtons from "./ActionButtons";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { ColumnDef } from '@tanstack/react-table';

interface TaskData {
  id: number;
  jobRequest: string;
  submittedDate: string;
  status: "In-process" | "Need to start" | "Complete" | "Blocked" | "";
  submitter: string;
  url: string;
  assigned: string;
  priority: "High" | "Medium" | "Low" | "";
  dueDate: string;
  estValue: string;
}

const baseData: TaskData[] = [
  {
    id: 1,
    jobRequest: "Launch social media campaign for product launch",
    submittedDate: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "6,200,000",
  },
  {
    id: 2,
    jobRequest: "Update press kit for company redesign",
    submittedDate: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhan.com",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: "3,500,000",
  },
  {
    id: 3,
    jobRequest: "Finalize user testing feedback for app redesign",
    submittedDate: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohns.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: "4,750,000",
  },
  {
    id: 4,
    jobRequest: "Design new features for the website",
    submittedDate: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen.com",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: "5,900,000",
  },
  {
    id: 5,
    jobRequest: "Prepare financial report for Q4",
    submittedDate: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrown.com",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: "2,800,000",
  },
];

/* 20 empty rows */
const emptyRows: TaskData[] = Array.from({ length: 20 }).map((_, i) => ({
  id: baseData.length + i + 1,
  jobRequest: "",
  submittedDate: "",
  status: "",
  submitter: "",
  url: "",
  assigned: "",
  priority: "",
  dueDate: "",
  estValue: "",
}));

const data: TaskData[] = [...baseData, ...emptyRows];


const getStatusColor = (status: string) => {
  switch (status) {
    case "In-process":
      return "bg-[#FFF3D6] text-[#85640B]";
    case "Need to start":
      return "bg-[#E2E8F0] text-[#475569]";
    case "Complete":
      return "bg-[#D3F2E3] text-[#0A6E3D]";
    case "Blocked":
      return "bg-[#FFE1DE] text-[#C22219]";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return " text-[#EF4D44] font-extrabold";
    case "Medium":
      return " text-[#C29210] font-extrabold";
    case "Low":
      return "text-[#1A8CFF] font-extrabold";
    default:
      return "bg-gray-100 text-gray-800 font-extrabold";
  }
};


const columns: ColumnDef<TaskData>[] = [
  { header: "#", accessorKey: "id" as const },
  { header: "Job Request", accessorKey: "jobRequest" as const },
  { header: "Submitted", accessorKey: "submittedDate" as const },
  {
    header: "Status",
    accessorKey: "status" as const,
    cell: ({ getValue }) => {
      const value = getValue<string>();
      return value ? (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
            value
          )}`}
        >
          {value}
        </span>
      ) : (
        ""
      );
    },
  },
  { header: "Submitter", accessorKey: "submitter" as const },
  {
    header: "URL",
    accessorKey: "url",
    cell: ({ getValue }) => {
      const url = getValue<string>();
      return url ? (
        <a
          href={`https://${url}`}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {url}
        </a>
      ) : (
        ""
      );
    },
  },
  { header: "Assigned", accessorKey: "assigned" as const },
  {
    header: "Priority",
    accessorKey: "priority" as const,
    cell: ({ getValue }) => {
      const value = getValue<string>();
      return value ? (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(
            value
          )}`}
        >
          {value}
        </span>
      ) : (
        ""
      );
    },
  },
  { header: "Due Date", accessorKey: "dueDate" as const },
  {
    header: "Est. Value",
    accessorKey: "estValue",
    cell: ({ getValue }) =>
      getValue<string>() ? (
        <>
          {getValue<string>()} <span className="text-[#AFAFAF]">₹</span>
        </>
      ) : (
        ""
      ),
  },
];

const SpreadsheetApp: React.FC = () => {
 
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number }>(
    { row: 0, col: 0 }
  );

  const tableRef = useRef<HTMLTableElement>(null);

  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  columnResizeMode: 'onChange',
  enableColumnResizing: true,
  });

 
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTableCellElement>) => {
      let { row, col } = selectedCell;
      const maxRow = data.length - 1;
      const maxCol = columns.length - 1;

      switch (e.key) {
        case "ArrowRight":
          col = col < maxCol ? col + 1 : col;
          break;
        case "ArrowLeft":
          col = col > 0 ? col - 1 : col;
          break;
        case "ArrowDown":
          row = row < maxRow ? row + 1 : row;
          break;
        case "ArrowUp":
          row = row > 0 ? row - 1 : row;
          break;
        default:
          return;
      }
      e.preventDefault();
      setSelectedCell({ row, col });
    },
    [selectedCell]
  );


  useEffect(() => {
    const el = tableRef.current?.querySelector<HTMLTableCellElement>(
      `td[data-row="${selectedCell.row}"][data-col="${selectedCell.col}"]`
    );
    el?.focus();
  }, [selectedCell]);

 
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex-1">
        <div className="h-full overflow-auto">
          <div className="p-2 flex gap-4">
  {table.getAllLeafColumns().map((column) => (
    <label key={column.id}>
      <input
        type="checkbox"
        checked={column.getIsVisible()}
        onChange={column.getToggleVisibilityHandler()}
        className="mr-2"
      />
      {column.columnDef.header as string}
    </label>
  ))}
</div>
          <table className="w-full bg-white m-1" ref={tableRef}>
           
<thead className="bg-gray-50 sticky top-0">
  <ActionButtons />
  {table.getHeaderGroups().map((hg) => (
    <tr key={hg.id}>
      {hg.headers.map((header) => (
        <th
          key={header.id}
          style={{ width: header.getSize() }}
          className="relative px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900 border-b"
        >
      
          {flexRender(header.column.columnDef.header, header.getContext())}

        
          {header.column.getCanResize() && (
            <div
              onMouseDown={header.getResizeHandler()}
              onTouchStart={header.getResizeHandler()}
              className="absolute right-0 top-0 h-full w-1 cursor-col-resize select-none touch-none"
            />
          )}
        </th>
      ))}
    </tr>
  ))}
</thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map((cell, colIdx) => {
                    const isActive =
                      selectedCell.row === row.index &&
                      selectedCell.col === colIdx;

                    return (
                      <td
  key={cell.id}
  tabIndex={0}
  data-row={row.index}
  data-col={colIdx}
  onClick={() => setSelectedCell({ row: row.index, col: colIdx })}
  onKeyDown={handleKeyDown}
  className={`px-4 py-4 whitespace-nowrap text-sm text-gray-900 min-h-[56px] ${
    isActive ? "outline-none ring-2 ring-blue-500" : ""
  }`}
>
  {flexRender(
    cell.column.columnDef.cell,
    cell.getContext()
  )}
</td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetApp;