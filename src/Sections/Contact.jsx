import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneVolume } from "react-icons/fa6";
import contacting from '../asseets/contact.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import contactimg from '../asseets/contact.png';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset :200,
      duration:600,
      easing : 'ease-in-sine',
    });
  },[])
  return (
    <div id='contact' className=' w-full lg:px-[120px] px-[20px] lg:pt-[150px] pt-[60px] pb-[100px] flex flex-col justify-center items-center gap-[150px] bg-gray-300 '>

    <div data-aos="zoom-in" data-aos-delay="200" className=' lg:w-[60%] w-full flex flex-col justify-center items-center gap-6  '  >
    <h1 className=' font-Lobster text-[55px] leading-[60px] text-center  ' >
      Order Preparations
    </h1>
    <div className=' bg-red-600 h-2 w-[100px] ' > </div>
    <p className=' text-[20px]  text-center mb-[20px] leading-[40px]  ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum ?</p>
    <div className=' flex justify-center items-center gap-4'>
      <FaPhoneVolume className=' fill-red-600 lg:size-10 size-7 ' />
      <h1 className=' lg:text-4xl text-3xl font-Lobster text-center '>+91 4850 2345 3453</h1>
    </div>
    </div>

    <div className=' w-full flex lg:flex-row flex-col justify-center items-start mt-[10px] lg:gap-[0px] gap-[60px]  ' >
    <div data-aos="zoom-in" data-aos-delay="400" className=' lg:w-[40%] w-full bg-white  border  text-black   lg:p-12 p-10 flex flex-col justify-center items-start gap-6 lg:h-[520px] h-fit z-20  ' >
      <h1 className=' text-[50px] font-Lobster leading-[50px]  '>Ice Cream Layer Cakes! </h1>
      <p className=' text-[20px] text-justify ' >he standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      <button className=' bg-red-600 text-white px-10 py-4 font-semibold rounded-full shadow shadow-gray-400 hover:scale-50 hover:transition-transform ' >READ MORE </button>

    </div>
    <div data-aos="zoom-in" data-aos-delay="400" className='lg:w-[80%] w-full z-10 ' >
      <img src={ contactimg} alt='contact-img' className=' lg:mt-[-190px] lg:ml-[-59px] bg-cover bg-center '  />
    </div>

    </div>

    <div className=' w-full flex lg:flex-row flex-col justify-center items-center gap-[50px] ' >
    <div data-aos="zoom-in" data-aos-delay="200" className=' lg:w-[30%] w-full flex flex-col justify-center items-start gap-5  ' >
    <h1 className=' text-[45px] font-Lobster leading-[65px] text-center ' >Contact Us</h1>
    <p className=' text-[20px] text-left ' >New,York,4140 parker Rd.Allenton,New Maxico 31102 </p>
    <h1 className=' text-[30px] text-red-600 font-Lobster '>+91 (920) (202) (2829) </h1>
    <h1 className=' text-[30px] text-red-600 font-Lobster '>company@gmail.com</h1>

    </div>

    <div data-aos="zoom-in" data-aos-delay="400" className=' lg:w-[70%] w-full bg-gray-600 lg:p-12 p-8  flex flex-col justify-center items-start gap-10 lg:h-[400px] h-fit  '>
      <h1 className=' font-Lobster text-[40px] text-white leading-[50px]  ' >Subscribe and never miss out on finds & deals delivered to your inbox.</h1>
      <form className='  flex lg:flex-row flex-col justify-center items-start gap-5 w-full  '>
        <input type='text' placeholder=' Enter your fullname' className='px-10  py-3 w-full rounded-full placeholder:text-xl placeholder:font-semibold ' />
        <button  className=' bg-red-600 text-white px-10 py-3 rounded-full font-ibold  '>SUBMIT</button>
      </form>

      {/* Social icons */}

      <div className=' flex justify-start items-center gap-6 w-full  '>
        <FaFacebook className='fill-white hover:fill-red-600 size-8  ' />
        <FaInstagram className='fill-white hover:fill-red-600 size-8  ' />
        <FaYoutube className='fill-white hover:fill-red-600 size-8  ' />
      </div>
    </div>

    </div>

    </div>
  )
}

export default Contact