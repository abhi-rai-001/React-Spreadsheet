import Job from '../assets/icons/Job.svg'
import Globe from '../assets/icons/Globe.svg'
import DownCircle from '../assets/icons/DownCircle.svg'
import Assigned from '../assets/icons/Assigned.svg'
import Calendar from '../assets/icons/Calendar.svg'
import User from '../assets/icons/User.svg'

const Headers = () => {
  return (
    <tr className="bg-[#EEEEEE]">
      <th className="w-12 px-3 py-2 text-left text-xs    text-gray-500  tracking-wider border-2 border-gray-100">
        #
      </th>
      <th className="pl-4 py-2 text-left text-xs   w-1/10     text-gray-500  tracking-wider border-2 border-gray-100">
        <div className='flex gap-2 items-center whitespace-nowrap size-4'><img src={Job} alt="Job " />Job Request</div>
      </th>
      <th className="px-4 py-2 text-left text-xs   w-1/10 text-nowrap    text-gray-500  tracking-wider border-2 border-gray-100">
        <div className='flex gap-2 items-center size-4'><img src={Calendar} alt="" />Submitted</div>
      </th>
      <th className="px-4 py-2 text-left text-xs   w-1/10 text-nowrap    text-gray-500  tracking-wider border-2 border-gray-100">
        <div className='flex gap-2 items-center size-4'><img src={DownCircle} alt="" />Status</div>
      </th>
      <th className="px-4 py-2 text-left text-xs   w-1/10 text-nowrap    text-gray-500  tracking-wider border-2 border-gray-100">
        <div className='flex gap-2 items-center size-4'><img src={User} alt="" />Submitter</div>
      </th>
      <th className="px-4 py-2 text-left text-xs   w-1/10 text-nowrap    text-gray-500  tracking-wider border-2 border-gray-100">
        <div className='flex gap-2 items-center size-4'><img src={Globe} alt="" />URL</div>
      </th>
      <th className="px-4 py-2 text-left text-xs bg-[#E8F0E9] font-semibold w-1/10 text-nowrap    text-gray-500  tracking-wider border-2 border-gray-100">
        <div className='flex gap-2 items-center size-4'><img src={Assigned} alt="" />Assigned</div>
      </th>
      <th className="px-4 py-2 text-left text-xs bg-[#EAE3FC] font-semibold   w-1/10 text-nowrap    text-gray-500  tracking-wider border-2 border-gray-100">
       <div className='flex gap-2 items-center size-4'>Priority</div> 
      </th>
      <th className="px-4 py-2 text-left text-xs bg-[#EAE3FC] font-semibold   w-1/10 text-nowrap    text-gray-500  tracking-wider border-2 border-gray-100">
        <div className='flex gap-2 items-center size-4'>Due Date</div>
      </th>
      <th className="px-4 py-2 text-left text-xs bg-[#FFE9E0] font-semibold  w-1/10 text-nowrap    text-gray-500  tracking-wider border-2 border-gray-100">
       <div className='flex gap-2 items-center size-4'>Est. Value</div> 
      </th>
    </tr>
  );
};

export default Headers;
