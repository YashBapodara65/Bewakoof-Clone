import React from "react";
import NavbarCom from "../components/NavbarCom";
import sty from "./Home.module.css";
import SwiperSlideCom from "../components/SwiperSlideCom";
import {v4} from "uuid";

function Home() {

  const posters = [
    {
      id : v4(),
      img : "../../public/sl1.jpg",
    },
    {
      id : v4(),
      img : "../../public/sl2.jpg",
    },
    {
      id : v4(),
      img : "../../public/sl3.jpg",
    },
    {
      id : v4(),
      img : "../../public/sl4.gif",
    },
    {
      id : v4(),
      img : "../../public/sl5.jpg",
    },
    {
      id : v4(),
      img : "../../public/sl6.jpg",
    },
    {
      id : v4(),
      img : "../../public/sl7.jpg",
    },
    {
      id : v4(),
      img : "../../public/sl8.jpg",
    },
    {
      id : v4(),
      img : "../../public/sl9.jpg",
    },
    {
      id : v4(),
      img : "../../public/sl10.jpg",
    },
  ]

  const collections_images = [
    {
      id : v4(),
      img: "../../public/collections1.jpg"
    },
    {
      id : v4(),
      img: "../../public/collections2.jpg"
    },
    {
      id : v4(),
      img: "../../public/collections3.jpg"
    },
    {
      id : v4(),
      img: "../../public/collections4.jpg"
    },
    {
      id : v4(),
      img: "../../public/collections5.jpg"
    },
    {
      id : v4(),
      img: "../../public/collections6.jpg"
    },
    {
      id : v4(),
      img: "../../public/collections7.jpg"
    },
    {
      id : v4(),
      img: "../../public/collections8.jpg"
    },
  ];

  const mens_product = [
    {
      id: v4(),
      img : "../../public/men1.jpg"
    },
    {
      id: v4(),
      img : "../../public/men2.jpg"
    },
    {
      id: v4(),
      img : "../../public/men3.jpg"
    },
    {
      id: v4(),
      img : "../../public/men4.jpg"
    },
    {
      id: v4(),
      img : "../../public/men5.jpg"
    },
    {
      id: v4(),
      img : "../../public/men6.jpg"
    },
    {
      id: v4(),
      img : "../../public/men7.jpg"
    },
    {
      id: v4(),
      img : "../../public/men8.jpg"
    },
    {
      id: v4(),
      img : "../../public/men9.jpg"
    },
    {
      id: v4(),
      img : "../../public/men10.jpg"
    },
    {
      id: v4(),
      img : "../../public/men11.jpg"
    },
    {
      id: v4(),
      img : "../../public/men12.jpg"
    },
    {
      id: v4(),
      img : "../../public/men13.jpg"
    },
    {
      id: v4(),
      img : "../../public/men14.jpg"
    },
    {
      id: v4(),
      img : "../../public/men15.jpg"
    },
    {
      id: v4(),
      img : "../../public/men16.jpg"
    }
  ]

  const womens_product = [
    {
      id: v4(),
      img : "../../public/women1.jpg"
    },
    {
      id: v4(),
      img : "../../public/women2.jpg"
    },
    {
      id: v4(),
      img : "../../public/women3.jpg"
    },
    {
      id: v4(),
      img : "../../public/women4.jpg"
    },
    {
      id: v4(),
      img : "../../public/women5.jpg"
    },
    {
      id: v4(),
      img : "../../public/women6.jpg"
    },
    {
      id: v4(),
      img : "../../public/women7.jpg"
    },
    {
      id: v4(),
      img : "../../public/women8.jpg"
    },
    {
      id: v4(),
      img : "../../public/women9.jpg"
    },
    {
      id: v4(),
      img : "../../public/women10.jpg"
    },
    {
      id: v4(),
      img : "../../public/women11.jpg"
    },
    {
      id: v4(),
      img : "../../public/women12.jpg"
    },
    {
      id: v4(),
      img : "../../public/women13.jpg"
    },
    {
      id: v4(),
      img : "../../public/women14.jpg"
    },
    {
      id: v4(),
      img : "../../public/women15.jpg"
    },
    {
      id: v4(),
      img : "../../public/women16.jpg"
    },
    {
      id: v4(),
      img : "../../public/women17.jpg"
    },
    {
      id: v4(),
      img : "../../public/men16.jpg"
    }
  ]

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
      <SwiperSlideCom images={posters} view={3} />
      </section>

      <section className="mt-15">
        <h1 className="text-3xl m-5 text-center">Latest Collections</h1>
        <SwiperSlideCom images={collections_images} view={4} />
      </section>

      <section className="mt-15">
        <h1 className="text-3xl text-center">Shop by Category - Men</h1>
        <div className="grid grid-cols-6">
        {
          mens_product.map((el)=>{
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
          womens_product.map((el)=>{
            return(
              <div key={el.id} className="mt-6">
                <img src={el.img} alt={el.id} />
              </div>
            )
          })
        }
        </div>
      </section>
    </>
  );
}

export default Home;