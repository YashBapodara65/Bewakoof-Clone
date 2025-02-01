import React from 'react'
import NavbarCom from '../components/NavbarCom'

function SingleProductPage() {
  return (
    <>
        <NavbarCom/>

        <section className='w-screen grid grid-cols-3'>
            <div className='b1 w-full'>
                <img src="../../public/arrival5.jpg" className='w-full' alt="" />
            </div>
            <div className="b2">
                <h1 className='text-xl'>Bewakoof</h1>
                <p className='text-lg'>Women's Orange Emotional Baggage Graphic Printed Oversized Plus Size T-shirt</p>
            </div>
        </section>

    </>
  )
}

export default SingleProductPage
