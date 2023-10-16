import React from 'react';

const DropdownHook = () => {
    return (
        <div className='relative'>
            <div className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer">
                <span>Select your job</span>
            </div>
            <div className='absolute top-full left-0 w-full ro'></div>
        </div>
    );
};

export default DropdownHook;