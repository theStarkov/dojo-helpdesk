"use client";

import img from "../assets/images/img3.jpg";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "./Loading";

export default function Registration() {
  const goBack = () => router(-1);
  const [inputs, setInputs] = useState({});
  const [submitVal, setSubmitVal] = useState(false);
  const [search, setSearch] = useState("");
  const [fullist, setFullist] = useState("default");
  const [firstVal, setFirstVal] = useState("Empty");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearch(e.target.value); //set keyboard strokes to the search state
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // const handleRegister = async()=>{

  //     setLoading(true)
  //      await axios.get('https://adwh00backends-f6ee5dd78172.herokuapp.com/admin/all')
  //          .then((res)=>{
  //              (res.status === 200) ? setLoading(false) : setLoading(true)
  //              setResults([...(res.data)])
  //          })

  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitVal(true);

    try {
      const res = await axios.post(
        //"https://alwh-backend-edf2b91949e5.herokuapp.com/user/register",
        "/api/register",
        {
          inputs,
        }
      );
      console.log(res);

      if (res.status === 201) {
        showAlert("success", res.data.message);
        setSubmitVal(false);
      } else if (res.status === 200) {
        showAlert("warning", res.data.message);
        setSubmitVal(false);
      }

      setInputs({
        ...{},
        fullName: "",
        phoneNumber: "",
        email: "",
        gender: "",
        noticeOfEvent: "",
        firstTime: "",
        arrivalDay: "",
      });
    } catch (error) {
      setSubmitVal(false);
      showAlert("error", error.message);
    }
  };

  const showAlert = (type, message, route) => {
    Swal.fire({ icon: type, text: message, confirmButtonColor: "Blue" });
  };

  return (
    <div className="h-screen w-screen">
      <div className="grid lg:grid-cols-2 h-full">
        <div className="flex flex-col space-y-8 p-10">
          <div className="flex items-center space-x-8 font-semibold text-[#050036]">
            <Link href="/">
              <ChevronLeftIcon className="h-8 w-auto bg-[#050036] p-2 text-white cursor-pointer rounded-full" />
            </Link>
            <p>Register for next edition</p>
          </div>
          <form id="forms" className="space-y-5" onSubmit={handleSubmit}>
            <p className="text-[#050036]">Please fill the form to continue</p>
            <div className="grid gap-5 lg:w-3/4">
              <div className="flex flex-col space-y-1">
                <label htmlFor="full_name">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded outline-none focus:border-green-500 transition duration-200"
                  value={inputs.fullName || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="full_name">Email Address</label>
                <input
                  name="email"
                  type="email"
                  className="px-4 py-2 border border-gray-300 rounded outline-none focus:border-green-500 transition duration-200"
                  value={inputs.email || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="full_name">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded outline-none focus:border-green-500 transition duration-200"
                  value={inputs.phoneNumber || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="full_name">Gender</label>
                <select
                  value={inputs.gender}
                  className="px-4 py-2 border border-gray-300 rounded outline-none focus:border-green-500 transition duration-200"
                  name="gender"
                  onChange={handleChange}
                  required
                >
                  <option value={"default"}>Please Select</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="full_name">
                  How did you hear of A Day with Him
                </label>
                <select
                  value={inputs.noticeOfEvent}
                  className="px-4 py-2 border border-gray-300 rounded outline-none focus:border-green-500 transition duration-200"
                  name="noticeOfEvent"
                  required
                  onChange={handleChange}
                >
                  <option value={"default"}>Please Select</option>
                  <option value="zoom">Zoom</option>
                  <option value="rev">The revelation of Jesus</option>
                  <option value="family">Family & Friends</option>
                  <option value="others" id="others">
                    Others
                  </option>
                </select>
              </div>

              <>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="full_name">This is my first time</label>
                  <select
                    value={inputs.firstTime}
                    className="px-4 py-2 border border-gray-300 rounded outline-none focus:border-green-500 transition duration-200"
                    name="firstTime"
                    required
                    onChange={handleChange}
                  >
                    <option value={"default"}>Please Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="full_name">When will you arrive?</label>
                  <select
                    value={inputs.arrivalDay}
                    className="px-4 py-2 border border-gray-300 rounded outline-none focus:border-green-500 transition duration-200"
                    name="arrivalDay"
                    required
                    onChange={handleChange}
                  >
                    <option value={"default"}>Please Select</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                </div>
              </>
            </div>

            <div className="py-3">
              <button
                type="submit"
                className="bg-[#050036] rounded text-white py-3 w-full lg:w-3/4"
              >
                {submitVal ? <Loading /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <div className="h-full w-full relative order-first lg:order-last">
          <Image src={img} className="object-cover h-full w-full" alt="" />
          <div className="absolute top-0 h-full w-full bg-[#050036] opacity-60"></div>
        </div>
      </div>
    </div>
  );
}
