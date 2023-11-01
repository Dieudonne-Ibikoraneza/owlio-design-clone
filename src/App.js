import logo from "./images/owlio_logo-removebg-preview.png";
import { FiMenu, FiUsers } from "react-icons/fi";
import {
  AiOutlineRight,
  AiOutlineDown,
  AiFillDashboard,
  AiFillWechat,
} from "react-icons/ai";
import { FcGraduationCap } from "react-icons/fc";
import { MdEmojiEvents } from "react-icons/md";
import { IoStatsChartSharp, IoNotifications } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { FaCog, FaSearch, FaShopify } from "react-icons/fa";
import foodbot from "./images/TG3A11QGL-U05URBGFUMA-68f8c4454f28-192-removebg-preview.png";
import "./App.css";
import { useState } from "react";
import { BiSolidVideos, BiCaretDown, BiUserPlus } from "react-icons/bi";
import { PiFolderSimpleFill } from "react-icons/pi";
import superAdmin from "./images/e911fecc373a14ea42da601a8ef20153.jpeg";

function App() {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <div className="bg-[#e6ecee] overflow-x-hidden h-[100rem]">
        <header className="text-slate-700">
          <div className="m-auto">
            <img
              src={logo}
              alt="OWLIO Logo"
              className="ml-[35%] float-left rounded-full"
            />
            <div>
              <h1
                className="m-auto top-5 relative left-2 text-5xl"
                style={{ fontFamily: "Leckerli One" }}
              >
                OWLIO
              </h1>
              <span className="top-5 relative left-2 text-lg">
                School Admission Admin
              </span>
            </div>
          </div>
        </header>
        <div className="top-40 text-slate-700 bg-[#fff] absolute w-[85%] left-20 h-[60rem] shadow-lg shadow-indigo-500/50 rounded-2xl overflow-y-hidden">
          <div className="absolute bg-gradient-to-t from-[#ddd] to-[#eee] h-[100%] overflow-hidden w-[25%] rounded-tl-2xl ">
            <img
              src={logo}
              alt="OWLIO logo"
              className="w-[60px] h-[60px] relative float-left top-3 left-8 rounded-full"
            />
            <h1
              style={{ fontFamily: "Leckerli One" }}
              className="relative top-5 left-6 text-2xl"
            >
              OWLIO
            </h1>
            <FiMenu className="float-right right-3 absolute w-[30px] h-[30px] top-5" />
            <h3 className="relative uppercase top-12 -left-3 font-bold">
              Main menu
            </h3>
            <div className="h-14 bg-transparent w-[90%] top-12 relative left-4 rounded-2xl">
              <AiFillDashboard className="w-[25px] float-left h-[25px] top-4 -left-8 relative" />
              <span className="top-4 -left-5 relative">Dashboard</span>
            </div>
            <div className="h-14 bg-transparent w-[90%] top-12 relative left-4 rounded-2xl">
              <AiFillWechat className="w-[25px] h-[25px] top-4 mt-2 relative left-7" />
              <span className="-top-2 left-16 relative">Chats</span>
            </div>
            <div className="h-14 bg-transparent w-[90%] top-12 relative left-4 rounded-2xl">
              <FiUsers className="w-[25px] h-[25px] top-4 mt-2 relative left-7" />
              <span className="-top-2 left-16 relative">Students</span>
              <AiOutlineDown className="absolute opacity-70 float-right right-4 top-[1.4rem]" />
            </div>
            <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 w-[90%] top-12 relative left-4 rounded-2xl">
              <FcGraduationCap className="w-[25px] h-[25px] top-4 mt-2 relative left-7" />
              <span className="top-[-0.5rem] left-16 relative">Teachers</span>
              <AiOutlineRight className="absolute opacity-70 float-right right-4 top-[1.4rem]" />
            </div>
            <div className="h-14 bg-transparent w-[90%] top-12 relative left-4 rounded-2xl">
              <MdEmojiEvents className="w-[25px] h-[25px] top-4 mt-2 relative left-7" />
              <span className="-top-2 left-16 relative">Events</span>
            </div>
            <div className="h-14 bg-transparent w-[90%] top-14 relative left-4 rounded-2xl">
              <img
                src={foodbot}
                alt="Food Image from FoodBot"
                className="h-[30px] opacity-70 w-[30px] relative top-4 left-7"
              />
              <span className="-top-3 left-16 relative">Food</span>
              <AiOutlineRight className="absolute opacity-70 float-right right-4 top-[1.4rem]" />
            </div>
            <div className="h-14 bg-transparent w-[90%] top-14 relative left-4 rounded-2xl">
              <IoStatsChartSharp className="w-[25px] h-[25px] top-3 mt-2 relative left-7" />
              <span className="-top-2 left-16 relative">Finance</span>
            </div>
            <div className="h-14 bg-transparent w-[90%] top-14 relative left-4 rounded-2xl">
              <FaCog className="w-[25px] h-[25px] top-4 mt-2 relative left-7" />
              <span className="-top-2 left-16 relative">Settings</span>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 relative top-16 w-[90%] h-[10rem] left-4 rounded-2xl">
              <h2 className="text-white font-medium text-2xl pl-5 pt-6">
                Auto Generate Admission Report
              </h2>
              <BsArrowRight className="h-[25px] w-[50px] relative top-7 text-white left-2" />
              <CgMenuGridO className="float-right h-[30px] w-[30px] text-white right-5 -top-0 relative" />
            </div>
            <div className="top-24 left-10 relative">
              <h2 className="text-base" style={{ fontFamily: "Agbalumo" }}>
                Owlio School Admission Admin
              </h2>
              <div className="text-sm opacity-70">
                Made with <span className="text-red-500">&hearts;</span> by
                Dieudonne
              </div>
            </div>
          </div>
          <header className="bg-[#eee] h-20 w-[75%] float-right flex">
            <input
              type="text"
              value={search}
              onChange={handleInputChange}
              placeholder="Search here"
              className="transform translate-y-[50%] h-10 w-[20rem] rounded-3xl outline-none border-2 border-gradient-to-r focus:outline-none focus:border-indigo-500 pl-10 left-5 relative"
            />
            <FaSearch className="absolute float-left left-[28.5%] top-[2.15rem] opacity-70" />
            <div className="bg-white flex flex-col h-10 w-10 items-center justify-center rounded-full relative left-10 top-4">
              <div className="bg-blue-700 rounded-full w-4 h-4 flex justify-center items-center -top-[7px] right-0 absolute">
                <span className="text-white text-[10px]">9+</span>
              </div>
              <IoNotifications className="w-6 h-6 opacity-70" />
            </div>
            <div className="bg-white h-10 w-10 items-center rounded-full flex flex-col ml-2 justify-center relative left-10 top-4">
              <div className="bg-blue-700 rounded-full w-4 h-4 flex justify-center items-center -top-[7px] right-0 absolute">
                <span className="text-white text-[10px]">5</span>
              </div>
              <FaShopify className="w-6 h-6 opacity-70" />
            </div>
            <div className="bg-white h-10 w-10 items-center flex ml-2 rounded-full justify-center relative left-10 top-4">
              <div className="bg-blue-700 rounded-full w-4 h-4 flex justify-center items-center -top-[7px] right-0 absolute">
                <span className="text-white text-[10px]">2</span>
              </div>
              <BiSolidVideos className="w-6 h-6 opacity-70" />
            </div>
            <div className="bg-white h-10 rounded-full w-10 flex items-center ml-2 justify-center relative left-10 top-4">
              <div className="bg-orange-500 rounded-full opacity-70 w-4 h-4 flex justify-center items-center -top-[7px] right-0 absolute">
                <span className="text-white text-[10px]">5</span>
              </div>
              <PiFolderSimpleFill className="w-6 h-6 opacity-70" />
            </div>
            <div className="flex relative bg-white h-10 w-44 top-4 left-14 rounded-3xl">
              <img
                src={superAdmin}
                alt="Lionel Messi: My Website's Super Admin"
                className="rounded-full shadow-lg shadow-white/100 h-10 w-10"
              />
              <div className="flex flex-col left-2 relative">
                <h2
                  className="w-[200%] text-lg -top-1 relative"
                  style={{ fontFamily: "agbalumo" }}
                >
                  Messi
                </h2>
                <span className="w-[200%] text-sm -top-[0.70rem] relative opacity-70">
                  Super Admin
                </span>
              </div>
              <BiCaretDown className="relative opacity-70 left-5 top-[11px]" />
            </div>
            <div className="h-10 w-20 bg-white relative left-20 top-4 rounded-3xl flex justify-center items-center">
              <span
                className="-top-[0.1rem] relative -left-2 opacity-70"
                style={{ fontFamily: "agbalumo" }}
              >
                EN
              </span>
              <BiCaretDown className="relative opacity-70 left-1 top-0" />
            </div>
          </header>
          <div className="relative h-full bg-white float-right w-[75%]">
            <div className="mt-5 ml-5">
              <h1 className="text-3xl " style={{ fontFamily: "Agbalumo" }}>
                Teachers
              </h1>
              <span style={{ fontFamily: "Poppins" }} className="text-sm">
                Navigate to the Teachers section
              </span>
              <input
                type="text"
                value={search}
                onChange={handleInputChange}
                placeholder="Search here ..."
                className="h-10 w-[16rem] rounded-3xl outline-none border-2 border-gradient-to-r focus:outline-none focus:border-indigo-500 float-right -top-5 right-80 pl-4 relative"
              />
              <FaSearch className="absolute float-right right-[39%] top-[3rem] opacity-70" />
              <div className="flex relative bg-gradient-to-r from-cyan-500 to-blue-500 h-10 w-36 -top-5 float-right -right-60 rounded-3xl">
                <div className="flex flex-col left-8 relative">
                  <h2
                    className="w-[200%] text-sm top-[0.5rem] left-2 text-white relative"
                    style={{ fontFamily: "agbalumo" }}
                  >
                    New Teacher
                  </h2>
                </div>
                <BiUserPlus className="relative w-[25px] h-[25px] opacity-70 -left-[4.5rem] text-white top-[7px]" />
              </div>
              <div className="h-10 w-32 bg-[#ddd] relative float-right shadow-lg -right-56 -top-5 rounded-3xl flex justify-center items-center">
                {/* <span
                  className="-top-[0.1rem] relative -left-2 opacity-70"
                  style={{ fontFamily: "agbalumo" }}
                >
                  Newest
                </span>
                <BiCaretDown className="relative opacity-70 left-1 top-0" /> */}
                <select className="h-10 w-32 bg-[#ddd] rounded-2xl pl-4 justify-center">
                  <option className="relative outline-none">Newest</option>
                  <option className="relative outline-none">Course</option>
                  <option className="relative outline-none">Category</option>
                  <option className="relative outline-none">Curriculum</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
