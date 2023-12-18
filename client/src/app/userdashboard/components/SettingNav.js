"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {AccountIcon, ProfileIcon} from './icons/UserIcon'
import { useState } from 'react';
 
const SettingNav = () => {
  const pathname = usePathname()
  const [isDown, setIsDown] = useState(false)

  const handleDropDown = () => {
    setIsDown((prev) =>!prev)
  }
  return (
    <div className="flex flex-col basis-1/3">
      <Link
        href="/userdashboard/manageaccount"
        className={`flex items-center p-4 justify-between hover:bg-gray-100 accountInformation sidebarInfo  ${
          pathname == "/userdashboard/manageaccount" ? "bg-blue-400" : ""
        }`}
      >
        <AccountIcon />
        <p>Profile Details</p>
      </Link>
      <div>
        <div
          onClick={() => handleDropDown()}
          className="flex items-center justify-between p-4 hover:bg-gray-100
          accountInformation
          sidebarInfo"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M8.1819 10.7027H6.00008C5.44781 10.7027 5.0001 11.1485 5.00009 11.7008C5.00005 13.3483 5 16.6772 5.00011 18.9189C5.00023 21.4317 8.88618 22 12 22C15.1139 22 19 21.4317 19 18.9189C19 16.6773 19 13.3483 19 11.7008C19 11.1485 18.5523 10.7027 18 10.7027H15.8182M8.1819 10.7027C8.1819 10.7027 8.18193 8.13514 8.1819 6.59459C8.18186 4.74571 9.70887 3 12 3C14.2912 3 15.8182 4.74571 15.8182 6.59459C15.8182 8.13514 15.8182 10.7027 15.8182 10.7027M8.1819 10.7027H15.8182"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 16.6181V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V16.6181C10.6931 16.3434 10.5 15.9442 10.5 15.5C10.5 14.6716 11.1716 14 12 14C12.8284 14 13.5 14.6716 13.5 15.5C13.5 15.9442 13.3069 16.3434 13 16.6181Z"
                fill="#000000"
              ></path>{" "}
            </g>
          </svg>
          <p>Security details</p>
        </div>
        {isDown && (
          <div className="flex flex-col w-full">
            <Link
              href="/userdashboard/manageaccount/password"
              className={`p-4 hover:bg-gray-100 accountInformation sidebarInfo  ${
                pathname == "/userdashboard/manageaccount/password" ? "bg-blue-400" : ""
              }`}
            >
              Change Password
            </Link>
            <Link
              href="/userdashboard/manageaccount/deleteaccount"
              className=" p-4  hover:bg-gray-100 accountInformation sidebarInfo"
            >
              Delete account
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingNav