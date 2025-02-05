import React from "react";
import NavbarCom from "../components/NavbarCom";
import MyAccountSidebarCom from "../components/MyAccountSidebarCom";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import FooterCom from "../components/FooterCom"

import MyAccountIcon1 from "../../public/myaccount1.png";
import MyAccountIcon2 from "../../public/myaccount2.png";
import MyAccountIcon3 from "../../public/myaccount3.png";
import MyAccountIcon4 from "../../public/myaccount4.png";
import MyAccountIcon5 from "../../public/myaccount5.png";
import MyAccountIcon6 from "../../public/myaccount6.png";
import MyAccountIcon7 from "../../public/myaccount7.png";
import MyAccountIcon8 from "../../public/myaccount8.png";

function MyAccount() {
  return (
    <>
      <NavbarCom />
      <section className="w-full flex py-10 items-start justify-center">
        <div className="sticky top-[12%]">
        <MyAccountSidebarCom />
        </div>
        <div className="box2 w-[65%]">
          <div className="grid px-5 gap-10 grid-cols-2">
            <div className="innerbox1 border col-span-1 rounded-lg border-amber-300 flex flex-col gap-17 px-7 py-5">
              <div className="flex items-center gap-5">
                <p className="bg-yellow-400 font-bold text-3xl w-15 h-15 flex items-center justify-center rounded-full">
                  Y
                </p>
                <div>
                  <h1 className="text-xl">Yash</h1>
                  <h1 className="mt-2">exam@gmail.com</h1>
                  <h1 className="mt-2">8849881157</h1>
                </div>
              </div>
              <button className="uppercase w-full text-lg bg-amber-400 py-2 rounded-lg">
                Edit Profile
              </button>
            </div>
            <div className="innerbox2 col-span-1 border rounded-lg border-amber-300 px-7 py-5">
              <h1 className="text-2xl text-center">
                Bewakoof{" "}
                <span className="font-bold">
                  Tri<span className="text-yellow-400">Be</span>
                </span>
              </h1>
              <p className="text-center">
                Upgrade to the premium experience now
              </p>
              <div className="flex mt-10 items-center justify-evenly">
                <div className="flex flex-col items-center justify-center">
                  <LocalShippingOutlinedIcon />
                  <p>Free Shipping</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <TimerOutlinedIcon />
                  <p>Early Access</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <CardGiftcardOutlinedIcon />
                  <p>VIP Support</p>
                </div>
              </div>
              <button className="uppercase mt-7 w-full text-lg bg-amber-400 py-2 rounded-lg">
                Get Tribe Membership
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 p-5 gap-5">
            <div className="innerbox1 px-5 py-5 col-span-1 flex flex-col items-center justify-center gap-1 border rounded-lg border-gray-400">
              <img width="30" height="30" src={MyAccountIcon2} alt="t-shirt" />
              <h1 className="text-lg text-center">My Orders</h1>
              <p className="text-center text-gray-400">View, Modify And Track Orders</p>
            </div>
            <div className="innerbox2 px-5 py-5 col-span-1 flex flex-col items-center justify-center gap-1 border rounded-lg border-gray-400">
              <img
                width="32"
                height="32"
                src={MyAccountIcon1}
                alt="money"
              />
              <h1 className="text-lg text-center">My Payments</h1>
              <p className="text-center text-gray-400">View And Modify Payments Methods</p>
            </div>
            <div className="innerbox3 px-5 py-5 col-span-1 flex flex-col items-center justify-center gap-1 border rounded-lg border-gray-400">
              <img
                width="32"
                height="32"
                src={MyAccountIcon3}
                alt="wallet"
              />
              <h1 className="text-lg text-center">My Wallet</h1>
              <p className="text-center text-gray-400">Bewakoof Wallet History And Redeemed Gift Cards</p>
            </div>
            <div className="innerbox4 px-5 py-5 col-span-1 flex flex-col items-center justify-center gap-1 border rounded-lg border-gray-400">
              <img
                width="30"
                height="30"
                src={MyAccountIcon4}
                alt="t-shirt"
              />
              <h1 className="text-lg text-center">My Addresses</h1>
              <p className="text-center text-gray-400">Edit, Add Or Remove Addresses</p>
            </div>
            <div className="innerbox5 px-5 py-5 col-span-1 flex flex-col items-center justify-center gap-1 border rounded-lg border-gray-400">
              <img
                width="30"
                height="30"
                src={MyAccountIcon5}
                alt="t-shirt"
              />
              <h1 className="text-lg text-center">My Profile</h1>
              <p className="text-center text-gray-400">Edit Personal Info And Change Password</p>
            </div>
            <div className="innerbox6 px-5 py-5 col-span-1 flex flex-col items-center justify-center gap-1 border rounded-lg border-gray-400">
              <img
                width="30"
                height="30"
                src={MyAccountIcon6}
                alt="t-shirt"
              />
              <h1 className="text-lg text-center">Help & Support</h1>
              <p className="text-center text-gray-400">Reach Out To Us</p>
            </div>
            <div className="innerbox7 px-5 py-5 col-span-1 flex flex-col items-center justify-center gap-1 border rounded-lg border-gray-400">
              <img
                width="30"
                height="30"
                src={MyAccountIcon7}
                alt="t-shirt"
              />
              <h1 className="text-lg text-center">Our Story</h1>
              <p className="text-center text-gray-400">Our Story</p>
            </div>
            <div className="innerbox8 px-5 py-5 col-span-1 flex flex-col items-center justify-center gap-1 border rounded-lg border-gray-400">
              <img
                width="30"
                height="30"
                src={MyAccountIcon8}
                alt="t-shirt"
              />
              <h1 className="text-lg text-center">Fanbook</h1>
              <p className="text-center text-gray-400">Fanbook</p>
            </div>
          </div>
        </div>
      </section>

    <section>
      <FooterCom visibleExtra={false} />
    </section>

    </>
  );
}

export default MyAccount;
