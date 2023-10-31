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
import { IoMdChatboxes, IoStatsChartSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { FaCog } from "react-icons/fa";
import foodbot from "./images/TG3A11QGL-U05URBGFUMA-68f8c4454f28-192-removebg-preview.png";
import "./App.css";

function App() {
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
        <div className="top-40 text-slate-700 bg-[#fff] absolute w-[85%] left-20 h-[60rem] rounded-2xl overflow-y-hidden">
          <div className="absolute bg-[#ddd] h-[100%] overflow-hidden w-[25%] rounded-tl-2xl">
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
              <span className="-top-2 left-20 relative">Settings</span>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 relative top-16 w-[90%] h-[10rem] left-4 rounded-2xl">
              <h2 className="text-white font-medium text-2xl pl-5 pt-6">
                Auto Generate Admission Report
              </h2>
              <BsArrowRight className="h-[25px] w-[50px] relative top-7 text-white left-2" />
              <CgMenuGridO className="float-right h-[30px] w-[30px] text-white right-5 -top-0 relative" />
            </div>
            <div className="top-24 left-10 relative">
              <h2 className="text-base" style={{ fontFamily: "Agbalumo" }}>Owlio School Admission Admin</h2>
              <div className="text-sm opacity-70">
                Made with <span className="text-red-500">&hearts;</span> by
                Dieudonne
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
