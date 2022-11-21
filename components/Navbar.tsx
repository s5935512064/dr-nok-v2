import React from "react";
import Image from "next/image";

type Props = {};

const menuList = [
  { id: 1, name: "HOME", href: "" },
  { id: 2, name: "ABOUT US", href: "" },
  { id: 3, name: "OUR BUSINESS", href: "" },
  { id: 4, name: "our logistics", href: "" },
  { id: 5, name: "news & promotionS", href: "" },
  { id: 6, name: "WHY WORK WITH US", href: "" },
  { id: 7, name: "CONTACT US", href: "" },
];

const Navbar = (props: Props) => {
  return (
    <>
      <div className="w-full h-fit p-4 sm:px-10 flex justify-between items-center fixed top-0 left-0 bg-white/75 gap-4">
        <div className="w-36 h-16 relative shrink-0">
          <Image
            src={"/assets/logo1.svg"}
            fill
            alt="logo"
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
        </div>

        <div className="flex-1 w-full hidden  md:flex items-center ">
          <ul className="flex gap-4">
            {menuList.map((item: any, index: any) => (
              <li key={index} className="text-sm text-gray px-4 py-2 uppercase">
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex  gap-7 items-center shrink-0">
          <div className="text-gray text-sm">
            <p className="font-bold">CALL US</p>
            <p>+667 894 1288</p>
          </div>

          <div className="divide-x gap-2 flex h-fit text-gray text-sm ">
            <p className="font-bold">EN</p>
            <p className="pl-2">ไทย</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
