import React, { useState, useEffect, useRef } from "react";
import NavbarCom from "../components/NavbarCom";
import SignupPhoto from "../../public/sigup.jpg";
import Swal from "sweetalert2";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    gender: "", 
  });

  const [validForm, setValidForm] = useState({
    fullname: true,
    email: true,
    gender: true,
  });

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name == "fullname" && value == "") {
      setValidForm({ ...validForm, [name]: false });
    }

    const emlRegex = /^[\w.+-]+@[\w.-]+\.[\w.-]+$/;

    if (emlRegex.test(value) == false && name == "email") {
      setValidForm({ ...validForm, [name]: false });
    }

    if (name == "gender" && (value == "" || value === undefined)) {
      setValidForm({ ...validForm, [name]: false });
    }
  };

  // console.log(validForm);
  console.log(formData);

  const handleFocus = (e) => {
    const { name } = e.target;

    setValidForm({ ...validForm, [name]: true });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // if(name == "gender")
    // {
    //   setFormData({ ...validForm, [name]: value !== "" });
    // }
  };

  const dataRef = useRef({});
  const [inputObj, setInputObj] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: ''
  });  
  const [otp, setOtp] = useState(null);
  const [otpValid, setOtpValid] = useState([false, false, false, false]);

  const handleOtpChange = (index, event) => {
    const { name, value } = event.target;
    setInputObj({ ...inputObj, [name]: value });

    if (event.target.value.length === 1) {
      otpValid[index] = true;
    } else {
      otpValid[index] = false;
    }

    if (event.target.value.length === 1 && dataRef.current[index + 1]) {
      dataRef.current[index + 1].focus();
    }

    // console.log(otpValid);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    setInputObj({
      input1: dataRef.current[0].value,
      input2: dataRef.current[1].value,
      input3: dataRef.current[2].value,
      input4: dataRef.current[3].value,
    });

    const checkOtp = Object.values(inputObj).join("");
    // console.log("user otp :- ",checkOtp);
    // console.log("system otp :- ",otp);

    const newFull = formData.fullname != "";
    const newEml = /^[\w.+-]+@[\w.-]+\.[\w.-]+$/.test(formData.email);
    const newGen = formData.gender != "";

    setValidForm({
      fullname: newFull,
    email: newEml,
    gender: newGen,
    })

    if(newFull && newEml && newGen)
    {
        // console.log("success");
        if (checkOtp === otp) {

          axios.post(`http://localhost:3000/users`,formData)
          .then((res)=>{
            console.log(res);
          })
          .catch((err)=>{
            console.log(err);
          })

          Swal.fire({
            title: "OTP Verified Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          setInputObj({
            input1: "",
            input2: "",
            input3: "",
            input4: "",
          }); 
        } else {
          Swal.fire({
            title: "Please enter the valid OTP",
            icon: "error",
            confirmButtonText: "Retry",
          });
          setInputObj({
            input1: "",
            input2: "",
            input3: "",
            input4: "",
          });
        }    
    }

  };

  const [resend, setResend] = useState(true);
  const [time, setTime] = useState(30);

  // Timer Logic
  useEffect(() => {
    let timer;
    if (!resend && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 1) {
            setResend(true);
            clearInterval(timer);
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  
    return () => clearInterval(timer); // Clean up interval on component unmount
  }, [resend, time]);
  

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
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    });

    setTime(30);
    setResend(false);
  };

  // console.log(formData);

  return (
    <div>
      <div className="hidden xl:block">
        <NavbarCom />
      </div>
      <section className="lg:grid grid-cols-2">
        <div className="lg:w-3/4">
          <img src={SignupPhoto} className="w-full" alt="" />
        </div>
        <div className="col-span-1 py-15 px-20 flex items-start flex-col justify-center">
          <h1 className="text-3xl">Just few more details</h1>
          <p className="text-lg mb-10 mt-2 text-gray-500">
            We need few more details to personalize your experience.
          </p>
          <form
            className="flex flex-col justify-center items-start w-full"
            action=""
            onSubmit={handleOtpSubmit}
          >
            <div className="flex flex-col mt-0 w-full gap-2">
              <label htmlFor="" className="ms-2 text-lg text-gray-500">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                onBlur={handleBlur}
                onFocus={handleFocus}
                onChange={handleChange}
                className="border-2 w-full md:w-[80%] border-gray-300 outline-none text-lg px-4 rounded-lg h-12"
                placeholder="Ex - Jhon Sharma"
              />
              <span className="text-red-500 ms-2">
                {validForm.fullname ? "" : "Please enter your fullname"}
              </span>
            </div>
            <div className="flex flex-col mt-5 w-full gap-2">
              <label htmlFor="" className="ms-2 text-lg text-gray-500">
                Mobile Number
              </label>
              <input
                type="text"
                disabled={true}
                name="mobno"
                className="border-2 w-full md:w-[80%] border-gray-300 outline-none text-lg px-4 rounded-lg h-12"
                placeholder=""
              />
            </div>
            <div className="flex flex-col mt-5 w-full gap-2">
              <label htmlFor="" className="ms-2 text-lg text-gray-500">
                Email ID
              </label>
              <input
                type="text"
                name="email"
                onBlur={handleBlur}
                onFocus={handleFocus}
                onChange={handleChange}
                className="border-2 w-full md:w-[80%] border-gray-300 outline-none text-lg px-4 rounded-lg h-12"
                placeholder="Ex - yourmailid@gmail.com"
              />
              <span className="text-red-500 ms-2">
                {validForm.email ? "" : "Please enter your email ID"}
              </span>
            </div>
            <div className="mt-5">
  <label htmlFor="" className="ms-2 text-lg text-gray-500">
    Gender
  </label>
  <div className="flex gap-5 -ms-4 mt-2 items-center">
    <div className="flex gap-2">
      <input
        type="radio"
        value={"Male"}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        name="gender"
        id="g_male"
        className="opacity-0"
      />
      <label
        htmlFor="g_male"
        className={`cursor-pointer py-1 px-4 border-2 rounded-sm text-gray-700 focus:ring-2 focus:ring-blue-200 transition-colors ${
          formData.gender === "Male" ? "border-blue-400 bg-blue-50 text-blue-500" : "border-gray-300"
        }`}
      >
        Male
      </label>
    </div>
    <div className="flex gap-2">
      <input
        type="radio"
        value={"Female"}
        name="gender"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        id="g_female"
        className="opacity-0"
      />
      <label
        htmlFor="g_female"
        className={`cursor-pointer py-1 px-4 border-2 rounded-sm text-gray-700 focus:ring-2 focus:ring-blue-200 transition-colors ${
          formData.gender === "Female" ? "border-blue-400 bg-blue-50 text-blue-500" : "border-gray-300"
        }`}
      >
        Female
      </label>
    </div>
    <div className="flex gap-2">
      <input
        type="radio"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={"Other"}
        name="gender"
        id="g_other"
        className="opacity-0"
      />
      <label
        htmlFor="g_other"
        className={`cursor-pointer py-1 px-4 border-2 rounded-sm text-gray-700 focus:ring-2 focus:ring-blue-200 transition-colors ${
          formData.gender === "Other" ? "border-blue-400 bg-blue-50 text-blue-500" : "border-gray-300"
        }`}
      >
        Other
      </label>
    </div>
  </div>
  <span className="text-red-500 ms-2">
    {validForm.gender ? "" : "Please select a gender"}
  </span>
</div>

            <div className="mt-5">
              <label htmlFor="" className="ms-2 text-lg text-gray-500">
                OTP
              </label>
              <div className="flex ms-2 mt-4 gap-5">
                <input
                  type="text"
                  value={inputObj.input1}
                  name="input1"
                  maxLength={1}
                  ref={(el) => (dataRef.current[0] = el)}
                  onChange={(e) => handleOtpChange(0, e)}
                  className="border-1 text-center text-2xl outline-none border-gray-400 h-16 w-12"
                />
                <input
                  type="text"
                  value={inputObj.input2}
                  name="input2"
                  maxLength={1}
                  ref={(el) => (dataRef.current[1] = el)}
                  onChange={(e) => handleOtpChange(1, e)}
                  className="border-1 text-center text-2xl outline-none border-gray-400 h-16 w-12"
                />
                <input
                  type="text"
                  value={inputObj.input3}
                  name="input3"
                  maxLength={1}
                  ref={(el) => (dataRef.current[2] = el)}
                  onChange={(e) => handleOtpChange(2, e)}
                  className="border-1 text-center text-2xl outline-none border-gray-400 h-16 w-12"
                />
                <input
                  type="text"
                  value={inputObj.input4}
                  name="input4"
                  maxLength={1}
                  ref={(el) => (dataRef.current[3] = el)}
                  onChange={(e) => handleOtpChange(3, e)}
                  className="border-1 text-center text-2xl outline-none border-gray-400 h-16 w-12"
                />
              </div>
              <div>
                {resend ? (
                  <p
                    className="mt-7 font-bold text-blue-700 cursor-pointer"
                    onClick={showAlert}
                  >
                    Resend OTP
                  </p>
                ) : (
                  <p className="mt-7 font-bold text-gray-600">
                    Resend in {time} sec
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={!validForm.fullname || !validForm.email || !validForm.gender || otpValid.includes(false)}
              className={`w-full mt-8 ${(!validForm.fullname || !validForm.email || !validForm.gender || otpValid.includes(false)) ? "cursor-not-allowed bg-gray-300" : "cursor-pointer bg-yellow-300"} text-gray-600 md:w-[80%] py-3 rounded-lg uppercase`}
            >
              Continue
            </button>
          </form>
        </div>
      </section>
      <div className="container mt-5"></div>
    </div>
  );
}

export default Signup;
