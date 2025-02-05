import React from "react";
import NavbarCom from "../components/NavbarCom";
import StarIcon from "@mui/icons-material/Star";
import HeartIcon from "../../public/heart.svg";
import CartIcon from "../../public/cart.svg";

function SingleProductPage() {
  return (
    <>
      <NavbarCom />

      <section className="w-full grid grid-cols-3 p-15">
        <div className="b1 w-full">
          <img src="../../public/arrival5.jpg" className="w-full" alt="" />
        </div>
        <div className="b2 col-span-2 p-10">
          <h1 className="text-2xl">Bewakoof</h1>
          <p className="text-lg text-gray-400">
            Women's Orange Emotional Baggage Graphic Printed Oversized Plus Size
            T-shirt
          </p>
          <div className="flex items-center mt-10 gap-100">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-2xl">&#8377;599</p>
                <p className="text-lg mt-1 text-green-600">
                  <span className="line-through text-gray-400">
                    &#8377;1499
                  </span>{" "}
                  60% OFF
                </p>
              </div>
              <p className="text-lg text-gray-400">inclusive of all taxes</p>
            </div>
            <div className="flex items-center gap-2">
              <StarIcon fontSize="small" className="text-yellow-500" />
              <p className="text-xl">4.4</p>
            </div>
          </div>
          <div className="flex mt-10 gap-10">
            <button className="flex items-center gap-2 text-xl bg-yellow-400 w-[45%] justify-center py-2 rounded-lg font-bold uppercase"><img src={CartIcon} className="h-7 w-5" /> Add To Bag</button>
            <button className="flex items-center gap-2 text-xl border border-gray-400 w-[30%] justify-center py-2 rounded-lg font-bold text-gray-500 uppercase"><img src={HeartIcon} className="h-7 w-5" /> Wishlist</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProductPage;
