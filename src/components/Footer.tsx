import { FOOTER_NAV_LINKS } from "@/constants/navLinks";
import WrapperContainer from "./WrapperContainer";
import { Link } from "react-router-dom";
import { grayLogoImg, linkedinIcon, twitterIcon, youtubeIcon } from "@/assets";

const Footer = () => {
  return (
    <div className="border-t">
      <WrapperContainer className="py-[50px] md:py-[100px]">
        <div className="pb-[50px] border-b border-b-transparent md:border-b-black-01 flex justify-between">
          <div className="flex flex-col gap-5 md:gap-10">
            <div className="flex flex-col gap-[14px]">
              <img
                src={grayLogoImg}
                alt="grayLogoImg"
                className="w-[53px] object-cover hidden md:block"
              />
              <div className="text-[11.625px] font-normal leading-4 text-black opacity-40">
                Valletta Buildings, South Street,
                <br className="hidden md:block" /> Valletta - VLT 1103 Malta
              </div>
              <div className="text-[11.063px] font-normal leading-[14px] uppercase opacity-30 md:hidden">
                COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
              <img
                src={twitterIcon}
                alt="twitterIcon"
                className="w-[20px] h-[20px] object-cover"
              />
              <img
                src={youtubeIcon}
                alt="youtubeIcon"
                className="w-[20px] h-[20px] object-cover"
              />
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                className="w-[20px] h-[20px] object-cover"
              />
            </div>
          </div>
          <ul className="hidden md:flex gap-[50px] lg:gap-[100px] justify-between">
            {FOOTER_NAV_LINKS.map((item) => (
              <li key={item.id}>
                <h2 className="text-[12.578px] font-semibold leading-[14px] mb-5 text-black opacity-80">
                  {item.title}
                </h2>
                <div className="flex flex-col gap-2">
                  {item.children.map((child) => (
                    <Link
                      to="#"
                      key={child}
                      className="text-[11.438px] font-normal leading-4 text-black opacity-50 hover:opacity-100"
                    >
                      {child}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[11.063px] font-normal leading-[14px] uppercase mt-10 opacity-30 hidden md:block">
          COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
        </div>
      </WrapperContainer>
    </div>
  );
};

export default Footer;
