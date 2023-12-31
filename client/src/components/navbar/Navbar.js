"use client";
import { useState, React, useEffect } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UseProductProvider } from "../../../contexts/ProductProvider";
import { UseUserContext } from "../../../contexts/UserContext";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/resources/assets/image/AbcstudioNo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import Api from "@/utils/Api";

/**
 * Represents a navigation bar component.
 * @returns {JSX.Element} The JSX element representing the navigation bar.
 */
export default function Navbar() {
  const router = useRouter();

  const { HandleLogout, UserData, loading, Authtoken } = UseUserContext();
  const { cartProducts, Wishlist } = UseProductProvider();
  const pathname = usePathname();
  const pathUrl = "/news/"

  // console.log('tokk',Authtoken)

  // cart value variable
  const cartvalue = cartProducts.length;

  // Wishlist value variable

  const WishlistValue = Wishlist.length;

  // wishlist local storage function
  const [type, setType] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchData = async () => {
    try {
      const typeRes = await Api.get("admin/category/news/type");
      const catRes = await Api.get("admin/category/news/category");

      if (catRes.status === 200) {
        // console.log("cat------------->>", catRes.data);
        setCategory(catRes.data.data);
      }
      if (typeRes.status === 200) {
        // console.log("type------------->>", typeRes.data.data);
        setType(typeRes.data.data);
      }
    } catch (error) {
      // console.log(" Error------------->>", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function Logout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "loggedOut!",
          text: "You've been logged out succesfully.",
          icon: "success",
        });
        router.push("/login");
        HandleLogout();
      }
    });
  }

  return (
    <div>
      <div className="navbar rounded-lg top-0 px-4 right-0 w-full z-[100] shadow-md h-16 bg-[#111827]">
        <div>
          <div className="w-fit ">
            <label htmlFor="sidebar-mobile-fixed" className=" md:hidden">
              <RiMenu2Fill className="text-white hover:text-gray-300 transition  text-[26px] cursor-pointer" />
            </label>
          </div>
        </div>
        {/* abcdstudio logo */}
        <div className="navbar-start">
          <Link href="/">
            <Image src={Logo} alt="logo" width={130} height={130} priority />
          </Link>
        </div>
        {/*  Pages  */}
        <div className="hidden navbar-center md:block text-white">
          <Link
            href="/"
            className={`navbar-item text-[15px] rounded-none hover:border-b-[2px] mx-1  border-[#0e1b2b] transition-all ${
              pathname === "/" ? "border-b-[2px] border-[#0e1b2b] " : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/store"
            className={`navbar-item text-[15px] rounded-none mx-1  hover:border-b-[2px] border-[#0e1b2b] transition-all ${
              pathname === "/store" ? "border-b-[2px] border-[#0e1b2b]" : ""
            }`}
          >
            Store
          </Link>
          <Link
            href="/pricing"
            className={`navbar-item text-[15px] rounded-none hover:border-b-[2px] mx-1  border-[#0e1b2b] transition-all ${
              pathname === "/pricing" ? "border-b-[2px] border-[#0e1b2b]" : ""
            }`}
          >
            Member
          </Link>

          <Link
            href="/about"
            className={`navbar-item mx-1 text-[15px]  rounded-none hover:border-b-[2px] border-[#0e1b2b] transition-all ${
              pathname === "/about" ? "border-b-[2px] border-[#0e1b2b]" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`navbar-item mx-1 text-[15px]  rounded-none hover:border-b-[2px] border-[#0e1b2b] transition-all ${
              pathname === "/contact" ? "border-b-[2px] border-[#0e1b2b]" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            href="/contact mr-5"
            className={`navbar-item mx-1 w-fit text-[15px]  rounded-none hover:border-b-[2px] border-[#0e1b2b] transition-all ${
              pathname === "/contact" ? "border-b-[2px] border-[#0e1b2b]" : ""
            }`}
          >
            <span className="px-4 py-1 text-sm font-medium text-white bg-red-600 rounded-lg">
              Live
            </span>
          </Link>

          <a className="dropdown    dropdown-hover">
            <label tabIndex="0">News</label>
            <div className="dropdown-menu dropdown-menu-bottom-right bg-white mt-3 text-black uppercase">
              {/* <a className="dropdown-item text-sm">Profile</a> */}
              {type.map((item, index) => {
                return <Link key={index} href={`${pathUrl}${item.name}`} className="dropdown-item text-sm hover:bg-gray-200">{item.name}</Link>;
              })}
            </div>
          </a>
        </div>
        <div className="hidden navbar-center md:block "></div>
        <div className="flex flex-row items-center navbar-end text-white">
          <div className="flex flex-row items-center gap-3 mr-4 text-white">
            <Link
              href="/wish"
              className="relative flex flex-col items-center text-center text-gray-700 transition hover:text-primary"
            >
              <div className="text-2xl text-white">
                <FaRegHeart />
              </div>
              <div className="text-xs leading-3 text-white">Wishlist</div>

              {WishlistValue === 0 ? (
                <></>
              ) : (
                <div className="absolute right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1">
                  {WishlistValue}
                </div>
              )}
            </Link>
            <Link
              href="/CartContent"
              className="relative flex flex-col items-center text-center text-gray-700 transition hover:text-primary"
            >
              <div className="text-2xl text-white">
                <TiShoppingCart />
              </div>
              <div className="text-xs leading-3 text-white">cart</div>
              {cartProducts.length === 0 ? (
                <></>
              ) : (
                <div className="absolute right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full left-4 -top-1">
                  {cartvalue}
                </div>
              )}
            </Link>
          </div>

          {/* condition to display user profile picture on first render with token */}
          <div>
            {Authtoken && UserData && Authtoken.length !== 0 ? (
              <div className="hidden avatar avatar-ring avatar-md md:block">
                {loading === false ? (
                  <div className="dropdown-container ">
                    <div className="flex flex-row gap-4 ">
                      <div className="hidden dropdown md:block">
                        <label
                          className="hidden px-0 cursor-pointer btn btn-ghost sm:block md:block lg:block justify-items-end"
                          tabIndex="0"
                        >
                          <div className="avatar-square avatar avatar-md">
                            <Image
                              src={UserData && UserData.userdp}
                              height={20}
                              width={33}
                              quality={100}
                              loading="lazy"
                              className="object-cover rounded-full cursor-pointer"
                              alt="avatar"
                              // style={{
                              //   width: '100%',
                              //   height: 'auto',
                              // }}
                            />
                          </div>
                        </label>

                        <div className="dropdown-menu dropdown-menu-bottom-left mt-[15px] bg-white">
                          <Link
                            href="/userdashboard"
                            className="text-sm dropdown-item -z-50"
                          >
                            Profile
                          </Link>

                          <Link
                            href="/userdashboard/manageaccount"
                            tabIndex="-1"
                            className="text-sm dropdown-item"
                          >
                            Account settings
                          </Link>
                          <Link
                            href="/userdashboard/subscription"
                            tabIndex="-1"
                            className="text-sm dropdown-item"
                          >
                            Subscriptions
                          </Link>
                          <a
                            tabIndex="-1"
                            className="text-sm dropdown-item"
                            onClick={Logout}
                          >
                            logout
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="h-full w-[40px] rounded-full bg-gray-400 animate-pulse"></div>
                  </>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {!Authtoken || !Authtoken?.length === 0 ? (
            <div className={`hidden lg:block ${loading ? "hidden" : "block"}`}>
              <div className="flex items-center justify-center h-fit ">
                <div className="flex m-5 border shadow-sm w-fit item-center rounded-xl">
                  <Link href="/login">
                    <button className="px-4 py-2 m-0 text-black transition bg-white rounded-l-xl hover:bg-white/80">
                      Login
                    </button>
                  </Link>
                  <Link href="/signup">
                    <button className="px-4 py-2 transition rounded-r-xl bg-neutral-50 hover:bg-neutral-100">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div>
            {Authtoken && UserData && Authtoken.length !== 0 ? (
              <div className="block avatar avatar-ring avatar-md md:hidden">
                {loading === false ? (
                  <div className="dropdown-container ">
                    <div className="flex flex-row gap-4 ">
                      <div className="dropdown ">
                        <div className="avatar-square avatar avatar-md">
                          <Link href="/userdashboard">
                            <Image
                              src={UserData && UserData.userdp}
                              height={20}
                              width={33}
                              quality={100}
                              loading="lazy"
                              className="object-cover rounded-full cursor-pointer"
                              alt="avatar"
                              // style={{
                              //   width: '100%',
                              //   height: 'auto',
                              // }}
                            />
                          </Link>
                        </div>

                        {/* <div className="dropdown-menu dropdown-menu-bottom-left mt-[15px] bg-white">
                          <Link
                            href="/userdashboard"
                            className="text-sm dropdown-item -z-50"
                          >
                            Profile
                          </Link>

                          <Link
                            href="/userdashboard/manageaccount"
                            tabIndex="-1"
                            className="text-sm dropdown-item"
                          >
                            Account settings
                          </Link>
                          <Link
                            href="/userdashboard/subscription"
                            tabIndex="-1"
                            className="text-sm dropdown-item"
                          >
                            Subscriptions
                          </Link>
                          <a
                            tabIndex="-1"
                            className="text-sm dropdown-item"
                            onClick={Logout}
                          >
                            logout
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="h-full w-[40px] rounded-full bg-gray-400 animate-pulse"></div>
                  </>
                )}
              </div>
            ) : (
              <>
                <label
                  className="px-0 cursor-pointer btn btn-ghost "
                  tabIndex="1"
                >
                  {" "}
                  <Link href={`${!Authtoken ? "/login" : "/userdashboard"}`}>
                    <FaRegUser className="text-white hover:text-btn-primary transition  text-[26px] cursor-pointer block lg:hidden" />
                  </Link>
                </label>
                <div className=" dropdown-container">
                  <div className="dropdown-menu dropdown-menu-bottom-left mt-[5px] bg-white">
                    <a className="text-sm dropdown-item -z-50">
                      login or signup
                    </a>
                    <a tabIndex="-2" className="text-sm dropdown-item">
                      Account settings
                    </a>
                    <a tabIndex="-2" className="text-sm dropdown-item">
                      Subscriptions
                    </a>
                    <a tabIndex="-2" className="text-sm dropdown-item">
                      logout
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
