import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData"
import CoHabit from "../../assets/Cohabit Logo C 1.png"

const Navbar = () => {
  return (
    <div className="navbar bg-white fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost laptop:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className="">
                  {/* "flex min-w-max p-4" */}
                  <NavLink to={item.path} className={({ isActive }) =>
                    isActive ? 'flex min-w-max rounded-none p-2 border-b-[3px] border-[#305D96]' : 'flex rounded-none min-w-max py-2 px-2'
                  }>
                    <span className="item-title">{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <a>
          <img className="logo" src={CoHabit} alt="web Logo" />
        </a>
      </div>

      {/* displays on wide screen */}
      <div className="navbar-center hidden laptop:flex">
        <ul className="menu menu-horizontal px-1">
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className="">
                {/* "flex min-w-max p-4" */}
                <NavLink to={item.path} className={({ isActive }) =>
                  isActive ? 'flex min-w-max rounded-none font-medium bg-none hover:bg-none border-b-[3px] border-[#010886]' : 'flex rounded-none font-medium min-w-max py-2 px-3'
                }>
                  <span className="">{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>

  );
};

export default Navbar;



// {/* <main id="navbar-components" className="hidden laptop:px-[12rem] pb-2 tablet:flex laptop:flex bg-base-100 fixed z-[1] top-0 tablet:w-full laptop:w-full">
//       <div className="hidden laptop:flex smaller:hidden tablet:flex  mt-2">


//         <div className="">
//           <a>
//             <img className="logo laptop:w-[70%] ml-[3rem] mr-0" src={CoHabit} alt="web Logo" />
//           </a>
//         </div>

//         <nav tabIndex={0} className="">
//           <ul className="flex">
//             {NavbarData.map((item, index) => {
//               return (
//                 <li key={index} className="">
//                   {/* "flex min-w-max p-4" */}
//                   <NavLink to={item.path} className={({ isActive }) =>
//                     isActive ? 'flex min-w-max p-2 border-b-[3px] border-[#305D96]' : 'flex min-w-max py-2 px-2'
//                   }>
//                     <span className="item-title">{item.title}</span>
//                     <span className="item-icon">{item.icon}</span>
//                   </NavLink>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* contact button */}
//         <div className="contact-link">
//           <Link to="/contact" className=" flex">
//             <button className="btn capitalize font-notbold overflow-y-hidden laptop:py-1 ml-10 rounded-md bg-[#305D96] hover:bg-[#204476] text-slate-100 hover:text-slate-100">
//               Contact
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//               </svg>

//             </button>
//           </Link>
//         </div>
//         end of contact bt
//       </div>
//     </main > */}