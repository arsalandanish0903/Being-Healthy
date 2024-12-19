import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { MdEmail } from "react-icons/md";



function MiniNavbar() {
    return (
        <div className='bg-[#2389da] hidden sm:block w-full py-2 sm:py-4 relative'>
            <div className='container mx-auto px-6 sm:px-36'>
                <div className='flex justify-between items-center'>
                    <div className='text-white flex items-center gap-8'>
                        <span className='mr-4 text-lg '>Free to Call Us at</span>
                        <span className='flex items-center mr-4 text-lg '>
                            <FaPhoneVolume className='mr-2 text-[#65cef5]' /> +91 8888832676
                        </span>
                        <span className='flex items-center mr-4 text-lg '><MdWatchLater className='mr-2 text-xl text-[#65cef5]'/> Mon - Sat: 11.00 AM to 6.00 PM</span>
                    </div>
                    <div>
                        <span className='flex items-center mr-4 text-lg  text-white'><MdEmail className='mr-2 text-xl text-[#65cef5]'/>Enquire? Send Your Mail</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiniNavbar;
