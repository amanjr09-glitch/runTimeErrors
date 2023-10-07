import React from 'react';

const DrawerWrapper = ({ children, heading }) => {
    return (
        <div className='w-[30vw] neumo overflow-scroll p-4 min-h-[60vh]'
            style={{
                backgroundColor: "inherit",
                color: "inherit"
            }}>
            <p className='px-4 font-bold'>{heading}</p>
            <div className="m-4 h-full">
                {children}
            </div>
        </div>
    );
};

export default DrawerWrapper;
