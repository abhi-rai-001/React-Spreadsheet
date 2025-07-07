const SidebarTabs = () => {
  const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

  return (
    <div className="flex items-center fixed bottom-0 py-1 w-full px-12  bg-white border-t">
      {tabs.map((tab) => (
        <button key={tab} className={`px-5 py-2 text-sm h-full mt-0.2 hover:bg-gray-100 ${tab==="All Orders" && "bg-[#E8F0E9] text-[#3E5741] font-semibold  border-t-2"}`} onClick={()=> console.log("Showing", tab)} >
          {tab}
        </button>
      ))}
      <button className="px-4 py-2 text-sm text-gray-500" onClick={()=> console.log("Adding collection")}>＋</button>
    </div>
  );
};

export default SidebarTabs;