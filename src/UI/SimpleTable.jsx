import React from 'react';

const SimpleTable = ({ rows, columns }) => {
    return (
        <table className="w-full shadow-md text-black dark:text-gray-400 text-left">
            <thead className="bg-[rgba(0,0,0,0.05)] dark:bg-gray-200 w-full text-xs border-b dark:border-gray-400">
                <tr>
                    {columns.map((column, index) => (
                        <th className='px-1 text-gray-300 font-normal capitalize py-2' key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr className='border-b dark:border-gray-400' key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td
                                className='px-3 border-r dark:border-gray-400 py-1 hover:bg-gray-100 text-xs bold'
                                key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SimpleTable;
