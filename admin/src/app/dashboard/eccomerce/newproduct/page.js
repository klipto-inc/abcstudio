"use client";
import PopUpFilemanager from "@/components/filemanager/PopUpFilemanager";
import { UseFileManager } from "@/context/FileManagerProvidert";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";

import { useState, useEffect } from "react";
import {
  BtnBold,
  BtnItalic,
  createButton,
  BtnStrikeThrough,
  Editor,
  EditorProvider,
  BtnLink,
  Toolbar,
  BtnStyles,
  Separator,
} from "react-simple-wysiwyg";

export default function page() {
  const [uploadedCat, setUploadedCat] = useState(null);
  console.log("newProduct", uploadedCat);
  // dialog open state thaat is recieved from filemanger context
  const { handleOpen, size } = UseFileManager();
  const [html, setHtml] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    discountPercentage: "",
    rating: 4.4,
    category: "",
  });

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [thumbnail, setThumbnail] = useState("thumbn");
  const [gallery, setGallery] = useState("gallery");

  const inputStyles = {
    textDecoration: "line-through",
    color: "gray", // Adjust the color as needed
  };
  function onChange(e) {
    setHtml(e.target.value);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    const processedValue =
      name === "price" || name === "discountPercentage"
        ? parseFloat(value)
        : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: processedValue,
    }));
  }

  console.log(formData);

  const postProduct = async (e) => {
    e.preventDefault()
   console.log("posting started")

  try {
   
   const updatedFormData = {
      title: formData.title,
      price: formData.price,
      discountPercentage: formData.discountPercentage,
      rating: formData.rating,
      category: formData.category,
      description: html,
      thumbnail:
        "https://demos.creative-tim.com/soft-ui-flowbite-pro/images/products/apple-imac-1.png",
      images: [
        "https://demos.creative-tim.com/soft-ui-flowbite-pro/images/products/apple-imac-1.png",
        "https://demos.creative-tim.com/soft-ui-flowbite-pro/images/products/apple-imac-1.png",
        "https://demos.creative-tim.com/soft-ui-flowbite-pro/images/products/apple-imac-1.png",
      ],
    };


    
 console.log("Before validation:", typeof updatedFormData.images);
    
    console.log("updated form data", updatedFormData)
  Object.entries(updatedFormData).forEach(([key, value]) => {
    console.log(`${key}: ${typeof value}`);
  });
    const adminToken = Cookies.get("adminToken")

  
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}admin/commerce/products`,
      updatedFormData,

      {
        headers: {
          Authorization: `Bearer ${String(adminToken)}`,
        },
        "Content-Type": "application/json",
      }
    );

   
    console.log("Response from backend", response);
  } catch (error) {
   
    console.error("An error in posting product", error);
  }
};


  useEffect(() => {
    console.log("useEfft is runnning in new product");
    const HandleFetch = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}admin/category/product/category`
        );

        if (response.status === 200) {
          setUploadedCat(response.data.data);
        }
      } catch (error) {
        console.log("damn error", error);
      }
    };

    HandleFetch();
  }, []);
  return (
    <div>
      <div className="grid max-w-2xl mx-auto mt-8">
        <div className="relative w-full h-full max-w-2xl px-4 mb-4 md:h-auto">
          <form onSubmit={(e)=>postProduct(e)} className="relative bg-white rounded-lg shadow-md shadow-gray-300">
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Add Product</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="product-modal"
              ></button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="product-name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                      placeholder="Apple Imac 27”"
                      required=""
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Category
                    </label>
                    <select
                      className="p-2 text-base border bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                      name="category"
                      id="category"
                      required
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option>Select Category</option>
                      {uploadedCat &&
                        uploadedCat.map((item) => {
                          return <option value={item.name}>{item.name}</option>;
                        })}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                      placeholder="$2300"
                      style={inputStyles}
                      required=""
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="discount"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      discount
                    </label>
                    <input
                      type="number"
                      name="discountPercentage"
                      id="discountPercentage"
                      className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                      placeholder="$2300"
                      required=""
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="product-details"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Product Details
                    </label>
                    <EditorProvider>
                      <Editor value={html}  onChange={onChange}>
                        <Toolbar>
                          <BtnBold />
                          <Separator />
                          <BtnItalic />
                          <Separator />
                          <BtnLink />
                          <Separator />
                          <BtnStrikeThrough />
                          <Separator />
                          <BtnStyles />
                        </Toolbar>
                      </Editor>
                    </EditorProvider>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="block mb-2 text-sm font-medium text-gray-900">
                    Produt Thumbnail
                  </p>

                  <div className="flex my-4 space-x-5">
                    <div>
                      <img
                        src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/products/apple-imac-1.png"
                        className="h-24"
                        alt="imac image"
                      />

                      <a href="#" className="cursor-pointer">
                        <svg
                          className="w-6 h-6 -mt-5 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <div
                      className="flex flex-col w-full h-32 border-2 border-gray-300 border-dashed rounded cursor-pointer hover:bg-gray-50"
                      onClick={() => handleOpen("lg", thumbnail)}
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-10 h-10 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                          />
                        </svg>
                        <p className="py-1 text-sm text-gray-600">
                          Upload a file or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      {/* <input
                        type="file"
                        name="thumbnail"
                        onClick ={(e)=>handleThumbNail(e)}
                      /> */}
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="block mb-2 text-sm font-medium text-gray-900">
                    Produt Gallery
                  </p>
                  <div className="flex my-4 space-x-5">
                    <div>
                      <img
                        src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/products/apple-imac-1.png"
                        className="h-24"
                        alt="imac image"
                      />
                      <a href="#" className="cursor-pointer">
                        <svg
                          className="w-6 h-6 -mt-5 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                    <div>
                      <img
                        src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/products/apple-imac-2.png"
                        className="h-24"
                        alt="imac image"
                      />
                      <a href="#" className="cursor-pointer">
                        <svg
                          className="w-6 h-6 -mt-5 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                    <div>
                      <img
                        src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/products/apple-imac-3.png"
                        className="h-24"
                        alt="imac image"
                      />
                      <a href="#" className="cursor-pointer">
                        <svg
                          className="w-6 h-6 -mt-5 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <div
                      className="flex flex-col w-full h-32 border-2 border-gray-300 border-dashed rounded cursor-pointer hover:bg-gray-50"
                      onClick={() => handleOpen("lg", gallery)}
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-10 h-10 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                          />
                        </svg>
                        <p className="py-1 text-sm text-gray-600">
                          Upload a file or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      {/* <input
                        type="file"
                        name="images"
                        onChange={(e) => handleInputChange(e)}
                        multiple
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b">
              <Button
                variant="black"
                color="black"
                type="submit"
            
              >
                Save all
              </Button>
            </div>
          </form>
        </div>
        <PopUpFilemanager handleOpen={handleOpen} size={size} setThumbnail={setThumbnail} setGallery={setGallery} />
      </div>
    </div>
  );
}
