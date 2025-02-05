import React, { useState } from "react";
import Logo from "../../public/logo.svg";
import sty from "./NavbarCom.module.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import Special1 from "../../public/special1.jpeg";
import Special2 from "../../public/special2.png";
import Special3 from "../../public/special3.png";
import Special4 from "../../public/special4.png";
import Special5 from "../../public/special5.png";
import Special6 from "../../public/special6.jpeg";
import Special7 from "../../public/special7.png";
import Special8 from "../../public/special8.png";
import Special9 from "../../public/special9.png";
import Special10 from "../../public/special10.png";
import Special11 from "../../public/special11.png";
import Special12 from "../../public/special12.png";
import Special13 from "../../public/special13.png";
import Special14 from "../../public/special14.png";
import Special15 from "../../public/special15.png";
import Special16 from "../../public/special16.png";
import Special17 from "../../public/special17.png";
import Special18 from "../../public/special18.png";
import Special19 from "../../public/special19.png";
import Special20 from "../../public/special20.png";
import Special21 from "../../public/special21.png";
import Special22 from "../../public/special22.png";
import Special23 from "../../public/special23.png";
import Special24 from "../../public/special24.png";
import Special25 from "../../public/special25.png";
import Special26 from "../../public/special26.png";
import Special27 from "../../public/special27.png";
import Special28 from "../../public/special28.png";
import Special29 from "../../public/special29.png";
import Special30 from "../../public/special30.png";
import axios from "axios";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function NavbarCom() {

  const getmobno = localStorage.getItem("mobno");

  // axios.get(`http://localhost:3000/users`)

  // console.log(getmobno);

  return (
    <>
      <hr />
      <section className="relative flex">
        <div className="flex w-full ps-10 relative gap-10">
          <img src={Logo} className="w-40" alt="" />
          <div className="flex cursor-pointer hover:border-4 hover:border-orange-600 hover:border-t-0 hover:border-s-0 hover:border-e-0 transition duration-100 items-center justify-center group">
            <h1>MEN</h1>
            <div className="absolute shadow-xl hidden start-0 opacity-0 group-hover:opacity-100 group-hover:block transition duration-300 top-[101%] m-0 p-0 bg-white w-screen z-10">
              <div className={`w-full h-140 ${sty.scl} overflow-scroll flex`}>
                <div className="box1 flex justify-evenly border border-s-0 border-e-0 border-b-0 w-[70%]">
                  <div className="flex flex-col gap-4 py-3">
                    <h1 className="font-bold text-xl">Topwear</h1>
                    <p className="text-lg text-gray-500">All Topwear</p>
                    <p className="text-lg text-gray-500">All T-Shirts</p>
                    <p className="text-lg text-gray-500">Oversized T-Shirts</p>
                    <p className="text-lg text-gray-500">
                      Classic Fit T-Shirts
                    </p>
                    <p className="text-lg text-gray-500">All Shirts</p>
                    <p className="text-lg text-gray-500">Hoodies</p>
                    <p className="text-lg text-gray-500">Sweetshirts</p>
                    <p className="text-lg text-gray-500">Jackets</p>
                    <p className="text-lg text-gray-500">Sweaters</p>
                    <p className="text-lg text-gray-500">Windcheaters</p>
                    <p className="text-lg text-gray-500">Plus Size Topwear</p>
                    <p className="text-lg text-gray-500">Customize T-shirts</p>
                    <p className="text-lg text-gray-500">Polo T-shirts</p>
                    <p className="text-lg text-gray-500">Vests</p>
                    <p className="text-lg text-gray-500">Co-ord Sets</p>
                    <p className="text-lg text-gray-500">Buy 2 for 799</p>
                    <p className="text-lg text-gray-500">Buy 2 for 999</p>
                    <p className="text-lg text-gray-500">
                      Full Sleeve T-shirts
                    </p>
                    <p className="text-lg text-gray-500">
                      Half Sleeve T-shirts
                    </p>
                    <p className="text-lg text-gray-500">Printed T-shirts</p>
                    <p className="text-lg text-gray-500">Plain T-shirts</p>
                    <p className="text-lg text-gray-500">
                      Sweatshirts & Hoodies
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 py-3">
                    <h1 className="font-bold text-xl">Bottomwear</h1>
                    <p className="text-lg text-gray-500">All Bottomwear</p>
                    <p className="text-lg text-gray-500">Joggers</p>
                    <p className="text-lg text-gray-500">Trousers & Pants</p>
                    <p className="text-lg text-gray-500">Trackpants</p>
                    <p className="text-lg text-gray-500">Jeans</p>
                    <p className="text-lg text-gray-500">Pajamas</p>
                    <p className="text-lg text-gray-500">Shorts</p>
                    <p className="text-lg text-gray-500">Boxes</p>
                    <p className="text-lg text-gray-500">
                      Plus Size Bottomwear
                    </p>
                    <p className="text-lg text-gray-500">Cargos</p>
                    <p className="text-lg text-gray-500">Cargo Joggers</p>
                    <p className="text-lg text-gray-500">Cargo Pants</p>
                    <p className="text-lg text-gray-500">Parachute Pants</p>
                    <p className="text-lg text-gray-500">
                      Buy 2 Joggers at 1699
                    </p>
                    <p className="text-lg text-gray-500">
                      Buy 2 Pajamas at 1099
                    </p>
                    <p className="text-lg text-gray-500">Baggy Jeans</p>
                    <p className="text-lg text-gray-500">Straight Fit Jeans</p>
                    <p className="text-lg text-gray-500">Baggy Pants</p>
                    <p className="text-lg text-gray-500">Co-ord Sets</p>
                  </div>
                  <div className="flex flex-col gap-4 py-3">
                    <h1 className="font-bold text-xl">Winterwear</h1>
                    <p className="text-lg text-gray-500">All Winterwear</p>
                    <p className="text-lg text-gray-500">Hoodies</p>
                    <p className="text-lg text-gray-500">Sweetshirts</p>
                    <p className="text-lg text-gray-500">Jackets</p>
                    <p className="text-lg text-gray-500">Sweaters</p>
                    <p className="text-lg text-gray-500">Windcheaters</p>
                    <p className="text-lg text-gray-500">Co-ord Sets</p>
                    <p className="text-lg text-gray-500">
                      Sweetshirts & Hoodies
                    </p>
                    <p className="text-lg text-gray-500">Plus Size</p>
                    <hr />
                    <p className="text-lg font-bold">Plus Size</p>
                    <p className="text-lg text-gray-500">All Plus-size</p>
                    <p className="text-lg text-gray-500">All Topwear</p>
                    <p className="text-lg text-gray-500">All Bottomwear</p>
                    <p className="text-lg text-gray-500">All T-shirts</p>
                    <p className="text-lg text-gray-500">Hoddies</p>
                    <p className="text-lg text-gray-500">Sweatshirts</p>
                    <p className="text-lg text-gray-500">Jackets</p>
                    <p className="text-lg text-gray-500">Jeans</p>
                  </div>
                  <div className="flex flex-col gap-4 py-3">
                    <h1 className="font-bold text-xl">Top Sellers</h1>
                    <p className="text-lg text-gray-500">Best of Winterwear</p>
                    <p className="text-lg text-gray-500">Best of T-shirts</p>
                    <p className="text-lg text-gray-500">Best of Cargos</p>
                    <p className="text-lg text-gray-500">Best of Joggers</p>
                    <p className="text-lg text-gray-500">Best of Jeans</p>
                    <p className="text-lg text-gray-500">Best of Shirts</p>
                    <hr />
                    <p className="text-lg font-bold">Footwear</p>
                    <p className="text-lg text-gray-500">Bewakoof Sneakers</p>
                    <p className="text-lg text-gray-500">Sliders</p>
                    <p className="text-lg text-gray-500">Casual Shoes</p>
                    <hr />
                    <p className="text-lg font-bold">Accessories</p>
                    <p className="text-lg text-gray-500">Mobile Covers</p>
                    <p className="text-lg text-gray-500">Backpacks</p>
                    <p className="text-lg text-gray-500">Sunglasses</p>
                    <p className="text-lg text-gray-500">Sling Bags</p>
                    <p className="text-lg text-gray-500">Caps</p>
                    <p className="text-lg text-gray-500">Mobile Card Holder</p>
                  </div>
                </div>
                <div className="box2 px-5 py-5 w-[30%] h-fit border border-e-0 border-b-0">
                  <h1 className="font-bold text-lg">SPECIALS</h1>
                  <div className="grid gap-10 mt-10 grid-cols-2">
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special1} alt="" width={100} height={100} />
                      <h1 className="text-center">Doctor Doom</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special2} alt="" width={100} height={100} />
                      <h1 className="text-center">Buy 2 for 799</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special3} alt="" width={100} height={100} />
                      <h1 className="text-center">Buy 2 for 999</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special4} alt="" width={100} height={100} />
                      <h1 className="text-center">Buy 2 Joggers at 1699</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special5} alt="" width={100} height={100} />
                      <h1 className="text-center">Buy 2 Pajamas at 1099</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special6} alt="" width={100} height={100} />
                      <h1 className="text-center">SpongeBob</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special7} alt="" width={100} height={100} />
                      <h1 className="text-center">Demon Slayer</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special8} alt="" width={100} height={100} />
                      <h1 className="text-center">Winterwear Store for Him</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special9} alt="" width={100} height={100} />
                      <h1 className="text-center">
                        Bewakoof Special Deadpool & Wolverine
                      </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special10} alt="" width={100} height={100} />
                      <h1 className="text-center">Bewakoof Sneakers</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special11} alt="" width={100} height={100} />
                      <h1 className="text-center">Customise with Google AI</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special12} alt="" width={100} height={100} />
                      <h1 className="text-center">
                        Bewakoof Air: New Summer Drip
                      </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special13} alt="" width={100} height={100} />
                      <h1 className="text-center">Bwkf X One Piece</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special14} alt="" width={100} height={100} />
                      <h1 className="text-center">Bwkf X Friends</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special15} alt="" width={100} height={100} />
                      <h1 className="text-center">Disney Villans</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special16} alt="" width={100} height={100} />
                      <h1 className="text-center">Bwkf X Ishaan Khatter</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special17} alt="" width={100} height={100} />
                      <h1 className="text-center">Bwkf X Harry Potter</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special18} alt="" width={100} height={100} />
                      <h1 className="text-center">Bwkf X Mickey Mouse</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special19} alt="" width={100} height={100} />
                      <h1 className="text-center">Bewakoof Heavy Duty</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special20} alt="" width={100} height={100} />
                      <h1 className="text-center">Bwkf X Naruto</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special21} alt="" width={100} height={100} />
                      <h1 className="text-center">Bwkf X Pima</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special22} alt="" width={100} height={100} />
                      <h1 className="text-center">Bwkf X Minions</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special23} alt="" width={100} height={100} />
                      <h1 className="text-center">Bwkf X Rick & Morty</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special24} alt="" width={100} height={100} />
                      <h1 className="text-center">Bwkf X TNMT</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special25} alt="" width={100} height={100} />
                      <h1 className="text-center">Bwkf X Garfield</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special26} alt="" width={100} height={100} />
                      <h1 className="text-center">The Official Merch Store</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special27} alt="" width={100} height={100} />
                      <h1 className="text-center">Anime Collection</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special28} alt="" width={100} height={100} />
                      <h1 className="text-center">The Batman Collection</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special29} alt="" width={100} height={100} />
                      <h1 className="text-center">Customize T-shirts</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={Special30} alt="" width={100} height={100} />
                      <h1 className="text-center">Plus Size Store</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center group">
          <h1>WOMEN</h1>
          </div>
          <div className="flex items-center justify-center group">
          <h1>MOBILE COVERS</h1>
          </div>
        </div>
        <div className="flex gap-7 py-2 pe-10 items-center justify-center">
          <div className="d-flex w-80 relative bg-gray-200 rounded-lg">
            <form action="">
              <input
                type="text"
                className="w-full ps-14 py-2 outline-0"
                placeholder="Search by products"
              />
            </form>
            <SearchIcon className="absolute top-1/4 start-[3%]" />
          </div>
          <p>|</p>
          {
            getmobno == null 
            ?
            <Link to={"/login"}>
            <p>LOGIN</p>
          </Link>
            : 
            <div className="relative group">
              <PersonOutlineOutlinedIcon className="mt-1 cursor-pointer" />
              <div className="absolute hidden group-hover:block -end-[100%] z-100 w-50">
              <div className="bg-white w-full py-2 flex flex-col gap-3">
                <p className="italic px-4 py-2 hover:bg-gray-200 cursor-pointer">Hi, yash</p>
                <p className="italic px-4 py-2 hover:bg-gray-200 cursor-pointer">My Account</p>
                <p className="italic px-4 py-2 hover:bg-gray-200 cursor-pointer">My Wishlist</p>
                <p className="italic px-4 py-2 hover:bg-gray-200 cursor-pointer">My Orders</p>
                <p className="italic px-4 py-2 hover:bg-gray-200 cursor-pointer">My Wallet</p>
                <p className="italic px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</p>
              </div>
              </div>
            </div>
          }
          <p>
            <FavoriteBorderRoundedIcon />
          </p>
          <p>
            <ShoppingBagOutlinedIcon />
          </p>
        </div>
      </section>
      <hr />
    </>
  );
}

export default NavbarCom;
