import React from 'react'
import NavbarCom from "../components/NavbarCom";
import MyAccountSidebarCom from "../components/MyAccountSidebarCom";
import FooterCom from "../components/FooterCom"

function Orders() {
  return (
    <>
        <NavbarCom />
      <section className="w-full py-10 h-auto grid grid-cols-3 px-20">
        <div className="sticky top-[12%]">
        <MyAccountSidebarCom />
        </div>
        <div className="box2 w-[90%] col-span-2 flex flex-col items-center justify-center">
          <h1 className='text-2xl'>No orders placed!</h1>
          <button className='w-[70%] mt-7 text-xl py-2 rounded-lg bg-yellow-400'>Start Shopping</button>
        </div>
      </section>

    <section>
      <FooterCom visibleExtra={false} />
    </section>
    </>
  )
}

export default Orders
