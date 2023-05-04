import React from "react";

import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import { TbCircleFilled } from "react-icons/tb";
import { Collapse } from "react-collapse";

const AccordionItems = ({ open, toggle, title, desc }) => {
    return (
        <div className="pt-10 text-[#3A3A3A]">
            <div
                onClick={toggle}
                className="px-2 bg-white flex justify-between cursor-pointer border-t-2 border-[#3A3A3A] pt-4"
            >
                <div className="flex flex-row gap-2">
                    {open ? <TbCircleFilled className="text-blue-900 font-bold text-lg mt-2" /> : <TbCircleFilled className="text-blue-500 font-bold text-lg mt-2" />}
                    <p className="text-lg md:text-xl max-w-[39ch] md:max-w-full text-start font-semibold">{title}</p>
                </div>
                <div className="text-sm md:text-xl">
                    {open ? <SlArrowDown className="text-blue-900 font-bold mt-2" /> : <SlArrowRight className="text-blue-500 font-bold mt-2" />}
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className="bg-white text-xl md:text-md px-2 md:px-3 mt-4">{desc}</div>
            </Collapse>
        </div>
    );
};

export default AccordionItems;