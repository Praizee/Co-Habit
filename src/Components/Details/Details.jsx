import React, { useState } from "react";
import { motion } from "framer-motion";
import Bungalow01 from "../../assets/Bungalow 01.png"
import Bungalow01small from "../../assets/Bungalow01small.png"
import MobileBungalowsmall from "../../assets/MobileBungalowsmall.png"
import BathIcon from "../../assets/u_bath.svg"
import BedIcon from "../../assets/u_bed-double.svg"
import Map from "../../assets/Map.png"
import MobileMap from "../../assets/Mobile map.png"
import ProgressBar from "../../assets/Progress Bar.png"
import FourStars from "../../assets/4 stars.png"
import "./styles.css"
import HeaderBg from "../../assets/header-BG.png"
import HouseBg01 from "../../assets/HouseBg01.png"
import HouseBg02 from "../../assets/HouseBg02.png"
import Half01 from "../../assets/Half01.png"
import Half02 from "../../assets/Half02.png"
import TonyJames from "../../assets/Tony James.png"
import BasicRating from "./Rating";
import RichTextArea from "./RichTextArea";
// import MobileLines from "../../assets/Mobile lines.png"



const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};


const Details = () => {

    return (
        <section className="">
            <motion.div
                variants={animationConfiguration}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 3 }}
            >
                {/* bg-[#f8f8fd] */}

               <div className="laptop:flex w-full hidden">
                    <img src={Half01} className="" alt="" />
                    <img src={HouseBg01} className="" alt="" />
                    <img src={HouseBg02} className="" alt="" />
                    <img src={Half02} className="" alt="" />
                </div>

                <div className="laptop:absolute w-auto mt-[5rem] laptop:-mt-[10.5rem] laptop:flex laptop:mx-[8rem] laptop:w-[85%] rounded-md bg-white p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    {/* laptop:w-[65%] laptop:mx-[5rem] */}

                    {/* mobile header */}
                    <div className="laptop:hidden">
                        <span className="mx-1 grid grid-cols-2 gap-4 w-full">
                            <span className="my-3">
                                <img src={Bungalow01} className="rounded-[0.5rem] mb-4 laptop:w-[70%]" alt="" />
                                <span className="flex items-center gap-2 bg-[#FEEEE5] px-[1.25rem] py-[0.62rem] border border-[#F6513B]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                        <path d="M16.8379 4.16667C15.9545 3.28101 14.7836 2.74045 13.5365 2.64264C12.2895 2.54484 11.0485 2.89622 10.0379 3.63334C8.97762 2.8447 7.6579 2.4871 6.34451 2.63253C5.03112 2.77797 3.82161 3.41565 2.95955 4.41716C2.0975 5.41866 1.64693 6.7096 1.69858 8.03001C1.75023 9.35043 2.30026 10.6022 3.23791 11.5333L8.41291 16.7167C8.84626 17.1432 9.4299 17.3822 10.0379 17.3822C10.6459 17.3822 11.2296 17.1432 11.6629 16.7167L16.8379 11.5333C17.8109 10.5544 18.357 9.23023 18.357 7.85C18.357 6.46977 17.8109 5.14561 16.8379 4.16667ZM15.6629 10.3833L10.4879 15.5583C10.429 15.6178 10.3589 15.665 10.2817 15.6972C10.2045 15.7294 10.1216 15.746 10.0379 15.746C9.95422 15.746 9.87136 15.7294 9.79413 15.6972C9.71689 15.665 9.6468 15.6178 9.58791 15.5583L4.41291 10.3583C3.75937 9.69029 3.39342 8.79289 3.39342 7.85834C3.39342 6.92378 3.75937 6.02638 4.41291 5.35834C5.07887 4.70083 5.97705 4.33214 6.91291 4.33214C7.84876 4.33214 8.74695 4.70083 9.41291 5.35834C9.49038 5.43644 9.58255 5.49844 9.68409 5.54075C9.78564 5.58305 9.89457 5.60483 10.0046 5.60483C10.1146 5.60483 10.2235 5.58305 10.3251 5.54075C10.4266 5.49844 10.5188 5.43644 10.5962 5.35834C11.2622 4.70083 12.1604 4.33214 13.0962 4.33214C14.0321 4.33214 14.9303 4.70083 15.5962 5.35834C16.2588 6.01763 16.6367 6.91016 16.6492 7.84474C16.6617 8.77932 16.3076 9.68161 15.6629 10.3583V10.3833Z" fill="#F7513B" />
                                    </svg>
                                    <p className="text-[#F6513B] font-normal leading-[1.4rem] text-[0.975rem]">
                                        Save
                                    </p>
                                </span>
                                {/* <span className="flex mt-4 items-center gap-2 bg-[#E5F6F3] px-[1.25rem] py-[0.62rem] border border-[#010886]">
                                    <p className="text-[#010886] font-normal leading-[1.4rem] text-[0.975rem]">
                                        Add to favorites
                                    </p>
                                </span> */}
                            </span>
                            <span>
                                <span className="flex">
                                    <p className=" text-[#F6513B] text-[0.85rem] my-3 bg-[#FEECE5] p-2 rounded-[0.625rem] w-[80%] px-">
                                        Avaliable for rent
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="21" height="20" viewBox="0 0 21 20" fill="none"
                                        className="my-4 ml-2">
                                        <path d="M15.5377 11.6667C15.0454 11.6699 14.5598 11.7822 14.1161 11.9955C13.6723 12.2087 13.2812 12.5176 12.9711 12.9L8.72106 10.9417C8.92088 10.3298 8.92088 9.6702 8.72106 9.05833L12.9711 7.09999C13.4724 7.70497 14.1713 8.11339 14.9445 8.25319C15.7177 8.39299 16.5154 8.25518 17.1968 7.86408C17.8783 7.47298 18.3997 6.85372 18.669 6.11561C18.9383 5.3775 18.9383 4.56798 18.6688 3.82992C18.3994 3.09185 17.8778 2.4727 17.1963 2.08172C16.5148 1.69074 15.7171 1.55307 14.9439 1.69301C14.1708 1.83296 13.4719 2.24151 12.9707 2.84657C12.4694 3.45163 12.198 4.21431 12.2044 4.99999C12.2069 5.19852 12.2264 5.39647 12.2627 5.59166L7.86272 7.61666C7.39362 7.15798 6.79959 6.84792 6.15506 6.72535C5.51053 6.60278 4.84416 6.67313 4.23943 6.9276C3.63471 7.18207 3.11852 7.60934 2.75556 8.15588C2.39259 8.70241 2.19897 9.34391 2.19897 9.99999C2.19897 10.6561 2.39259 11.2976 2.75556 11.8441C3.11852 12.3906 3.63471 12.8179 4.23943 13.0724C4.84416 13.3269 5.51053 13.3972 6.15506 13.2746C6.79959 13.1521 7.39362 12.842 7.86272 12.3833L12.2627 14.4083C12.2264 14.6035 12.2069 14.8015 12.2044 15C12.2044 15.6593 12.3999 16.3037 12.7662 16.8519C13.1324 17.4001 13.653 17.8273 14.2621 18.0796C14.8712 18.3319 15.5414 18.3979 16.188 18.2693C16.8346 18.1407 17.4286 17.8232 17.8947 17.357C18.3609 16.8908 18.6784 16.2969 18.807 15.6503C18.9356 15.0037 18.8696 14.3335 18.6173 13.7244C18.365 13.1153 17.9378 12.5947 17.3896 12.2284C16.8415 11.8622 16.197 11.6667 15.5377 11.6667ZM15.5377 3.33333C15.8674 3.33333 16.1896 3.43108 16.4637 3.61421C16.7378 3.79735 16.9514 4.05764 17.0775 4.36219C17.2037 4.66673 17.2367 5.00184 17.1724 5.32514C17.1081 5.64845 16.9493 5.94542 16.7162 6.1785C16.4831 6.41159 16.1862 6.57033 15.8629 6.63464C15.5396 6.69894 15.2045 6.66594 14.8999 6.53979C14.5954 6.41365 14.3351 6.20003 14.1519 5.92594C13.9688 5.65186 13.8711 5.32963 13.8711 4.99999C13.8711 4.55797 14.0467 4.13404 14.3592 3.82148C14.6718 3.50892 15.0957 3.33333 15.5377 3.33333ZM5.53772 11.6667C5.20809 11.6667 4.88585 11.5689 4.61177 11.3858C4.33769 11.2026 4.12407 10.9423 3.99792 10.6378C3.87178 10.3333 3.83877 9.99815 3.90308 9.67484C3.96739 9.35154 4.12612 9.05457 4.35921 8.82148C4.5923 8.5884 4.88927 8.42966 5.21257 8.36535C5.53587 8.30104 5.87099 8.33405 6.17553 8.46019C6.48007 8.58634 6.74037 8.79996 6.92351 9.07404C7.10664 9.34812 7.20439 9.67036 7.20439 9.99999C7.20439 10.442 7.0288 10.8659 6.71623 11.1785C6.40367 11.4911 5.97975 11.6667 5.53772 11.6667ZM15.5377 16.6667C15.2081 16.6667 14.8859 16.5689 14.6118 16.3858C14.3377 16.2026 14.1241 15.9423 13.9979 15.6378C13.8718 15.3333 13.8388 14.9981 13.9031 14.6748C13.9674 14.3515 14.1261 14.0546 14.3592 13.8215C14.5923 13.5884 14.8893 13.4297 15.2126 13.3654C15.5359 13.301 15.871 13.334 16.1755 13.4602C16.4801 13.5863 16.7404 13.8 16.9235 14.074C17.1066 14.3481 17.2044 14.6704 17.2044 15C17.2044 15.442 17.0288 15.8659 16.7162 16.1785C16.4037 16.4911 15.9798 16.6667 15.5377 16.6667Z" fill="#010886" />
                                    </svg>
                                </span>
                                <p className="text-[#616A6A] font-bold text-base leading-[1.6rem] different-font">
                                    Bungalow
                                </p>
                                <p className="flex gap-2 my-3 text-[0.85rem]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 10.8C12.3956 10.8 12.7822 10.6827 13.1111 10.4629C13.44 10.2432 13.6964 9.93082 13.8478 9.56537C13.9991 9.19991 14.0387 8.79778 13.9616 8.40982C13.8844 8.02186 13.6939 7.66549 13.4142 7.38579C13.1345 7.10608 12.7781 6.9156 12.3902 6.83843C12.0022 6.76126 11.6001 6.80087 11.2346 6.95224C10.8692 7.10362 10.5568 7.35996 10.3371 7.68886C10.1173 8.01776 10 8.40444 10 8.8C10 9.33043 10.2107 9.83914 10.5858 10.2142C10.9609 10.5893 11.4696 10.8 12 10.8ZM11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L16.8 13.61C17.75 12.6605 18.397 11.4507 18.6593 10.1335C18.9216 8.81623 18.7873 7.45081 18.2735 6.20989C17.7597 4.96897 16.8894 3.90831 15.7727 3.16206C14.656 2.41581 13.3431 2.01749 12 2.01749C10.6569 2.01749 9.344 2.41581 8.22731 3.16206C7.11062 3.90831 6.24033 4.96897 5.72652 6.20989C5.2127 7.45081 5.07845 8.81623 5.34073 10.1335C5.60301 11.4507 6.25005 12.6605 7.2 13.61L11.29 17.71ZM7.23 8.34C7.29833 7.62702 7.52502 6.93829 7.89352 6.32411C8.26203 5.70994 8.76305 5.18581 9.36 4.79C10.1442 4.2751 11.0619 4.00076 12 4.00076C12.9381 4.00076 13.8558 4.2751 14.64 4.79C15.233 5.18445 15.7311 5.7054 16.0987 6.31538C16.4663 6.92537 16.6942 7.60923 16.7659 8.31779C16.8376 9.02634 16.7514 9.74199 16.5135 10.4133C16.2756 11.0845 15.8919 11.6947 15.39 12.2L12 15.59L8.61 12.2C8.10752 11.6996 7.72293 11.0935 7.48421 10.4258C7.24548 9.75807 7.15864 9.04552 7.23 8.34ZM19 20H5C4.73478 20 4.48043 20.1054 4.29289 20.2929C4.10536 20.4804 4 20.7348 4 21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22H19C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21C20 20.7348 19.8946 20.4804 19.7071 20.2929C19.5196 20.1054 19.2652 20 19 20Z" fill="#515B6F" />
                                    </svg>
                                    Lagos Mainland
                                </p>
                                <span className="flex gap-2 my-6">
                                    <img src={BedIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bed-icon" />

                                    <p className="py-1 text-[0.875rem]">
                                        2 Rooms
                                    </p>
                                </span>

                                <span className="flex gap-2 my-6">
                                    <img src={BathIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bath-icon" />

                                    <p className="py-1 text-[0.875rem]">
                                        2 Baths
                                    </p>
                                </span>

                                <p className="text-[#010886] font-bold leading-[1.8rem] mb-4 text-[1.5rem] mt-[1.5rem] ">
                                    NGN150,000
                                </p>
                            </span>


                        </span>
                    </div>
                    {/* end of mobile header */}


                    {/* wide-screen header */}
                    <div className="laptop:flex hidden">
                        <span className="my-3 mx-3">
                            <img src={Bungalow01} className="rounded-[0.5rem] laptop:w-[70%]" alt="" />
                        </span>

                        <span className="-ml-[3rem]">
                            <p className=" text-[#F6513B] my-3 bg-[#FEECE5] p-2 rounded-[0.625rem] w-[80%] px-6">
                                Avaliable for rent
                            </p>
                            <p className="text-[#616A6A] font-bold leading-[1.6rem] different-font">
                                Bungalow
                            </p>
                            <p className="flex gap-4 my-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 10.8C12.3956 10.8 12.7822 10.6827 13.1111 10.4629C13.44 10.2432 13.6964 9.93082 13.8478 9.56537C13.9991 9.19991 14.0387 8.79778 13.9616 8.40982C13.8844 8.02186 13.6939 7.66549 13.4142 7.38579C13.1345 7.10608 12.7781 6.9156 12.3902 6.83843C12.0022 6.76126 11.6001 6.80087 11.2346 6.95224C10.8692 7.10362 10.5568 7.35996 10.3371 7.68886C10.1173 8.01776 10 8.40444 10 8.8C10 9.33043 10.2107 9.83914 10.5858 10.2142C10.9609 10.5893 11.4696 10.8 12 10.8ZM11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L16.8 13.61C17.75 12.6605 18.397 11.4507 18.6593 10.1335C18.9216 8.81623 18.7873 7.45081 18.2735 6.20989C17.7597 4.96897 16.8894 3.90831 15.7727 3.16206C14.656 2.41581 13.3431 2.01749 12 2.01749C10.6569 2.01749 9.344 2.41581 8.22731 3.16206C7.11062 3.90831 6.24033 4.96897 5.72652 6.20989C5.2127 7.45081 5.07845 8.81623 5.34073 10.1335C5.60301 11.4507 6.25005 12.6605 7.2 13.61L11.29 17.71ZM7.23 8.34C7.29833 7.62702 7.52502 6.93829 7.89352 6.32411C8.26203 5.70994 8.76305 5.18581 9.36 4.79C10.1442 4.2751 11.0619 4.00076 12 4.00076C12.9381 4.00076 13.8558 4.2751 14.64 4.79C15.233 5.18445 15.7311 5.7054 16.0987 6.31538C16.4663 6.92537 16.6942 7.60923 16.7659 8.31779C16.8376 9.02634 16.7514 9.74199 16.5135 10.4133C16.2756 11.0845 15.8919 11.6947 15.39 12.2L12 15.59L8.61 12.2C8.10752 11.6996 7.72293 11.0935 7.48421 10.4258C7.24548 9.75807 7.15864 9.04552 7.23 8.34ZM19 20H5C4.73478 20 4.48043 20.1054 4.29289 20.2929C4.10536 20.4804 4 20.7348 4 21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22H19C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21C20 20.7348 19.8946 20.4804 19.7071 20.2929C19.5196 20.1054 19.2652 20 19 20Z" fill="#515B6F" />
                                </svg>

                                Lagos Mainland
                            </p>

                            <span className="flex gap-6">
                                <span className="flex gap-2 my-3">
                                    <img src={BedIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bed-icon" />

                                    <p className="py-1">
                                        2 Rooms
                                    </p>
                                </span>

                                <span className="flex gap-2 my-3">
                                    <img src={BathIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bath-icon" />

                                    <p className="py-1">
                                        2 Baths
                                    </p>
                                </span>
                            </span>

                        </span>

                        <span className="ml-[32rem]">
                            <p className="text-[#010886] font-bold leading-[1.8rem] text-[1.5rem] my-[5rem] ">
                                NGN150,000
                            </p>
                        </span>

                    </div>
                </div>


                {/* DESCRIPTION */}
                <div className="laptop:flex mt-8 mx-3 tablet:flex laptop:mt tablet:mx-6 tablet:mt-8 laptop:mt-auto laptop:mx-[8rem] mb-8 gap-[1.3rem]">
                    <div className="laptop:mx-[rem] gap- laptop:w-auto">

                        <div className="w-auto p-4 border text-[1.5rem] font-bold laptop:mt-[10rem]">

                            <h1 className="font-bold leading-[1.8rem] pb-4 text-[1.5rem]">
                                Description
                            </h1>
                            <p className="leading-[1.6rem] font-normal text-[#515B6F]">
                                Welcome to your new home! This delightful 3-bedroom house,
                                nestled in a peaceful and family-friendly neighborhood,
                                offers comfort, convenience, and a warm sense of community.
                                With its appealing curb appeal and well-maintained exterior,
                                this property is sure to capture your heart from the moment you
                                step inside.
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="w-auto p-4 border text-[1.5rem] font-bold laptop:mt-[rem]">

                            <h1 className="font-bold leading-[1.8rem] pb-4 text-[1.5rem]">
                                Key Features
                            </h1>
                            <p className="leading-[1.6rem] font-normal mb-4 text-[#515B6F]">
                                1. Spacious Living Areas: The interior boasts a generous
                                open-concept layout, creating an inviting and airy atmosphere.
                                The living room is bathed in natural light, creating a perfect
                                space for relaxation and entertainment.
                            </p>

                            <p className="leading-[1.6rem] font-normal mb-4 text-[#515B6F]">
                                2. Modern Kitchen: The well-appointed kitchen is equipped with
                                modern appliances, ample storage, and a breakfast bar, making meal
                                preparation a breeze. Whether you're an experienced cook or just enjoy
                                the occasional culinary adventure, this kitchen has everything you need.
                            </p>

                            <p className="leading-[1.6rem] font-normal mb-4 text-[#515B6F]">
                                3. Cozy Bedrooms: The three bedrooms are thoughtfully designed to
                                provide a peaceful retreat after a long day. Each room features
                                comfortable space, built-in closets, and large windows that bring
                                in plenty of natural light.
                            </p>

                            <p className="leading-[1.6rem] font-normal mb-4 text-[#515B6F]">
                                4. Updated Bathrooms: The house boasts recently renovated bathrooms,
                                featuring elegant fixtures and tasteful finishes that exude a spa-like
                                ambiance.
                            </p>

                            <p className="leading-[1.6rem] font-normal mb-6 text-[#515B6F]">
                                5. Pet-Friendly: Your four-legged friends are welcome here! The property's
                                pet-friendly policy allows for furry companions to share in the comfort of
                                your new home.
                            </p>
                        </div>

                        {/* Availability and Rental Terms */}
                        <div className="w-auto p-4 border text-[1.5rem] font-bold laptop:mt-[rem]">

                            <h1 className="font-bold leading-[1.8rem] pb-4 text-[1.5rem]">
                                Availability and Rental Terms
                            </h1>
                            <p className="leading-[1.6rem] font-normal mb-4 text-[#515B6F]">
                                1. Monthly Rent: NGN 70,000.
                            </p>

                            <p className="leading-[1.6rem] font-normal mb-4 text-[#515B6F]">
                                2. Security Deposit: One month's rent
                            </p>

                            <p className="leading-[1.6rem] font-normal mb-4 text-[#515B6F]">
                                3. Lease Duration: 12 months (flexible options available)
                            </p>

                            <p className="leading-[1.6rem] font-normal mb-4 text-[#515B6F]">
                                4. You can share apartment or co-working space with someone
                            </p>
                        </div>

                        {/* Location */}
                        <div className="w-auto p-4 border text-[1.5rem] font-bold laptop:mt-[]">

                            <h1 className="font-bold leading-[1.8rem] pb-4 text-[1.5rem]">
                                Location
                            </h1>
                            <img src={Map} className="select-none hidden laptop:block tablet:block" alt="" />
                            <img src={MobileMap} className="select-none laptop:hidden tablet:hidden block" alt="" />
                        </div>

                        {/* Rating */}
                        <div className="w-auto p-4 border text-[1.5rem] font-bold laptop:mt-[]">

                            <h1 className="font-bold leading-[1.8rem] pb-4 text-[1.5rem]">
                                Rating
                            </h1>

                            <div className="laptop:flex tablet:flex gap-2">
                                <span className="flex laptop:hidden tablet:hidden">
                                    <span className="">
                                        <h1 className=" laptop:text-center tablet:text-center mx-12 tablet:mx-0 font-medium leading-[2.4rem] pb-4 text-[2rem] text-black">
                                            4.5
                                        </h1>
                                        <img src={FourStars} className="" alt="4 stars" />
                                    </span>

                                    {/* line */}
                                    <span className="px-4">
                                        <svg width="2" height="122" viewBox="0 0 2 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="0.561523" x2="0.561523" y2="122" stroke="#515B6F" />
                                        </svg>
                                    </span>
                                </span>

                                <span className="hidden laptop:block tablet:block">
                                    <h1 className=" laptop:text-center tablet:text-center mx-12 tablet:mx-0 font-medium leading-[2.4rem] pb-4 text-[2rem] text-black">
                                        4.5
                                    </h1>
                                    <img src={FourStars} className="" alt="4 stars" />
                                </span>

                                {/* line */}
                                <span className="px-2 hidden laptop:block tablet:block">
                                    <svg width="2" height="122" viewBox="0 0 2 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.561523" x2="0.561523" y2="122" stroke="#515B6F" />
                                    </svg>
                                </span>
                                {/* end of line */}

                                {/* Progress Bars */}
                                <div className="laptop:-mt-4 tablet:-mt-4 mt-8 grid grid-cols-1 gap-6 laptop:grid-cols-2 tablet:grid-cols-2 tablet:gap-4 laptop:gap-4">
                                    <span className="bg-[#F8F8FD] p-4">
                                        <p className="pb-2">
                                            Property
                                        </p>
                                        <img src={ProgressBar} className="" alt="Progress Bar" />
                                    </span>

                                    <span className="bg-[#F8F8FD] p-4">
                                        <p className="pb-2">
                                            Very Neat
                                        </p>
                                        <img src={ProgressBar} className="" alt="Progress Bar" />
                                    </span>

                                    <span className="bg-[#F8F8FD] p-4">
                                        <p className="pb-2">
                                            Location
                                        </p>
                                        <img src={ProgressBar} className="" alt="Progress Bar" />
                                    </span>

                                    <span className="bg-[#F8F8FD] p-4">
                                        <p className="pb-2">
                                            Good Service
                                        </p>
                                        <img src={ProgressBar} className="" alt="Progress Bar" />
                                    </span>
                                </div>
                                {/* End of Progress Bars */}


                            </div>
                        </div>

                        {/* Review */}
                        <div className="w-auto p-4 border text-[1.5rem] font-bold laptop:mt-[]">

                            <h1 className="font-bold leading-[1.8rem] pb-4 text-[1.5rem]">
                                Review
                            </h1>
                            <p className="leading-[1.6rem] font-normal">
                                The house is conveniently situated in a peaceful neighborhood
                                with easy access to local amenities such as schools, parks,
                                shopping centers, and public transportation. The quiet surroundings
                                and friendly neighbors make it an excellent place to call home
                            </p>
                        </div>

                        {/* Write a Review */}
                        <div className="w-auto p-4 border text-[1.5rem] font-bold laptop:mt-[]">

                            <h1 className="font-bold leading-[1.8rem] pb-4 text-[1.5rem]">
                                Write a review
                            </h1>
                            <label htmlFor="reviews"
                                className="leading-[1.6rem] font-normal">
                                Leave review
                            </label>
                            <span className="">
                                <RichTextArea />
                            </span>

                            <span className="flex justify-between mt-2 pb-8 text-[#515B6F] font-normal">
                                <p className="">
                                    Maximum 500 characters
                                </p>
                                <p>
                                    0 / 500
                                </p>
                            </span>

                            <span className="laptop:flex justify-between">
                                <span className="">
                                    <p className="leading-[1.6rem] font-semibold mb-2">
                                        Rating
                                    </p>

                                    <BasicRating />
                                </span>

                                <span className="">
                                    <button className="btn normal-case laptop:mt-0 tablet:mt-6 mt-6 rounded-none px-[3.5rem] font-bold text-[1.125rem] py-[0.88rem] bg-[#515B6F]/[.9] h-full hover:bg-[#515B6F] text-white">
                                        Submit
                                    </button>
                                </span>
                            </span>

                        </div>

                    </div>

                    {/* right column */}
                    <div className="text-[1.5rem] mt-8 tablet:mt-0 font-bold laptop:mt-[10rem]">

                        <div className="p-2 border laptop:block tablet:block hidden">
                            <span className="flex justify-between gap-4">
                                {/* share */}
                                <span className="flex items-center gap-2 bg-[#E5F6F3] px-[1.25rem] py-[0.62rem] border border-[#010886]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                        <path d="M15.0377 11.6667C14.5454 11.6699 14.0598 11.7822 13.6161 11.9955C13.1723 12.2087 12.7812 12.5176 12.4711 12.9L8.22106 10.9417C8.42088 10.3298 8.42088 9.67021 8.22106 9.05833L12.4711 7.1C12.9724 7.70497 13.6713 8.1134 14.4445 8.2532C15.2177 8.393 16.0154 8.25519 16.6968 7.86409C17.3783 7.47298 17.8997 6.85373 18.169 6.11562C18.4383 5.37751 18.4383 4.56799 18.1688 3.82992C17.8994 3.09186 17.3778 2.4727 16.6963 2.08172C16.0148 1.69075 15.2171 1.55308 14.4439 1.69302C13.6708 1.83296 12.9719 2.24152 12.4707 2.84658C11.9694 3.45164 11.698 4.21432 11.7044 5C11.7069 5.19853 11.7264 5.39647 11.7627 5.59167L7.36272 7.61667C6.89362 7.15798 6.29959 6.84793 5.65506 6.72536C5.01053 6.60278 4.34416 6.67314 3.73943 6.92761C3.13471 7.18208 2.61852 7.60935 2.25556 8.15589C1.89259 8.70242 1.69897 9.34392 1.69897 10C1.69897 10.6561 1.89259 11.2976 2.25556 11.8441C2.61852 12.3907 3.13471 12.8179 3.73943 13.0724C4.34416 13.3269 5.01053 13.3972 5.65506 13.2746C6.29959 13.1521 6.89362 12.842 7.36272 12.3833L11.7627 14.4083C11.7264 14.6035 11.7069 14.8015 11.7044 15C11.7044 15.6593 11.8999 16.3037 12.2662 16.8519C12.6324 17.4001 13.153 17.8273 13.7621 18.0796C14.3712 18.3319 15.0414 18.3979 15.688 18.2693C16.3346 18.1407 16.9286 17.8232 17.3947 17.357C17.8609 16.8908 18.1784 16.2969 18.307 15.6503C18.4356 15.0037 18.3696 14.3335 18.1173 13.7244C17.865 13.1153 17.4378 12.5947 16.8896 12.2284C16.3415 11.8622 15.697 11.6667 15.0377 11.6667ZM15.0377 3.33333C15.3674 3.33333 15.6896 3.43108 15.9637 3.61422C16.2378 3.79735 16.4514 4.05765 16.5775 4.3622C16.7037 4.66674 16.7367 5.00185 16.6724 5.32515C16.6081 5.64845 16.4493 5.94543 16.2162 6.17851C15.9831 6.4116 15.6862 6.57033 15.3629 6.63464C15.0396 6.69895 14.7045 6.66595 14.3999 6.5398C14.0954 6.41365 13.8351 6.20003 13.6519 5.92595C13.4688 5.65187 13.3711 5.32964 13.3711 5C13.3711 4.55797 13.5467 4.13405 13.8592 3.82149C14.1718 3.50893 14.5957 3.33333 15.0377 3.33333ZM5.03772 11.6667C4.70809 11.6667 4.38585 11.5689 4.11177 11.3858C3.83769 11.2026 3.62407 10.9424 3.49792 10.6378C3.37178 10.3333 3.33877 9.99815 3.40308 9.67485C3.46739 9.35155 3.62612 9.05458 3.85921 8.82149C4.0923 8.5884 4.38927 8.42967 4.71257 8.36536C5.03587 8.30105 5.37099 8.33406 5.67553 8.4602C5.98007 8.58635 6.24037 8.79997 6.42351 9.07405C6.60664 9.34813 6.70439 9.67037 6.70439 10C6.70439 10.442 6.5288 10.866 6.21623 11.1785C5.90367 11.4911 5.47975 11.6667 5.03772 11.6667ZM15.0377 16.6667C14.7081 16.6667 14.3859 16.5689 14.1118 16.3858C13.8377 16.2026 13.6241 15.9424 13.4979 15.6378C13.3718 15.3333 13.3388 14.9982 13.4031 14.6749C13.4674 14.3515 13.6261 14.0546 13.8592 13.8215C14.0923 13.5884 14.3893 13.4297 14.7126 13.3654C15.0359 13.3011 15.371 13.3341 15.6755 13.4602C15.9801 13.5863 16.2404 13.8 16.4235 14.074C16.6066 14.3481 16.7044 14.6704 16.7044 15C16.7044 15.442 16.5288 15.866 16.2162 16.1785C15.9037 16.4911 15.4798 16.6667 15.0377 16.6667Z" fill="#010886" />
                                    </svg>
                                    <p className="text-[#010886] font-normal leading-[1.4rem] text-[0.975rem]">
                                        Share
                                    </p>
                                </span>

                                {/* save */}
                                <span className="flex items-center gap-2 bg-[#FEEEE5] px-[1.25rem] py-[0.62rem] border border-[#F6513B]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                        <path d="M16.8379 4.16667C15.9545 3.28101 14.7836 2.74045 13.5365 2.64264C12.2895 2.54484 11.0485 2.89622 10.0379 3.63334C8.97762 2.8447 7.6579 2.4871 6.34451 2.63253C5.03112 2.77797 3.82161 3.41565 2.95955 4.41716C2.0975 5.41866 1.64693 6.7096 1.69858 8.03001C1.75023 9.35043 2.30026 10.6022 3.23791 11.5333L8.41291 16.7167C8.84626 17.1432 9.4299 17.3822 10.0379 17.3822C10.6459 17.3822 11.2296 17.1432 11.6629 16.7167L16.8379 11.5333C17.8109 10.5544 18.357 9.23023 18.357 7.85C18.357 6.46977 17.8109 5.14561 16.8379 4.16667ZM15.6629 10.3833L10.4879 15.5583C10.429 15.6178 10.3589 15.665 10.2817 15.6972C10.2045 15.7294 10.1216 15.746 10.0379 15.746C9.95422 15.746 9.87136 15.7294 9.79413 15.6972C9.71689 15.665 9.6468 15.6178 9.58791 15.5583L4.41291 10.3583C3.75937 9.69029 3.39342 8.79289 3.39342 7.85834C3.39342 6.92378 3.75937 6.02638 4.41291 5.35834C5.07887 4.70083 5.97705 4.33214 6.91291 4.33214C7.84876 4.33214 8.74695 4.70083 9.41291 5.35834C9.49038 5.43644 9.58255 5.49844 9.68409 5.54075C9.78564 5.58305 9.89457 5.60483 10.0046 5.60483C10.1146 5.60483 10.2235 5.58305 10.3251 5.54075C10.4266 5.49844 10.5188 5.43644 10.5962 5.35834C11.2622 4.70083 12.1604 4.33214 13.0962 4.33214C14.0321 4.33214 14.9303 4.70083 15.5962 5.35834C16.2588 6.01763 16.6367 6.91016 16.6492 7.84474C16.6617 8.77932 16.3076 9.68161 15.6629 10.3583V10.3833Z" fill="#F7513B" />
                                    </svg>
                                    <p className="text-[#F6513B] font-normal leading-[1.4rem] text-[0.975rem]">
                                        Save
                                    </p>
                                </span>
                            </span>

                            {/* add to favourites */}
                            {/* <span className="flex mt-4 items-center gap-2 bg-[#E5F6F3] px-[1.25rem] py-[0.62rem] border border-[#010886]">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M15.5377 11.6667C15.0454 11.6699 14.5598 11.7822 14.1161 11.9955C13.6723 12.2087 13.2812 12.5176 12.9711 12.9L8.72106 10.9417C8.92088 10.3298 8.92088 9.6702 8.72106 9.05833L12.9711 7.09999C13.4724 7.70497 14.1713 8.11339 14.9445 8.25319C15.7177 8.39299 16.5154 8.25518 17.1968 7.86408C17.8783 7.47298 18.3997 6.85372 18.669 6.11561C18.9383 5.3775 18.9383 4.56798 18.6688 3.82992C18.3994 3.09185 17.8778 2.4727 17.1963 2.08172C16.5148 1.69074 15.7171 1.55307 14.9439 1.69301C14.1708 1.83296 13.4719 2.24151 12.9707 2.84657C12.4694 3.45163 12.198 4.21431 12.2044 4.99999C12.2069 5.19852 12.2264 5.39647 12.2627 5.59166L7.86272 7.61666C7.39362 7.15798 6.79959 6.84792 6.15506 6.72535C5.51053 6.60278 4.84416 6.67313 4.23943 6.9276C3.63471 7.18207 3.11852 7.60934 2.75556 8.15588C2.39259 8.70241 2.19897 9.34391 2.19897 9.99999C2.19897 10.6561 2.39259 11.2976 2.75556 11.8441C3.11852 12.3906 3.63471 12.8179 4.23943 13.0724C4.84416 13.3269 5.51053 13.3972 6.15506 13.2746C6.79959 13.1521 7.39362 12.842 7.86272 12.3833L12.2627 14.4083C12.2264 14.6035 12.2069 14.8015 12.2044 15C12.2044 15.6593 12.3999 16.3037 12.7662 16.8519C13.1324 17.4001 13.653 17.8273 14.2621 18.0796C14.8712 18.3319 15.5414 18.3979 16.188 18.2693C16.8346 18.1407 17.4286 17.8232 17.8947 17.357C18.3609 16.8908 18.6784 16.2969 18.807 15.6503C18.9356 15.0037 18.8696 14.3335 18.6173 13.7244C18.365 13.1153 17.9378 12.5947 17.3896 12.2284C16.8415 11.8622 16.197 11.6667 15.5377 11.6667ZM15.5377 3.33333C15.8674 3.33333 16.1896 3.43108 16.4637 3.61421C16.7378 3.79735 16.9514 4.05764 17.0775 4.36219C17.2037 4.66673 17.2367 5.00184 17.1724 5.32514C17.1081 5.64845 16.9493 5.94542 16.7162 6.1785C16.4831 6.41159 16.1862 6.57033 15.8629 6.63464C15.5396 6.69894 15.2045 6.66594 14.8999 6.53979C14.5954 6.41365 14.3351 6.20003 14.1519 5.92594C13.9688 5.65186 13.8711 5.32963 13.8711 4.99999C13.8711 4.55797 14.0467 4.13404 14.3592 3.82148C14.6718 3.50892 15.0957 3.33333 15.5377 3.33333ZM5.53772 11.6667C5.20809 11.6667 4.88585 11.5689 4.61177 11.3858C4.33769 11.2026 4.12407 10.9423 3.99792 10.6378C3.87178 10.3333 3.83877 9.99815 3.90308 9.67484C3.96739 9.35154 4.12612 9.05457 4.35921 8.82148C4.5923 8.5884 4.88927 8.42966 5.21257 8.36535C5.53587 8.30104 5.87099 8.33405 6.17553 8.46019C6.48007 8.58634 6.74037 8.79996 6.92351 9.07404C7.10664 9.34812 7.20439 9.67036 7.20439 9.99999C7.20439 10.442 7.0288 10.8659 6.71623 11.1785C6.40367 11.4911 5.97975 11.6667 5.53772 11.6667ZM15.5377 16.6667C15.2081 16.6667 14.8859 16.5689 14.6118 16.3858C14.3377 16.2026 14.1241 15.9423 13.9979 15.6378C13.8718 15.3333 13.8388 14.9981 13.9031 14.6748C13.9674 14.3515 14.1261 14.0546 14.3592 13.8215C14.5923 13.5884 14.8893 13.4297 15.2126 13.3654C15.5359 13.301 15.871 13.334 16.1755 13.4602C16.4801 13.5863 16.7404 13.8 16.9235 14.074C17.1066 14.3481 17.2044 14.6704 17.2044 15C17.2044 15.442 17.0288 15.8659 16.7162 16.1785C16.4037 16.4911 15.9798 16.6667 15.5377 16.6667Z" fill="#010886" />
                                </svg>
                                <p className="text-[#010886] font-normal leading-[1.4rem] text-[0.975rem]">
                                    Add to favorites
                                </p>
                            </span> */}
                        </div>

                        <span className="bg-[#010886] flex p-4 my-4 gap-4">
                            <img src={TonyJames} className="" alt="" />
                            <span>
                                <p className="text-white leading-[1.4rem] font-normal">
                                    Tony James
                                </p>
                                <p className="text-white mt-1 leading-[1.4rem] font-normal">
                                    Host
                                </p>
                            </span>
                        </span>

                        <span className="">
                            <label htmlFor="message-to-host" className="leading-[1.4rem] my-2 font-normal">
                                Send message to host
                            </label>
                            <textarea
                                id="message-to-host"
                                rows="4"
                                className="different-font border-2 border-[#898E9A] rounded rounded-t-lg rounded-b-none font-normal p-2 w-full"
                                placeholder="Description">
                            </textarea>
                            <span className="">
                                <button className="btn normal-case rounded-none px-[3.5rem] laptop:mx-8 tablet:mx-8 font-bold text-[1.125rem] py-[0.88rem] bg-[#515B6F]/[.9] hover:bg-[#515B6F] text-white">
                                    Submit
                                </button>
                            </span>
                        </span>

                        <div className="border mt-4 p-1 h-[] mb-[4rem]">
                            <p className="font-medium mb-2 text-[1.125rem] text-center">
                                Featured Property
                            </p>

                            {/* 01 */}
                            <div className="my-4">
                                <span className="">
                                    <img src={Bungalow01small} className="hidden laptop:block tablet:block" alt="Bungalow01" />
                                    <img src={MobileBungalowsmall} className="laptop:hidden tablet:hidden" alt="Bungalow01" />
                                </span>

                                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg rounded-t-none px-2 pb-4">
                                    <span className="flex gap justify-between py-2">
                                        <p className="text-[#616A6A] font-medium leading-[1.6rem]">
                                            Bungalow
                                        </p>
                                        <p className="different-font font-bold text-[#010886] leading-[1.6rem]">
                                            NGN150,000
                                        </p>
                                    </span>
                                    <span className="flex justify-between">
                                        <span className="flex gap-1">
                                            <img src={BedIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bed-icon" />

                                            <p className="py-1 text-[#515B6F] font-normal">
                                                2 Rooms
                                            </p>
                                        </span>

                                        <span className="flex gap-1">
                                            <img src={BathIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bath-icon" />

                                            <p className="py-1 text-[#515B6F] font-normal">
                                                2 Baths
                                            </p>
                                        </span>
                                    </span>
                                </div>
                            </div>


                            {/* 02 */}
                            <div className="my-4">
                                <span className="">
                                    <img src={Bungalow01small} className="hidden laptop:block tablet:block" alt="Bungalow01" />
                                    <img src={MobileBungalowsmall} className="laptop:hidden tablet:hidden" alt="Bungalow01" />
                                </span>

                                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg rounded-t-none px-2 pb-4">
                                    <span className="flex gap justify-between py-2">
                                        <p className="text-[#616A6A] font-medium leading-[1.6rem]">
                                            Bungalow
                                        </p>
                                        <p className="different-font font-bold text-[#010886] leading-[1.6rem]">
                                            NGN150,000
                                        </p>
                                    </span>
                                    <span className="flex justify-between">
                                        <span className="flex gap-1">
                                            <img src={BedIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bed-icon" />

                                            <p className="py-1 text-[#515B6F] font-normal">
                                                2 Rooms
                                            </p>
                                        </span>

                                        <span className="flex gap-1">
                                            <img src={BathIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bath-icon" />

                                            <p className="py-1 text-[#515B6F] font-normal">
                                                2 Baths
                                            </p>
                                        </span>
                                    </span>
                                </div>
                            </div>

                            {/* 03 */}
                            <div className="my-4">
                                <span className="">
                                    <img src={Bungalow01small} className="hidden laptop:block tablet:block" alt="Bungalow01" />
                                    <img src={MobileBungalowsmall} className="laptop:hidden tablet:hidden" alt="Bungalow01" />
                                </span>

                                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg rounded-t-none px-2 pb-4">
                                    <span className="flex gap justify-between py-2">
                                        <p className="text-[#616A6A] font-medium leading-[1.6rem]">
                                            Bungalow
                                        </p>
                                        <p className="different-font font-bold text-[#010886] leading-[1.6rem]">
                                            NGN150,000
                                        </p>
                                    </span>
                                    <span className="flex justify-between">
                                        <span className="flex gap-1">
                                            <img src={BedIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bed-icon" />

                                            <p className="py-1 text-[#515B6F] font-normal">
                                                2 Rooms
                                            </p>
                                        </span>

                                        <span className="flex gap-1">
                                            <img src={BathIcon} className="p-2 bg-[#EDF1F9] mr-1 rounded-full" alt="bath-icon" />

                                            <p className="py-1 text-[#515B6F] font-normal">
                                                2 Baths
                                            </p>
                                        </span>
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>







            </motion.div>
        </section >
    )
}

export default Details
