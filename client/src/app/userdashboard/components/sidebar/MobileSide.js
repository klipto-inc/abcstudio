"use client"
import React from 'react'
import { AccountIcon, OrderIcon } from "../icons/UserIcon";
import SidebarHead from './SidebarHead';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Upgrade from '../Upgrade';

const MobileSide = () => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <>
      <div
        className={`w-full px-4 py-4 sm:min-h-max sm:min-w-[28%]  md:max-w-[28%] lg:max-w-[30%]  bg-white  sm:rounded-md sm:shadow-md`}
      >
        <SidebarHead />

        <div className="h-full mt-8">
          <Link
            href="/Mobile/stats"
           
            className={`flex items-center px-4 py-2 gap-4 hover:bg-gray-100 rounded-sm accountInformation sidebarInfo   ${
              pathname == "/Mobile/stats" ? "sm:bg-gray-200" : ""
            }`}
          >
            <AccountIcon />
            <p className="text-sm text-gray-600">My account</p>
          </Link>

          <Link href="/Mobile/Orders">
            <div
              className={`flex items-center px-4 py-2 gap-3 hover:bg-gray-100 rounded-sm accountInformation sidebarInfo  ${
                pathname == "/Mobile/Orders" ? "sm:bg-gray-200" : ""
              }`}
            >
              <OrderIcon />
              <p className="text-sm text-gray-600">Orders</p>
            </div>
          </Link>

          {/* beginning of a new section */}
          <div>
            <div
              className={`flex items-center px-4 py-2 gap-3 hover:bg-gray-100 rounded-sm accountInformation sidebarInfo bg-gray-200 `}
            >
              {/* <OrderIcon /> */}
              <p className="text-sm text-gray-600">Account Management</p>
            </div>
          </div>

          {/* edit profile */}
          <Link href="/Mobile/Edit">
            <div
              className={`sm:hidden flex items-center  px-4 py-2 gap-3 hover:bg-gray-100 rounded-sm accountInformation sidebarInfo  ${
                pathname == "/Mobie/Edit" ? "sm:bg-gray-200" : ""
              }`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#737373"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H9M15 5H17C18.1046 5 19 5.89543 19 7V9"
                    stroke="#737373"
                    strokeWidth="2"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M14.902 20.3343L12.7153 20.7716L13.1526 18.585C13.1914 18.3914 13.2865 18.2136 13.4261 18.074L17.5 14L19.5 12L21.4869 13.9869L19.4869 15.9869L15.413 20.0608C15.2734 20.2004 15.0956 20.2956 14.902 20.3343Z"
                    stroke="#737373"
                    strokeWidth="2"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="#737373"
                    strokeWidth="2"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>

              <p className="text-sm text-gray-600">Edit Profile</p>
            </div>
          </Link>

          {/* change password */}
          <Link href="/Mobile/password">
            <div
              className={`sm:hidden flex items-center  px-4 py-2 gap-3 hover:bg-gray-100 rounded-sm accountInformation sidebarInfo  ${
                pathname == "/Mobile/password" ? "sm:bg-gray-200" : ""
              }`}
            >
              <svg
                fill="#737373"
                className="w-5 h-5"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#737373"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Change_password">
                    {" "}
                    <path d="M464.4326,147.54a9.8985,9.8985,0,0,0-17.56,9.1406,214.2638,214.2638,0,0,1-38.7686,251.42c-83.8564,83.8476-220.3154,83.874-304.207-.0088a9.8957,9.8957,0,0,0-16.8926,7.0049v56.9a9.8965,9.8965,0,0,0,19.793,0v-34.55A234.9509,234.9509,0,0,0,464.4326,147.54Z"></path>{" "}
                    <path d="M103.8965,103.9022c83.8828-83.874,220.3418-83.8652,304.207-.0088a9.8906,9.8906,0,0,0,16.8926-6.9961v-56.9a9.8965,9.8965,0,0,0-19.793,0v34.55C313.0234-1.3556,176.0547,3.7509,89.9043,89.9012A233.9561,233.9561,0,0,0,47.5674,364.454a9.8985,9.8985,0,0,0,17.56-9.1406A214.2485,214.2485,0,0,1,103.8965,103.9022Z"></path>{" "}
                    <path d="M126.4009,254.5555v109.44a27.08,27.08,0,0,0,27,27H358.5991a27.077,27.077,0,0,0,27-27v-109.44a27.0777,27.0777,0,0,0-27-27H153.4009A27.0805,27.0805,0,0,0,126.4009,254.5555ZM328,288.13a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,328,288.13Zm-72,0a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,256,288.13Zm-72,0a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,184,288.13Z"></path>{" "}
                    <path d="M343.6533,207.756V171.7538a87.6533,87.6533,0,0,0-175.3066,0V207.756H188.14V171.7538a67.86,67.86,0,0,1,135.7208,0V207.756Z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>

              <p className="text-sm text-gray-600">Change Password</p>
            </div>
          </Link>

          {/* close account */}
          <Link href="/Mobile/DeleteMobile"
              className={`flex items-center  px-4 py-2 gap-3 hover:bg-gray-100 rounded-sm accountInformation sidebarInfo  ${
                pathname == "/Mobile/DeleteMobile" ? "sm:bg-gray-200" : ""
              }`}>
            
              <svg
                className="w-5 h-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="#737373"
                stroke="#737373"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill="#737373"
                    d="M10.5957552,0 C13.8224853,0 16.4382669,2.56640935 16.4382669,5.73223573 C16.4382669,7.47669938 15.644028,9.03915996 14.3909809,10.090518 C14.664623,10.2235258 14.9136176,10.3581474 15.1390658,10.4930662 C15.6237777,10.7831407 16.1267346,11.1427602 16.6489931,11.5717392 C16.9458898,11.8156078 16.9850743,12.2494418 16.7365142,12.5407346 C16.4879541,12.8320274 16.045774,12.8704723 15.7488774,12.6266038 C15.277781,12.2396488 14.8307666,11.9200289 14.4088906,11.6675584 C14.0273537,11.4392287 13.5522104,11.2043 12.9846924,10.9644217 C12.2542265,11.2861908 11.4462112,11.4644715 10.5957552,11.4644715 C9.6553574,11.4644715 8.76685182,11.2464878 7.97986631,10.8592117 L7.93770472,10.878634 L7.93770472,10.878634 C5.96079356,11.634739 4.51865654,12.752929 3.5873929,14.2369477 C2.65301446,15.7259301 2.27132031,17.3895789 2.44152848,19.2506112 C2.47613463,19.6289901 2.19155082,19.9632511 1.80589275,19.9972041 C1.42023467,20.031157 1.0795432,19.7519447 1.04493705,19.3735658 C0.84812174,17.2216146 1.29785495,15.2614114 2.39335469,13.5156736 C3.35678473,11.9803959 4.77218575,10.7859405 6.62343881,9.9348321 C5.47339407,8.88942725 4.75324355,7.3933442 4.75324355,5.73223573 C4.75324355,2.56640935 7.36902513,0 10.5957552,0 Z M17.8192835,14.2393646 C18.088619,13.9725618 18.5261801,13.9716914 18.7966038,14.2374206 C19.0670274,14.5031499 19.0679096,14.9348524 18.7985741,15.2016552 L18.7985741,15.2016552 L17.607,16.381 L18.7985741,17.5612253 C19.0679096,17.8280282 19.0670274,18.2597307 18.7966038,18.5254599 C18.5261801,18.7911891 18.088619,18.7903187 17.8192835,18.5235159 L16.632,17.347 L15.4451813,18.5235159 C15.2027794,18.7636384 14.8241147,18.7883557 14.5536669,18.5971813 L14.467861,18.5254599 C14.1974374,18.2597307 14.1965552,17.8280282 14.4658907,17.5612253 L14.4658907,17.5612253 L15.656,16.381 L14.4658907,15.2016552 C14.1965552,14.9348524 14.1974374,14.5031499 14.467861,14.2374206 C14.7382847,13.9716914 15.1758458,13.9725618 15.4451813,14.2393646 L16.632,15.415 Z M10.5957552,1.37573658 C8.14344035,1.37573658 6.15544635,3.32620768 6.15544635,5.73223573 C6.15544635,8.13826378 8.14344035,10.0887349 10.5957552,10.0887349 C13.0480701,10.0887349 15.0360641,8.13826378 15.0360641,5.73223573 C15.0360641,3.32620768 13.0480701,1.37573658 10.5957552,1.37573658 Z"
                  ></path>{" "}
                </g>
              </svg>

              <p className="text-sm text-gray-600">Close account</p>
           
          </Link>

          <div className="flex items-center hover:bg-gray-100 cursor-pointer gap-3  px-4 py-2 text-blue-500 border-b border-gray-300">
            <svg
              className="w-6 h-6"
              viewBox="0 -0.5 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#737373"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M7.04401 9.53165C7.33763 9.23949 7.33881 8.76462 7.04665 8.47099C6.75449 8.17737 6.27962 8.17619 5.98599 8.46835L7.04401 9.53165ZM2.97099 11.4683C2.67737 11.7605 2.67619 12.2354 2.96835 12.529C3.26051 12.8226 3.73538 12.8238 4.02901 12.5317L2.97099 11.4683ZM4.02901 11.4683C3.73538 11.1762 3.26051 11.1774 2.96835 11.471C2.67619 11.7646 2.67737 12.2395 2.97099 12.5317L4.02901 11.4683ZM5.98599 15.5317C6.27962 15.8238 6.75449 15.8226 7.04665 15.529C7.33881 15.2354 7.33763 14.7605 7.04401 14.4683L5.98599 15.5317ZM3.5 11.25C3.08579 11.25 2.75 11.5858 2.75 12C2.75 12.4142 3.08579 12.75 3.5 12.75V11.25ZM17.5 12.75C17.9142 12.75 18.25 12.4142 18.25 12C18.25 11.5858 17.9142 11.25 17.5 11.25V12.75ZM5.98599 8.46835L2.97099 11.4683L4.02901 12.5317L7.04401 9.53165L5.98599 8.46835ZM2.97099 12.5317L5.98599 15.5317L7.04401 14.4683L4.02901 11.4683L2.97099 12.5317ZM3.5 12.75L17.5 12.75V11.25L3.5 11.25V12.75Z"
                  fill="#737373"
                ></path>{" "}
                <path
                  d="M9.5 15C9.5 17.2091 11.2909 19 13.5 19H17.5C19.7091 19 21.5 17.2091 21.5 15V9C21.5 6.79086 19.7091 5 17.5 5H13.5C11.2909 5 9.5 6.79086 9.5 9"
                  stroke="#737373"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <p className="rounded-sm text-center text-sm">Logout</p>
          </div>
          <Upgrade />
        </div>
      </div>
    </>
  );
}

export default MobileSide