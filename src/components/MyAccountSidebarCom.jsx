import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx"; // Install using: npm install clsx
import {
  GridViewOutlined as GridViewOutlinedIcon,
  LocalShippingOutlined as LocalShippingOutlinedIcon,
  PaymentOutlined as PaymentOutlinedIcon,
  AccountBalanceWalletOutlined as AccountBalanceWalletOutlinedIcon,
  LocationOnOutlined as LocationOnOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  LogoutOutlined as LogoutOutlinedIcon,
} from "@mui/icons-material";

function MyAccountSidebarCom() {
  const location = useLocation(); // ✅ Correct usage

  return (
    <div className="box1 px-4 w-100 flex py-5 flex-col gap-7 border-gray-400 rounded-md border">
      
      {/* Overview should be active on any /myaccount subpath */}
      <NavLink 
        to="/myaccount"
        className={({ isActive }) =>
          clsx(
            "flex items-center px-2 gap-3 py-2 border border-s-0 border-e-0 border-t-0",
            isActive && location.pathname === "/myaccount" ? "text-blue-500 border-blue-500" : "text-black border-gray-400"
          )
        }
      >
        <GridViewOutlinedIcon />
        <h1 className="text-xl">Overview</h1>
      </NavLink>

      <NavLink 
        to="/orders"
        className={({ isActive }) =>
          clsx(
            "flex items-center px-2 gap-3 py-2 border border-s-0 border-e-0 border-t-0",
            isActive ? "text-blue-500 border-blue-500" : "text-black border-gray-400"
          )
        }
      >
        <LocalShippingOutlinedIcon />
        <h1 className="text-xl">My Orders</h1>
      </NavLink>

      <NavLink to="/payments" className="border-gray-400 border flex items-center px-2 gap-3 py-2 border-s-0 border-e-0 border-t-0">
        <PaymentOutlinedIcon />
        <h1 className="text-xl">My Payments</h1>
      </NavLink>

      <NavLink to="/wallet" className="border-gray-400 border flex items-center px-2 gap-3 py-2 border-s-0 border-e-0 border-t-0">
        <AccountBalanceWalletOutlinedIcon />
        <h1 className="text-xl">My Wallet</h1>
      </NavLink>

      <NavLink to="/addresses" className="border-gray-400 border flex items-center px-2 gap-3 py-2 border-s-0 border-e-0 border-t-0">
        <LocationOnOutlinedIcon />
        <h1 className="text-xl">My Addresses</h1>
      </NavLink>

      {/* Profile should be active on /myaccount/profile */}
      <NavLink 
        to="/myaccount/profile"
        className={({ isActive }) =>
          clsx(
            "flex items-center px-2 gap-3 py-2 border border-s-0 border-e-0 border-t-0",
            isActive && location.pathname === "/myaccount/profile" ? "text-blue-500 border-blue-500" : "text-black border-gray-400"
          )
        }
      >
        <PersonOutlineOutlinedIcon />
        <h1 className="text-xl">My Profile</h1>
      </NavLink>

      {/* Logout (without NavLink `to` because it's an action button) */}
      <button className="flex items-center px-2 gap-3 py-2">
        <LogoutOutlinedIcon className="text-red-600" />
        <h1 className="text-xl text-red-600">Logout</h1>
      </button>
      
    </div>
  );
}

export default MyAccountSidebarCom;