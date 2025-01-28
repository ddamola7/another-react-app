import React from 'react'
import { CiHome } from "react-icons/ci";
import { AiOutlineTeam } from "react-icons/ai";
import { GoProjectRoadmap } from "react-icons/go";
import { FaCalendar } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { TbReportSearch } from "react-icons/tb";

const Sidebar = () => {
  return (
    <aside className=' border min-h-screen w-[25%]'>
        <div>
            <div className='flex items-center m-4  rounded p-2 hover: bg-gray-100 cursor-pointer hover: text-blue-950 hover:font-bold  duration-300 ease-out '>
            <CiHome />
                <p className='ms-4'>Dashboard</p>
            </div>

            <div className='flex items-center m-4  rounded p-2 hover: bg-gray-100 cursor-pointer hover :text-blue-950 hover:font-bold  duration-300 ease-out '>
            <AiOutlineTeam />
                <p className='ms-4'>Team</p>
            </div>

            <div className='flex items-center m-4  rounded p-2 hover: bg-gray-100 cursor-pointer hover:text-blue-950 hover:font-bold  duration-300 ease-out '>
            <GoProjectRoadmap />

                <p className='ms-4'>Project</p>
            </div>

            <div className='flex items-center m-4  rounded p-2 hover: bg-gray-100 cursor-pointer hover:text-blue-950 hover:font-bold  duration-300 ease-out '>
            <FaCalendar />
                <p className='ms-4'>Dashboard</p>
            </div>

            <div className='flex items-center m-4  rounded p-2 hover: bg-gray-100 cursor-pointer hover:text-blue-950 hover:font-bold  duration-300 ease-out '>
            <TiDocumentText />
                <p className='ms-4'>Calendar</p>
            </div>

            <div className='flex items-center m-4  rounded p-2 hover: bg-gray-100 cursor-pointer hover:text-blue-950 hover:font-bold  duration-300 ease-out '>
            <TbReportSearch />
                <p className='ms-4'>Reports</p>
            </div>

            




        </div>
      
    </aside>
  )
}

export default Sidebar
