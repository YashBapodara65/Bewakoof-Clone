import React from "react";
import NavbarCom from "../components/NavbarCom";
import sty from "./Home.module.css";
import SwiperSlideCom from "../components/SwiperSlideCom";
import SlickSliderCom from "../components/SlickSliderCom";
import FooterCom from "../components/FooterCom";

//Importing all logics variables 
import * as LogicsVariable from "../components/LogicsCom"; 

function Home() {

  

  return (
    <>
      <section className="bg-gray-200 flex justify-between px-6 py-1">
        <div className="flex gap-6">
          <p>Offers</p>
          <p>Fanbook</p>
          <p>Download App</p>
          <p>Find a store near me</p>
        </div>
        <div className="flex gap-6">
          <p>Contact Us</p>
          <p>Track Order</p>
        </div>  
      </section>
      
      <NavbarCom />

      <section
        className={`${sty.scl} overflow-scroll flex justify-center items-center py-3 px-4g gap-20`}
      >
        <h1 className="text-lg text-center">MEN</h1>
        <h1 className="text-lg text-center">WOMEN</h1>
        <h1 className="text-lg text-center">WINTERWEAR</h1>
        <h1 className="text-lg text-center">PLUS&nbsp;SIZE</h1>
        <h1 className="text-lg text-center">ACCESSORIES</h1>
        <h1 className="text-lg text-center">OFFICIAL&nbsp;MERCH</h1>
        <h1 className="text-lg text-center">SNEAKERS</h1>
        <h1 className="text-lg text-center">BEWAKOOF&nbsp;AIR</h1>
        <h1 className="text-lg text-center">HEAVY&nbsp;DUTY</h1>
        <h1 className="text-lg text-center">CUSTOMIZATION</h1>
      </section>
      
      <section className="mt-10">
      <SwiperSlideCom images={LogicsVariable.posters} view={3} />
      </section>

      <section className="mt-15">
        <h1 className="text-3xl m-5 text-center">Latest Collections</h1>
        <SwiperSlideCom images={LogicsVariable.collections_images} view={4} />
      </section>

      <section className="mt-15">
        <h1 className="text-3xl text-center">Shop by Category - Men</h1>
        <div className="grid grid-cols-6">
        {
          LogicsVariable.mens_product.map((el)=>{
            return(
              <div key={el.id} className="mt-6">
                <img src={el.img} alt={el.id} />
              </div>
            )
          })
        }
        </div>
      </section>

      <section className="mt-15">
        <h1 className="text-3xl text-center">Shop by Category - Women</h1>
        <div className="grid grid-cols-6">
        {
          LogicsVariable.womens_product.map((el)=>{
            return(
              <div key={el.id} className="mt-6">
                <img src={el.img} alt={el.id} />
              </div>
            )
          })
        }
        </div>
      </section>

      <section className="mt-15">
        <h1 className="text-3xl text-center">New Arrivals</h1>
        <div className="w-[100%] flex justify-center items-center">
          <div className="w-[95%]">
          <SlickSliderCom images={LogicsVariable.new_arrival1} dotsVal={false} />
          </div>
        </div>
      </section>
      
      <section className="mt-7">
        <h1 className="text-3xl mb-5 text-center">Shop by Fandom</h1>
      <SwiperSlideCom images={LogicsVariable.posters2} view={3} />
      </section>

      <section className="mt-15">
        <h1 className="text-3xl mb-5 text-center">Too Hot To Be Missed</h1>
      <SwiperSlideCom images={LogicsVariable.posters3} view={4} />
      </section>

      <section className="mt-20">
        <FooterCom/>
      </section>

    </>
  );
}

export default Home;