import React from "react";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="w-full flex justify-center ">
        <div className="max-w-screen-xl w-full min-h-[350px] absolute -mt-[350px] z-10">
          <Image
            src={"/assets/Group333.svg"}
            alt="vector"
            fill
            style={{ objectFit: "contain", objectPosition: "bottom" }}
            className="translate-y-4"
          />
        </div>
      </div>
      <div className="w-full h-fit pb-16 bg-blue flex justify-center px-5 sm:px-10 p-10 relative ">
        <div className="max-w-screen-xl w-full grid grid-cols-12 gap-6 ">
          <div className="col-span-3 relative flex flex-col ">
            <div className="h-20 relative">
              <Image
                src={"/assets/logo1.svg"}
                fill
                alt="logo"
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="rounded overflow-hidden"
              />
            </div>

            <p className="font-bold text-white mt-4">
              DR.NOK DISTRIBUTION CO.,LTD.
            </p>
            <p className="text-white text-sm uppercase mt-1 max-w-[250px]">
              Best in class thailand’s PET foods & Veterinary Equipment products
              distributor and importer.
            </p>
          </div>

          <div className="col-span-6 relative flex gap-16">
            <div className="flex flex-col gap-2">
              <p className="text-white font-bold mb-2">COMPANY</p>
              <ul className="text-xs text-white flex flex-col gap-4">
                <li>ABOUT US</li>
                <li>MILESTONE</li>
                <li>OUR BUSINESS</li>
                <li>WHY WORK WITH US</li>
                <li>ORGANIZATION CHART</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-white font-bold mb-2">DISTRIBUTION</p>
              <ul className="text-xs text-white flex flex-col gap-4">
                <li>OUR LOGISTICS</li>
                <li>NEWS & PROMOTIONS</li>
                <li>CONTACT US</li>
              </ul>
            </div>
          </div>

          <div className="col-span-3 relative flex flex-col gap-2">
            <p className="text-white font-bold ">FOLLOW US</p>

            <div className="flex gap-4 pb-4 border-b border-white/60">
              <div className="relative flex gap-2">
                <div className="w-6 h-6 relative shrink-0">
                  <Image
                    src={"/assets/icon/facebook.svg"}
                    fill
                    alt="facebook"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </div>

                <p className="text-white text-sm">DR.NOK</p>
              </div>

              <div className="relative flex gap-2">
                <div className="w-6 h-6 relative shrink-0">
                  <Image
                    src={"/assets/icon/line.svg"}
                    fill
                    alt="facebook"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </div>

                <p className="text-white text-sm">@DR.NOK</p>
              </div>
            </div>

            <p className="text-white font-bold ">CALL US</p>

            <div className="flex gap-4 pb-4 border-b border-white/60">
              <p className="text-white text-sm">+667 894 1288</p>
            </div>

            <div className="flex gap-4 pb-4 ">
              <p className="text-white text-sm uppercase">
                COPYRIGHT ©2022 DR.NOK DISTRIBUTION CO.,LTD. ALL RIGHT RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
