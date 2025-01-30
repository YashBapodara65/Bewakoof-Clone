import React, { useEffect, useRef, useState } from "react";
import NavbarCom from "../components/NavbarCom";
import LoginPhoto from "../../public/login.jpg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();
  const dataRef = useRef({});
  const [inputObj, setInputObj] = useState([]);
  const [otp, setOtp] = useState(null);
  const [otpValid, setOtpValid] = useState([false,false,false,false]);

  const handleOtpChange = (index, event) => {

    const {name, value} = event.target;
    setInputObj({...inputObj,[name] : value});

    if(event.target.value.length === 1)
    {
        otpValid[index] = true;
    }
    else
    {
      otpValid[index] = false;
    }

    if(event.target.value.length === 1 && dataRef.current[index+1])
      {
        dataRef.current[index+1].focus();
      }
      
      console.log(otpValid);
  
  }

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    setInputObj({
      input1 : dataRef.current[0].value,
      input2 : dataRef.current[1].value,
      input3 : dataRef.current[2].value,
      input4 : dataRef.current[3].value
    })

    const checkOtp = Object.values(inputObj).join('');
    // console.log("user otp :- ",checkOtp);
    // console.log("system otp :- ",otp);

    if(checkOtp === otp)
    {
      Swal.fire({
        title: "OTP Verified Successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      setInputObj({
        input1 : "",
        input2 : "",
        input3 : "",
        input4 : ""
      })
      navigate("/");
    }
    else
    {
      Swal.fire({
        title: "Please enter the valid OTP",
        icon: "error",
        confirmButtonText: "Retry",
      });
      setInputObj({
        input1 : "",
        input2 : "",
        input3 : "",
        input4 : ""
      })
    }

  }

  const [mobno, setMobNo] = useState("");

  const [resend, setResend] = useState(true);
  const [time, setTime] = useState(30);

    // Timer Logic
    useEffect(() => {
      let timer;
      if (!resend && time > 0) {
        timer = setInterval(() => {
          setTime((prevTime) => {
            if (prevTime === 1) {
              clearInterval(timer);
              setResend(true);
            }
            return prevTime - 1;
          });
        }, 1000);
      }
      return () => clearInterval(timer);
    }, [resend, time]);

  const [validMob, setValidMob] = useState(true);
  const [status, setStatus] = useState(false);

  const handleInput = (e) => {
    const {name,value } = e.target;
    setMobNo(value);

    if (isNaN(value) && name == "mobno") {
      setValidMob(false);
    } else if (value.length == 10) {
      setValidMob(true);
    } else {
      setValidMob(null);
    }
  };

  const showAlert = () => {
    const myOTP = Math.floor(Math.random() * 9000 + 1000);
    // alert(myOTP);

    setOtp(myOTP.toString());

    Swal.fire({
      title: `Your OTP :- ${myOTP}`,
      // text: 'This is a SweetAlert notification',
      icon: "success",
      confirmButtonText: "OK",
    });

    setInputObj({
      input1 : "",
      input2 : "",
      input3 : "",
      input4 : ""
    })

    setTime(30);
    setResend(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNaN(mobno)) {
      setValidMob(false);
    } else if (mobno.length == 10) {

      axios.get(`http://localhost:3000/users?mobno=${mobno}`)
      .then((res)=>{
        if(res.length > 0)
        {
          setValidMob(true);
          showAlert();
          setStatus(true);
        }
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
    } else {
      setValidMob(null);
    }
  };

  // console.log(mobno);
  // console.log(validMob);
  return (
    <div>
      <div className="hidden xl:block">
        <NavbarCom />
      </div>
      <section className="lg:grid grid-cols-2">
        <div className="lg:w-3/4">
          <img src={LoginPhoto} className="w-full" alt="" />
        </div>
        {
          !status ?
          <div className="col-span-1 py-15 px-20 flex items-start flex-col justify-center">
          <h1 className="text-3xl">Login / Signup</h1>
          <p className="text-lg mb-15 mt-2 text-gray-500">Join us now to be a part of Bewakoof&reg; family.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-start w-full"
            action=""
          >
            <div className="flex flex-col mt-5 w-full gap-2">
              <label htmlFor="" className="ms-2 text-lg text-gray-500">
                Mobile Number
              </label>
              <input
                maxLength={10}
                value={mobno}
                type="text"
                name="mobno"
                onInput={handleInput}
                className="border-2 w-full md:w-[80%] border-gray-300 outline-none border-black text-lg px-4 rounded-lg h-12"
                placeholder="Enter Mobile Number"
              />
              <span className="text-red-500 ms-2">
                {validMob == true
                  ? ""
                  : validMob == null
                  ? "Please enter 10 digits"
                  : "Please enter only 10 digit number"}
              </span>
            </div>
            <button disabled={(mobno.length == 10 && !isNaN(mobno)) ? false : true} className={`w-full mt-8 ${(mobno.length == 10 && !isNaN(mobno)) ? "cursor-pointer bg-yellow-300 text" : "cursor-not-allowed bg-gray-300 text-gray-600"} md:w-[80%] py-3 rounded-lg uppercase`}>
              Continue
            </button>
          </form>
          <div className="w-full md:w-[80%] mt-7 flex items-center justify-center gap-5">
            <hr className="w-full" />
            <p>OR</p>
            <hr className="w-full" />
          </div>
          <div className="w-full md:w-[80%] flex justify-between mt-5 gap-5">
            <button className="text-lg cursor-pointer border-2 w-full py-2 rounded-lg md:w-[45%] border-gray-200">
              Google
            </button>
            <button className="text-lg cursor-pointer border-2 w-full py-2 rounded-lg md:w-[45%] border-gray-200">
              Facebook
            </button>
          </div>
        </div>
        :
        <div className="flex flex-col justify-center px-20 items-start">
          <h1 className="text-3xl">OTP Verification</h1>
          <p className="text-lg mt-10">We have sent Verification code to</p>
          <div className="flex items-center gap-2">
          <p className="text-lg font-bold">+91 {mobno}</p>
          <p className="text-blue-700 font-bold underline" onClick={()=>setStatus(false)}>Edit</p>
          </div>
          <form action="" onSubmit={handleOtpSubmit} className="flex w-full flex-col mt-5">
            <div className="flex gap-5">
            <input type="text" value={inputObj.input1} name="input1" maxLength={1} ref={(el)=>(dataRef.current[0]=el)} onChange={(e)=>handleOtpChange(0,e)} className="border-1 text-center text-2xl outline-none border-gray-400 h-16 w-12" />
            <input type="text" value={inputObj.input2} name="input2" maxLength={1} ref={(el)=>(dataRef.current[1]=el)} onChange={(e)=>handleOtpChange(1,e)} className="border-1 text-center text-2xl outline-none border-gray-400 h-16 w-12" />
            <input type="text" value={inputObj.input3} name="input3" maxLength={1} ref={(el)=>(dataRef.current[2]=el)} onChange={(e)=>handleOtpChange(2,e)} className="border-1 text-center text-2xl outline-none border-gray-400 h-16 w-12" />
            <input type="text" value={inputObj.input4} name="input4" maxLength={1} ref={(el)=>(dataRef.current[3]=el)} onChange={(e)=>handleOtpChange(3,e)} className="border-1 text-center text-2xl outline-none border-gray-400 h-16 w-12" />
            </div>
            <div>
              {
                resend ? <p className="mt-7 font-bold text-blue-700 cursor-pointer" onClick={showAlert}>Resend OTP</p>
                : <p className="mt-7 font-bold text-gray-600">Resend in {time} sec</p>
              }
            </div>
            <button disabled={(otpValid[0] && otpValid[1] && otpValid[2] && otpValid[3]) ? false : true} className={`w-full mt-8 ${(otpValid[0] && otpValid[1] && otpValid[2] && otpValid[3]) ? "cursor-pointer bg-yellow-300 text" : "cursor-not-allowed bg-gray-300 text-gray-600"} md:w-[80%] py-3 rounded-lg uppercase`}>
              Continue
            </button>
          </form>
        </div> 
        }
      </section>
    </div>
  );
}

export default Login;