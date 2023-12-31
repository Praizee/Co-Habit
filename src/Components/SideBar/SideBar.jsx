import React, { useState } from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function SidebarWithContentSeparator() {
    const [open, setOpen] = React.useState(1);
    // set useState above to '0' to close all on-load
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card className="laptop:h-[calc(100vh-2rem)] tablet:h-[calc(100vh-2rem)] h-auto z-50 select-none laptop:mt-0 tablet:mt-[6rem] mt-[3.7rem] tablet:flex laptop:flex w-auto max-w-[20rem] p-4">

            <ul className="list-none w-[12rem]">

                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <li className="p-0" selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3 mb-4">
                            <Typography color="blue-gray" className=" font-semibold leading-[1.6rem] text-[#25324B]">
                                Property Type
                            </Typography>
                        </AccordionHeader>
                    </li>
                    <AccordionBody className={`py-1 mb-4 transition duration-500 ease-linear ${open !== 1 ? "hidden" : ""}`}>
                        <ul className="px-2 space-y-6">
                            <li>
                                <input type="checkbox"
                                    id="apartment"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4" />

                                <label htmlFor="apartment"
                                    className="text-[#515B6F] pl-4">
                                    Apartment (7,997)
                                </label>
                            </li>

                            <li>
                                <input type="checkbox"
                                    id="duplex"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4" />
                                <label htmlFor="duplex"
                                    className="text-[#515B6F] px-4">
                                    Duplex (5)
                                </label>
                            </li>

                            <li>
                                <input type="checkbox"
                                    id="mini-flat"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4" />
                                <label htmlFor="mini-flat"
                                    className="text-[#515B6F] px-4">
                                    Mini-Flat(2)
                                </label>
                            </li>

                            <li>
                                <input type="checkbox"
                                    id="bungalow"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4" />
                                <label htmlFor="bungalow"
                                    className="text-[#515B6F] px-4">
                                    Bungalow (24)
                                </label>
                            </li>

                            <li>
                                <input type="checkbox"
                                    id="workspace"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4" />
                                <label htmlFor="workspace"
                                    className="text-[#515B6F] px-4">
                                    Workspace (3)
                                </label>
                            </li>

                        </ul>
                    </AccordionBody>
                </Accordion>

                <hr className="my-2 border-blue-gray-50" />

                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <li className="p-0" selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3 mb-4">
                            <Typography color="blue-gray" className=" font-semibold leading-[1.6rem] text-[#25324B]">
                                Location
                            </Typography>
                        </AccordionHeader>
                    </li>

                    <AccordionBody className={`py-1 mb-4 transition duration-500 ease-linear ${open !== 2 ? "hidden" : ""}`}>
                        <ul className="px-3 space-y-6">
                            <li>
                                <input type="checkbox"
                                    id="abuja"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4"
                                />
                                {/* checked */}
                                <label htmlFor="abuja"
                                    className="text-[#515B6F] px-4">
                                    Abuja(24)
                                </label>
                            </li>

                            <li>
                                <input type="checkbox"
                                    id="lagos"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4" />
                                <label htmlFor="lagos"
                                    className="text-[#515B6F] px-4">
                                    Lagos(3)
                                </label>
                            </li>
                        </ul>
                    </AccordionBody>
                </Accordion>

                <hr className="my-2 border-blue-gray-50" />

                <Accordion
                    open={open === 3}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <li className="p-0" selected={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3 mb-4">
                            <Typography color="blue-gray" className=" font-semibold leading-[1.6rem] text-[#25324B]">
                                Areas
                            </Typography>
                        </AccordionHeader>
                    </li>

                    <AccordionBody className={`py-1 mb-4 transition duration-500 ease-linear ${open !== 3 ? "hidden" : ""}`}>
                        <ul className="px-3 space-y-6">
                            <li>
                                <input type="checkbox"
                                    id="abaji"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4" />
                                <label htmlFor="abaji"
                                    className="text-[#515B6F] px-4">
                                    Abaji (57)
                                </label>
                            </li>

                            <li>
                                <input type="checkbox"
                                    id="bwari"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4" />
                                <label htmlFor="bwari"
                                    className="text-[#515B6F] px-4">
                                    Bwari (3)
                                </label>
                            </li>

                            <li>
                                <input type="checkbox"
                                    id="Gwagwalada"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4"
                                />
                                <label htmlFor="Gwagwalada"
                                    className="text-[#515B6F] px-4">
                                    Gwagwalada(5)
                                </label>
                            </li>

                            <li>
                                <input type="checkbox"
                                    id="kuje"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4"
                                />
                                {/* checked */}
                                <label htmlFor="kuje"
                                    className="text-[#515B6F] px-4">
                                    Kuje (12)
                                </label>
                            </li>

                            <li>
                                <input type="checkbox"
                                    id="kwali"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4" />
                                <label htmlFor="kwali"
                                    className="text-[#515B6F] px-4">
                                    Kwali (8)
                                </label>
                            </li>
                        </ul>
                    </AccordionBody>
                </Accordion>

                <hr className="my-2 border-blue-gray-50" />

                <Accordion
                    open={open === 4}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <li className="p-0" selected={open === 4}>
                        <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3 mb-4">
                            <Typography color="blue-gray" className=" font-semibold leading-[1.6rem] text-[#25324B]">
                                Budget
                            </Typography>
                        </AccordionHeader>
                    </li>

                    <AccordionBody className={`py-1 mb-4 transition duration-500 ease-linear ${open !== 4 ? "hidden" : ""}`}>
                        <ul className="px-3 space-y-6">
                            <li>
                                <input type="checkbox"
                                    id="100-500k"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4" />
                                <label htmlFor="100-500k"
                                    className="text-[#515B6F] px-4">
                                    100k - 500k (4)
                                </label>
                            </li>

                            <li>
                                <input type="checkbox"
                                    id="600-900k"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4" />
                                <label htmlFor="600-900k"
                                    className="text-[#515B6F] px-4">
                                    600 - 900k (6)
                                </label>
                            </li>

                            <li>
                                <input type="checkbox"
                                    id="1-2m"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4" />
                                <label htmlFor="1-2m"
                                    className="text-[#515B6F] px-4">
                                    1m - 2m (10)
                                </label>
                            </li>

                            <li>
                                <input type="checkbox"
                                    id="3m-above"
                                    name=""
                                    value=""
                                    size={30}
                                    className="w-4 h-4"

                                // checked
                                />
                                <label htmlFor="3m-above"
                                    className="text-[#515B6F] px-4">
                                    3m or above (4)
                                </label>
                            </li>
                        </ul>
                    </AccordionBody>
                </Accordion>

            </ul>
        </Card>
    );
}