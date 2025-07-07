import ChevronRight from "../assets/icons/Chevron-right.svg";
import Folder from "../assets/icons/Folder-icon.svg";
import Bell from "../assets/icons/Bell-icon.svg";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 border-b border-[#EEEEEE] bg-white">
      <div className="text-lg flex justify-center items-center gap-2 font-semibold">
        <img src={Folder} alt="chevron-right" />
        <span className="text-[#AFAFAF]">Workspace</span>
        <img src={ChevronRight} alt="chevron-right" />

        <span className="text-[#AFAFAF]">Folder 2</span>

        <img src={ChevronRight} alt="chevron-right" />

        <span>Spreadsheet 3</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.45832 10C6.45832 10.8054 5.80541 11.4583 4.99999 11.4583C4.19457 11.4583 3.54166 10.8054 3.54166 10C3.54166 9.19459 4.19457 8.54167 4.99999 8.54167C5.80541 8.54167 6.45832 9.19459 6.45832 10ZM11.4583 10C11.4583 10.8054 10.8054 11.4583 9.99999 11.4583C9.19457 11.4583 8.54166 10.8054 8.54166 10C8.54166 9.19459 9.19457 8.54167 9.99999 8.54167C10.8054 8.54167 11.4583 9.19459 11.4583 10ZM15 11.4583C15.8054 11.4583 16.4583 10.8054 16.4583 10C16.4583 9.19459 15.8054 8.54167 15 8.54167C14.1946 8.54167 13.5417 9.19459 13.5417 10C13.5417 10.8054 14.1946 11.4583 15 11.4583Z"
            fill="#AFAFAF"
          />
        </svg>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <svg
            className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.4732 14.4733C14.2132 14.7333 13.7866 14.7333 13.5266 14.4733L11.3666 12.3067C11.7132 12.0267 12.0266 11.7133 12.3066 11.3667L14.4732 13.5267C14.7332 13.7867 14.7332 14.2133 14.4732 14.4733Z"
              fill="#AFAFAF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.50004 12.3333C10.1694 12.3333 12.3334 10.1694 12.3334 7.5C12.3334 4.83062 10.1694 2.66667 7.50004 2.66667C4.83066 2.66667 2.66671 4.83062 2.66671 7.5C2.66671 10.1694 4.83066 12.3333 7.50004 12.3333ZM7.50004 13.6667C10.9058 13.6667 13.6667 10.9058 13.6667 7.5C13.6667 4.09424 10.9058 1.33333 7.50004 1.33333C4.09428 1.33333 1.33337 4.09424 1.33337 7.5C1.33337 10.9058 4.09428 13.6667 7.50004 13.6667Z"
              fill="#AFAFAF"
            />
          </svg>
          <input
            type="text"
            placeholder="Search within sheet"
            onClick={()=>console.log("Searching")}
            className="border pl-7 py-2 rounded-md w-[165px] h-[40px] text-xs bg-[#F6F6F6] text-[#757575]"
          />
        </div>

       <button onClick={()=> console.log("Showing Notifications")}> <img src={Bell} alt="" /> </button>

        <button className="flex items-center gap-2"onClick={()=> console.log("Clicked Profile")}>
          <img
            src="image.png"
            alt="Profile"
            className="rounded-full w-[30px] h-[30px]"
          />
          <div className="flex flex-col" >
            <span className="text-sm">John Doe</span>
            <span className="text-xs font-extralight">john.doe...</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
