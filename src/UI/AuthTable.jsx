import React from 'react'
import { TiTick, TiTimes } from "react-icons/ti";

const AuthTable = ({ title, data = [] }) => (
    <div className="border-b dark:border-gray-400">
      <div className="text-theme border-b dark:border-gray-400 py-2">{title}</div>
      <table className="w-full dark:text-gray-200 text-left">
        <thead className="text-xs border-b dark:border-gray-400  uppercase">
          <tr className="bg-[rgba(0,0,0,0.1)]">
            <th scope="col" className="px-6 w-96  py-3"></th>
            <th scope="col" className="px-6 py-3">
              Junior
            </th>
            <th scope="col" className="px-6 py-3">
              Senior
            </th>
            <th scope="col" className="px-6 py-3">
              Manager
            </th>
            <th scope="col" className="px-6 py-3">
              Partner
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-b dark:border-gray-400">
              <th
                scope="row"
                className="px-6 py-4 text-sm font-medium  whitespace-nowrap "
              >
                {item.title}
              </th>
              <td className="px-6 text-green-500 text-2xl py-4">
                {item.assign[0] ? (
                  <TiTick />
                ) : (
                  <TiTimes style={{ color: "red" }} />
                )}
              </td>
              <td className="px-6 text-green-500 text-2xl py-4">
                {item.assign[1] ? (
                  <TiTick />
                ) : (
                  <TiTimes style={{ color: "red" }} />
                )}
              </td>
              <td className="px-6 text-green-500 text-2xl py-4">
                {item.assign[2] ? (
                  <TiTick />
                ) : (
                  <TiTimes style={{ color: "red" }} />
                )}
              </td>
              <td className="px-6 text-green-500 text-2xl py-4">
                {item.assign[3] ? (
                  <TiTick />
                ) : (
                  <TiTimes style={{ color: "red" }} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

export default AuthTable