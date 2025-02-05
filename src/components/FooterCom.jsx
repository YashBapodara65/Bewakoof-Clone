import React from "react";
import Logo from "../../public/logo2.svg";
import P1 from "../../public/p1.svg";
import P2 from "../../public/p2.svg";
import P3 from "../../public/p3.svg";
import P4 from "../../public/p4.svg";
import P5 from "../../public/p5.svg";
import P6 from "../../public/p6.svg";
import App1 from "../../public/app1.png";
import App2 from "../../public/app2.png";

function FooterCom({ visibleExtra }) {
  return (
    <>
      <section className="bg-gray-950 flex justify-center items-center w-full">
        <div className="w-[95%] mt-20">
          <img src={Logo} className="h-7" alt="" />
          <div className="b1 grid md:grid-cols-2 xl:grid-cols-4 mt-5">
            <div className="b1d1 mt-7">
              <h1 className="text-xl uppercase text-yellow-400 font-sans">
                Customer Service
              </h1>
              <p className="text-gray-200 mt-4">Contact Us</p>
              <p className="text-gray-200 mt-1">Track Order</p>
              <p className="text-gray-200 mt-1">Return Order</p>
              <p className="text-gray-200 mt-1">Cancel Order</p>
              <div className="mt-5">
                <p className="text-gray-200">15 Days Return Policy*</p>
                <p className="text-gray-200 mt-2">Cash On Delivery*</p>
              </div>
            </div>
            <div className="b1d2 mt-7">
              <h1 className="text-xl uppercase text-yellow-400 font-sans">
                Company
              </h1>
              <p className="text-gray-200 mt-4">About Us</p>
              <p className="text-gray-200 mt-1">Terms & Conditions</p>
              <p className="text-gray-200 mt-1">Privacy Policy</p>
              <p className="text-gray-200 mt-1">We are Hiring</p>
              <div className="mt-7">
                <h1 className="text-xl uppercase mt-7 text-yellow-400 font-sans">
                  Download The App
                </h1>
                <div className="flex gap-4 mt-4">
                  <img src={App1} className="h-7" alt="" />
                  <img src={App2} className="h-7" alt="" />
                </div>
              </div>
            </div>
            <div className="b1d3 mt-7">
              <h1 className="text-xl uppercase text-yellow-400 font-sans">
                Connect With Us
              </h1>
              <p className="text-gray-200 mt-4">4.7M People like this</p>
              <p className="text-gray-200 mt-2">1M People like this</p>
              <h1 className="text-xl uppercase mt-7 text-yellow-400 font-sans">
                100% Secure Payment
              </h1>
              <div className="flex gap-2 items-center mt-2">
                <img src={P1} className="h-8" alt="" />
                <img src={P2} className="h-8" alt="" />
                <img src={P3} className="h-8" alt="" />
                <img src={P4} className="h-8" alt="" />
                <img src={P5} className="h-8" alt="" />
                <img src={P6} className="h-6" alt="" />
              </div>
            </div>
            <div className="b1d4 mt-7">
              <h1 className="text-xl uppercase text-yellow-400 font-sans">
                Keep Up To Date
              </h1>
              <form action="" className="mt-3 w-full flex">
                <input
                  type="text"
                  placeholder="Enter Email Id:"
                  className="placeholder-gray-300 outline-0 text-gray-300 border-2 w-[60%] h-8 ps-3 border-t-0 border-s-0 border-e-0 bg-black border-amber-400"
                />
                <button
                  type="submit"
                  className="bg-yellow-400 w-[40%] h-8 uppercase font-sans"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <hr className="size-0.5 bg-gray-400 w-full mt-10" />
          <div className="b2 grid grid-cols-1 2xl:grid-cols-4">
            <div className="b2d1 mt-10">
              <h1 className="text-xl text-white font-sans">Men's Clothing</h1>
              <p className="flex flex-wrap space-x-5 2xl:flex-col mt-8 space-y-1">
                <span className="text-gray-200">Top Wear</span>
                <span className="text-gray-200">Men's New Arrivals</span>
                <span className="text-gray-200">Men's T-Shirts</span>
                <span className="text-gray-200">
                  Men's Hoodies & Sweatshirts
                </span>
                <span className="text-gray-200">
                  Oversized T-Shirts for Men
                </span>
                <span className="text-gray-200">
                  Men's Long Sleeve T-Shirts
                </span>
                <span className="text-gray-200">Men's White T-Shirts</span>
                <span className="text-gray-200">Men's Crew Neck T-Shirts</span>
                <span className="text-gray-200">
                  Men's Half Sleeve T-Shirts
                </span>
                <span className="text-gray-200">Men's Printed T-Shirts</span>
                <span className="text-gray-200">Men's Plain T-Shirts</span>
                <span className="text-gray-200">Men's Plus Size T-Shirts</span>
                <span className="text-gray-200">Men's Vests</span>
                <span className="text-gray-200">Men's Polo T-Shirts</span>
                <span className="text-gray-200">Men's Tank Tops</span>
                <span className="text-gray-200">Men's Sweaters</span>
                <span className="text-gray-200">Men's Jackets</span>
                <span className="text-gray-200">Men's Combo T-Shirts</span>
                <span className="text-gray-200">Men's Shirts</span>
                <span className="text-gray-200">Men's Nightwear</span>
                <span className="text-gray-200">Men's Innerwear</span>
                <span className="text-gray-200">Men's Plus Size Store</span>
              </p>
              <p className="flex mt-5 flex-wrap 2xl:flex-col space-y-1 space-x-5">
                <span className="text-gray-200">Bottom Wear</span>
                <span className="text-gray-200">Men's Pajamas</span>
                <span className="text-gray-200">Men's Boxer Shorts</span>
                <span className="text-gray-200">Men's Shorts</span>
                <span className="text-gray-200">Men's Jogger</span>
                <span className="text-gray-200">Men's Cargo Jogger</span>
                <span className="text-gray-200">Men's Track Pants</span>
                <span className="text-gray-200">Men's Jeans</span>
                <span className="text-gray-200">Men's Sweatpants</span>
                <span className="text-gray-200">Men's Trousers & Pants</span>
              </p>
              <h1 className="text-xl text-white font-sans mt-5">Featured</h1>
              <p className="flex mt-5 flex-wrap 2xl:flex-col space-y-1 space-x-5">
                <span className="text-gray-200">Men's Flip Flops</span>
                <span className="text-gray-200">Men's Sliders</span>
                <span className="text-gray-200">Marvel T-Shirts</span>
                <span className="text-gray-200">Disney T-Shirts</span>
                <span className="text-gray-200">Avengers T-Shirts</span>
                <span className="text-gray-200">Star Wars T-Shirts</span>
                <span className="text-gray-200">Batman T-Shirts</span>
                <span className="text-gray-200">Superman T-Shirts</span>
                <span className="text-gray-200">Joker T-Shirts</span>
              </p>
            </div>
            <div className="b2d2 mt-10">
              <h1 className="text-xl text-white font-sans">Women's Clothing</h1>
              <div className="flex mt-5 flex-wrap 2xl:flex-col space-y-1 space-x-5">
                <p className="text-gray-200">Women's Top Wear</p>
                <p className="text-gray-200">Women's New Arrivals</p>
                <p className="text-gray-200">Women's T-Shirts</p>
                <p className="text-gray-200">Women's Fashion Tops</p>
                <p className="text-gray-200">Women's Tank Tops</p>
                <p className="text-gray-200">Women's Hoodies & Sweatshirts</p>
                <p className="text-gray-200">Women's Dresses</p>
                <p className="text-gray-200">Women's 3/4 Sleeve T-Shirts</p>
                <p className="text-gray-200">Women's Kurtis</p>
                <p className="text-gray-200">Women's Combo T-Shirts</p>
                <p className="text-gray-200">Women's Nightwear</p>
                <p className="text-gray-200">Women's Plus Size Store</p>
              </div>
              <p className="flex mt-5 flex-wrap 2xl:flex-col space-y-1 space-x-5">
                <span className="text-gray-200">Women's Bottom Wear</span>
                <span className="text-gray-200">Women's Co-ord Sets</span>
                <span className="text-gray-200">Women's Pajamas</span>
                <span className="text-gray-200">Women's Boxer Shorts</span>
                <span className="text-gray-200">Women's Jeans</span>
                <span className="text-gray-200">Women's Wide Leg Jeans</span>
                <span className="text-gray-200">Women's Jeggings</span>
                <span className="text-gray-200">Women's Joggers</span>
                <span className="text-gray-200">Women's Trousers & Pants</span>
                <span className="text-gray-200">Women's Cargo Pants</span>
                <span className="text-gray-200">Women's Track Pants</span>
                <span className="text-gray-200">Women's Shorts</span>
              </p>
              <p className="flex mt-5 flex-wrap 2xl:flex-col space-y-1 space-x-5">
                <span className="text-gray-200">Bags</span>
                <span className="text-gray-200">Laptop Bags</span>
                <span className="text-gray-200">Small Backpacks</span>
              </p>
              <h1 className="text-xl text-white font-sans mt-5">Featured</h1>
              <p className="flex mt-5 flex-wrap 2xl:flex-col space-y-1 space-x-5">
                <span className="text-gray-200">Women's Slides</span>
                <span className="text-gray-200">Women's Flip Flops</span>
              </p>
            </div>
            <div className="b2d3 mt-10">
              <h1 className="text-xl text-white font-sans">Mobile Covers</h1>
              <p className="flex mt-5 flex-wrap 2xl:flex-col space-y-1 space-x-5">
                <span className="text-gray-200">Apple</span>
                <span className="text-gray-200">iPhone 16 Back Covers</span>
                <span className="text-gray-200">
                  iPhone 15 Pro Max Back Covers
                </span>
                <span className="text-gray-200">iPhone 15 Pro Back Covers</span>
                <span className="text-gray-200">
                  iPhone 15 Plus Back Covers
                </span>
                <span className="text-gray-200">iPhone 15 Back Covers</span>
                <span className="text-gray-200">
                  iPhone 14 Pro Max Back Covers
                </span>
                <span className="text-gray-200">iPhone 14 Pro Back Covers</span>
                <span className="text-gray-200">
                  iPhone 14 Plus Back Covers
                </span>
                <span className="text-gray-200">iPhone 14 Back Covers</span>
                <span className="text-gray-200">
                  iPhone 13 Pro Max Back Covers
                </span>
                <span className="text-gray-200">iPhone 13 Pro Back Covers</span>
                <span className="text-gray-200">
                  iPhone 13 Plus Back Covers
                </span>
                <span className="text-gray-200">iPhone 13 Back Covers</span>
                <span className="text-gray-200">Realme</span>
                <span className="text-gray-200">Samsung</span>
                <span className="text-gray-200">Xiaomi</span>
                <span className="text-gray-200">Oneplus</span>
                <span className="text-gray-200">Vivo</span>
                <span className="text-gray-200">Oppo</span>
                <span className="text-gray-200">Poco</span>
              </p>
            </div>
            <div className="b2d4 mt-10 flex mt-5 flex-wrap 2xl:flex-col space-y-6 space-x-5">
              <h1 className="uppercase text-xl text-blue-300">Fanbook</h1>
              <h1 className="uppercase text-xl text-blue-300">Offers</h1>
              <h1 className="uppercase text-xl text-blue-300">Sitemap</h1>
            </div>
          </div>
          <div className={visibleExtra ? "block" : "hidden"}>
            <p className="text-white mt-20 text-xl">
              BEWAKOOF® THE NEW AGE ONLINE SHOPPING EXPERIENCE.
              <br />
              Founded in 2012, Bewakoof® is a lifestyle fashion brand that makes
              creative, distinctive fashion for the trendy, contemporary Indian.
              Bewakoof® was created on the principle of creating impact through
              innovation, honesty and thoughtfulness.
            </p>
            <p className="text-white mt-7 text-xl">
              With a team of 400 members, and 2mn products sold till date. We
              like to experiment freely, which allows us to balance creativity
              and relatability, and our innovative designs. Our range of
              products is always fresh and up-to-date, and we clock sales of
              over 1 lakh products a month. Our innovation focus extends to our
              operations as well. We are vertically integrated, manufacture our
              own products, and cut out the middleman wherever possible. This
              direct-to-consumer model allows us to create high-quality fashion
              at affordable prices. A thoughtful brand, we actively attempt to
              minimize our environmental footprint and maximize our social
              impact. These efforts are integrated right into our day-to-day
              operations, from rainwater harvesting to paper packaging to
              employee benefits. To create an accessible, affordable and
              thoughtful experience of online shopping in India.
            </p>
            <p className="text-white mt-7 text-xl">
              Online Shopping at Bewakoof® is hassle-free, convenient and
              super-exciting!
              <br />
              Online Shopping has always been a fun and exciting task for most
              and more so when the shopping mall is none other than your own
              house. We have all had days when we have planned trips to the
              clothing store in advance, dreaming about what we would buy once
              we get there. Now we wouldnt think twice before indulging in some
              online shopping. Well, cut to todays time and age, you can do all
              this from the comfort of your home while enjoying many online
              shopping offers, right from amazing deals and discounts to one of
              the most robust user interface amongst most online shopping sites
              in India, with many shopping filters to make your shopping
              experience truly hassle free. This in our own words is what we
              call Bewakoof.com.
            </p>
            <p className="text-white mt-7 text-xl">
              Bewakoof®, THE place to be when it comes to the coolest in online
              fashion, offers you fine, high-quality merchandise go ahead and
              indulge in a bit of online shopping for men and womens fashion. So
              browse through the exciting categories we have on offer from mens
              fashion to basic mens clothing as well as wide variety in
              womenswear and womens clothes to the amazing range of accessories,
              fill up your carts and get fast home delivery for all orders. All
              of this topped with our exclusive online shopping offers makes for
              an exciting, irresistible and uber cool combo! You can even gift
              some to your near and dear ones while being absolutely certain
              that it will put a smile on their faces.
            </p>
            <p className="text-white mt-7 text-xl">
              Bewakoof.com: the quirkiest online shopping sites of all!
              <br />
              Online fashion is definitely more accessible with Bewakoof.com.
              Explore the latest collections in Marvel t-shirts including
              avengers t-shirts and captain America t-shirts in{" "}
              <span className="text-blue-300">official merchandise</span>. Apart
              from these, quirkiest of T-shirts that you wont find on any online
              shopping sites in India are showcased at Bewakoof.com. If your
              wardrobe has been longing for a cool overhaul then bewakoof.com
              will certainly be your best bet amongst all online shopping sites.
              Also, take a tour of our bewakoof® blog to stay abreast with the
              latest runway trends and be a trendsetter among your immediate
              circles. What we wear speaks volumes of us they say. But what if
              what you wore actually spoke what your mood was! Havent we all
              wondered where we could get those quirky t-shirts and sport them
              with confidence? Sure otherwise getting them made or even buying
              them from otherwise expensive online shopping sites for clothes
              may cost you substantially but with Bewakoof.com, you will
              understand that you do not have to spend a fortune on online
              fashion to look great. Sliders, joggers, sweatshirts, bag and bag
              packs and so much more are just some of the other items you can
              grab hold of here.
            </p>
            <p className="text-white mt-7 text-xl">
              Avail of Online shopping benefits at Bewakoof.com and youll shop
              nowhere else!
              <br />
              Choose your product, get it ordered online, and we ensure that its
              delivery happens right at your doorstep anywhere in India. You
              just need to take care of the payment for the product from the
              comfort of your home, while we ensure free shipping all the time
              on almost everything with no strings attached. For any second
              thoughts after purchase, we have in place a return policy as well.
              One of the best you will find on any online shopping sites in
              India. For your online shopping experience to be safe and
              risk-free, we offer Cash On Delivery (COD) facility too. So you
              dont have to worry anymore about your hard earned money being
              stuck when you buy clothes online at bewakoof.com. Avail exciting
              online shopping offers like{" "}
              <span className="text-blue-300">designs of the day</span> and
              colour of the month when you shop with us. Make sure to use our
              easy 15-day returns policy, card or cash on delivery option and
              other customer-friendly features. A comprehensive sizing guide and
              detailed product descriptions coupled with high-resolution product
              shots will give you all the information to make the right buying
              decision. Give your wardrobe the much-needed upgrade with uber
              cool clothing head to Bewakoof.com for a great online shopping
              india experience now! Could you have asked for more?
            </p>
            <p className="text-white mt-7 text-xl">
              Dont miss out on accessories available on our multi-faceted online
              store!
              <br />
              We dont just offer you exciting options in online fashion but also
              give you amazing accessories with really cool bags and bag packs
              to choose from. Our bags and backpacks are compact, hassle-free
              and easy to stuff things in. And all of this with the swag that
              you get to carry along with it. Cool designs are what form a major
              part of our online fashion and we also ensure our accessories
              section doesnt feel left out!
            </p>
            <p className="text-white mt-7 text-xl">
              As for our accessories collection, they are also manufactured with
              impeccable quality materials. Our{" "}
              <span className="text-blue-300">mobile covers</span> are made from
              hard and durable polycarbonate, with a matte finish that will make
              for a great protection for your phone with the rough use that we
              put them through nowadays.
            </p>
            <p className="text-white mt-7 text-xl">
              Design of The Day- the coolest feature ever!
              <br />
              Who said good and cool t-shirts have to expensive? We bring newer,
              cooler and more youth oriented designs everyday. Yes! Everyday you
              get a new design to explore and buy. Although all our t-shirts are
              at an extremely affordable price, we decided to slash them down
              even further. But there is a catch. It is only for those designs
              and these exclusive prices are only valid for for a duration of 24
              hours! Designs refresh every day at 3pm and are valid only for 24
              hours. So you need to hurry and grab one fast before it ends.
              Because we believe everyone needs to have a fair chance at all of
              our fresh designs of the day.
            </p>
            <p className="text-white mt-7 text-xl">
              Bewakoof.com: the Uber Cool Online Fashion Store for the Youth
              <br />
              We, at Bewakoof.com, have all that you need to glam up your cool
              quotient. From an extensive range of plus size clothing,{" "}
              <span className="text-blue-300">casual shirts for men</span> and
              accessories for everyone, we purvey diversity of choices in online
              shopping india platform has to offer under one umbrella. The range
              of apparels like{" "}
              <span className="text-blue-300">men t-shirts</span>, joggers,
              sliders, Henley shirts, Polo t-shirts, Oxford pants and more
              provide an array of options for the online customer to create a
              ravishing ensemble from. We try to target all kinds of customers
              and cater to their needs and preferences. Communication is the key
              to our functioning. Your Bewakoof® Online fashion Shop has
              arrived! Do not miss the attractive online shopping offers
              everyday. Work your fashion with the wide range of apparels
              available only one click away! Make a statement with our best
              t-shirts online! Get more, pay less!
            </p>
            <p className="text-white mt-7 text-xl mb-40">
              OUR PHILOSOPHY
              <br />
              We believe in creating the kind of fashion, that makes you stand
              out as they are in line with the latest local and global trends of
              the industry, but also at the same time offer value for money
              functionality, with quality materials and comfortable and
              flattering prints. We try to look into the psyche of our
              customers, and try to get inspired by the conversations and
              experiences around us while creating our graphics, to ensure that
              they are relatable. We believe in constant and consistent
              innovation to ensure that our fans get nothing short of the bets
              at affordable rates! While most people do not know, we do not
              outsource the manufacturing of our products, everything from the
              conception of the designs to the manufacture and the styling that
              you see on the photographs of the banners and product pages of our
              website all happen in house! We go from yarn to product and since
              we 're vertically integrated and bring fashion from us directly to
              your doorstep without any middlemen that also further ensures
              reliability because for us it is not just about the money but
              about building the trust and credibility in our fans about our
              brand. We also make sure to decrease the impact on environment and
              are building initiatives that will help us with the same, for now
              by optimizing our processes to use only as much as we need from
              nature, rain water harvesting and recycling the water from our RO
              water facility, because we believe that the spirit of Bewakoof® is
              about creating an impact by breaking conventions and having a
              different perspective!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterCom;
