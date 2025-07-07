import DoubleChevron from "../assets/icons/Double-Chevron.svg";
import eye from "../assets/icons/Eye.svg";
import sort from "../assets/icons/Sort.svg";
import filter from "../assets/icons/Filter.svg";
import cell from "../assets/icons/Cell.svg";
import share from "../assets/icons/Share.svg";
import NewAction from "../assets/icons/New-Action.svg";
import { ArrowDownToLineIcon, ArrowUpToLine } from "lucide-react";

const ToolBar = () => {
  return (
    <div className="flex justify-between px-4 py-3">
      <div className="flex items-center gap-2">
        <button
          className="px-3 py-1 text-sm flex items-center justify-center gap-1 border-r border-[#EEEEEE] "
          onClick={() => console.log("Tool bar toggled")}
        >
          Tool bar <img src={DoubleChevron} alt="" />
        </button>
        <button
          className="px-3 py-1 rounded text-sm flex items-center justify-center gap-1"
          onClick={() => console.log("Hide fields clicked")}
        >
          <img src={eye} alt="" />
          Hide fields
        </button>
        <button
          className="px-3 py-1 rounded text-sm flex items-center justify-center gap-1"
          onClick={() => console.log("Sort clicked")}
        >
          <img src={sort} alt="" />
          Sort
        </button>
        <button
          className="px-3 py-1 rounded text-sm flex items-center justify-center gap-1"
          onClick={() => console.log("Filter clicked")}
        >
          <img src={filter} alt="" />
          Filter
        </button>
        <button
          className="px-3 py-1 rounded text-sm flex items-center justify-center gap-1"
          onClick={() => console.log("Cell view clicked")}
        >
          <img src={cell} alt="" />
          Cell view
        </button>
      </div>
      <div className="btn flex gap-2 text-[#545454]">
        <button
          className="pl-2 pr-5 border-1 rounded-md border-[#EEEEEE] w-[90] flex gap-1 justify-center  text-xs items-center h-[36]"
          onClick={() => console.log("Import clicked")}
        >
          <ArrowDownToLineIcon className="size-5" />
          Import
        </button>
        <button
          className="pl-2 pr-5 border-1 rounded-md border-[#EEEEEE] w-[90] flex gap-1 justify-center  text-xs items-center h-[36]"
          onClick={() => console.log("Export clicked")}
        >
          <ArrowUpToLine className="size-5" /> Export
        </button>
        <button
          className="pl-2 pr-5 border-1 rounded-md border-[#EEEEEE] w-[90] flex gap-1 justify-center  text-xs items-center h-[36]"
          onClick={() => console.log("Share clicked")}
        >
          <img src={share} alt="" /> Share
        </button>
        <button
          className="px-6 py-2 border-1 rounded-md border-[#EEEEEE] w-[150] flex gap-1 justify-center text-sm  items-center text-white bg-[#4B6A4F] h-[36]"
          onClick={() => console.log("New Action clicked")}
        >
          <img src={NewAction} alt="" />New Action
        </button>
      </div>
    </div>
  );
};

export default ToolBar;