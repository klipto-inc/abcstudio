"use client";
import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import Api from "@/utils/Api";
import Loading from "@/components/loading/Loading";

const UserContext = createContext();

/**
 * @param {object} children where all component can acccss children
 */
export const UserContextProvider = ({ children }) => {
  // initial state for user incoming data
  const [UserData, setUserData] = useState([]);
  const [dummyUser, setDummyUser] = useState([])

  // loading state for user incoming data

  const [loading, setLoading] = useState(true);
  const [genLoading, setGenload] = useState(true);



  // get user token from session
  const Authtoken = Cookies.get("authToken");

  /**
   * @function (fuction) getUserData - a fuction created to retrieve user info.
   */

  const HandleGetUser = async () => {
    try {
      const data = await Api.get("client/auth/account", {
        headers: {
          Authorization: "Bearer " + Authtoken,
        },
      });
      const DataValue = data.data.olduser;
      if (data.status === 200) {
        setUserData(DataValue);
        setLoading(false);
        setGenload(false)
      }
      // setLoading(true);
      console.log("data", data);
    } catch (error) {}
  };

  /**
   * @function (fuction) getUserData - a fuction created to retrieve user info.
   */

  const HandleLogout = async () => {
    try {
      const Authtoken = Cookies.remove("authToken");

      await Api.delete("client/auth/signout", {
        headers: {
          Authorization: "Bearer " + Authtoken,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * @function (fuction)  functiom for password recovery
   */

  useEffect(() => {
    HandleGetUser();
    if (!Authtoken) {
      setGenload(false);
    }
  }, []);


    // log out user
    console.log("UserData", UserData);


  // if(genLoading){
  //  return <Loading />
  // }
  return (
    <UserContext.Provider
      value={{
        HandleLogout,
        UserData,
        loading,
        Authtoken,
        HandleGetUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};



/**
 * Returns the user provider from the React context.
 * @returns {Object} The user provider.
 */

export function UseUserContext() {
  const usercontext = UserContext;
     if(!usercontext){
      throw new Error('useUser must be used within a UserProvider')
     }
  return useContext(usercontext);
}
