"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Api from "@/utils/Api";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import FooterComp from "@/components/Footer/FooterComp";

function page() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  // const [type, setType] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await Api.get("admin/blog");
      const data = res.data;
      console.log("--------data", data);
      setData(data[id]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("data", data);

  return (
    <>

    <div className="bg-[#111827] sticky top-0 z-[10]">
        <Navbar />
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-[70svh] lg:h-[100vh]">
          <svg
            className="w-20 h-20 mr-3 -ml-1 text-blue-500 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </div>
      )
      : (
    <section className="flex flex-row flex-wrap mx-auto">
      {data && data.map((item, index) => {
        return (
          <div key={index} className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-md">
              <div className="md:flex-shrink-0">
                <Image
                  alt=""
                  height={300}
                  width={500}
                  src={
                    item.blogimage
                  }
                  className="h-48 w-full rounded-lg rounded-b-none object-cover object-top"
                ></Image>
              </div>
              <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                <span className="text-xs font-medium text-blue-600 uppercase text-ellipsis">
                  {item.category}
                </span>
                <div className="flex flex-row items-center">
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
                <a href="#" className="hover:underline">
                  <h2 className="text-xl font-bold tracking-normal text-gray-800">
                  {item.title}
                  </h2>
                </a>
              </div>
              <hr className="border-gray-300" />
              <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                {item.shortdescription}
              </p>
              <hr className="border-gray-300" />
              <section className="px-4 py-2 mt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    
                      <span className="mx-1 text-xs text-gray-600">
                        {item.createdAt}
                      </span>
                    
                  </div>
                  <p className="mt-1 text-xs text-gray-600">9 minutes read</p>
                </div>
              </section>
            </div>
          </div>
        );
      })}
    </section>)}
    <FooterComp />
    </>
  );
}

export default page;
