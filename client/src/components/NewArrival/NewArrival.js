"use client"
import React from 'react'
import SingleArrival from './SingleArrival'
import { useContext, useState } from 'react'
import { ProductContext } from '../../../contexts/productContext'
import LoadingSkeleton from './Loadingskeleton'



const NewArrival = ({ allProducts }) => {
  // const { products } = useContext(ProductContext);
  const numberOfSkeletons = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleNextPage = () => {
    if (indexOfLastProduct < allProducts.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <h2 className="text-xl lg:ml-28 font-medium text-gray-800  mb-6">
        Top new arrival
      </h2>

      <div className=" py-10  px-2  lg:px-28 bg-gray-50">
        {currentProducts.length > 0 ? (
          <div className="grid  px-2 sm:px-4  grid-cols-2 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {currentProducts.map((product) => (
              <SingleArrival key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <LoadingSkeleton numberOfSkeletons={numberOfSkeletons} />
        )}

        <div className="sticky sm:flex items-center w-full sm:justify-between bottom-0 right-0 p-4">
          <div className="flex items-center mb-4 sm:mb-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center mr-2"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <span className="text-sm font-normal text-gray-500">
              Showing{" "}
              <span className="text-gray-900 font-semibold">
                {indexOfFirstProduct + 1}-
                {Math.min(indexOfLastProduct, allProducts.length)}
              </span>{" "}
              of{" "}
              <span className="text-gray-900 font-semibold">
                {allProducts.length}
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrevPage}
              variant="gradient"
              className="flex flex-row items-center gap-1"
            >
              <svg
                className="-ml-1 mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Previous
            </button>
            <button
              onClick={handleNextPage}
              className="flex flex-row items-center gap-1"
            >
              Next
              <svg
                className="-mr-1 ml-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival