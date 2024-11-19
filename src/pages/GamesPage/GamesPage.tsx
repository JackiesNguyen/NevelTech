import { filterIcon, searchIcon } from "@/assets";
import Banner from "@/components/Banner/Banner";
import Button from "@/components/Button";
import WrapperContainer from "@/components/WrapperContainer";
import { GAME_NAV_LINKS } from "@/constants/navLinks";
import cn from "@/libs/utils";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const GamesPage = () => {
  const [isShowInputSearch, setIsShowInputSearch] = useState(false);

  const handleClickShowInputSearch = () => {
    setIsShowInputSearch(!isShowInputSearch);
  };

  return (
    <div className="flex flex-col">
      <Banner />
      <WrapperContainer className="px-0 py-0 md:p-5 md:py-[100px]">
        <div className="flex flex-col md:flex-row gap-x-5 lg:gap-x-10">
          <div className="flex flex-row flex-wrap md:flex-nowrap md:flex-col justify-between md:justify-normal gap-y-[5px] md:gap-y-[25px] border-b md:border-none mb-6 md:mb-0">
            {GAME_NAV_LINKS.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  to={item.link}
                  className="flex items-center gap-[5px]"
                >
                  {({ isActive }) => (
                    <div
                      className={cn(
                        "flex flex-col items-center md:flex-row gap-x-2 gap-y-1 p-5 md:p-0 text-center",

                        { "border-b-2 border-black md:border-none": isActive }
                      )}
                    >
                      <item.icon fill={isActive ? "#000" : "#ccc"} />
                      <span
                        className={cn(
                          "text-[#ccc] md:text-[15.5px] not-italic font-semibold uppercase md:capitalize text-[10px]",
                          {
                            "text-black": isActive,
                          }
                        )}
                      >
                        {item.title}
                      </span>
                    </div>
                  )}
                </NavLink>
              );
            })}
            <button
              className="flex flex-col items-center md:flex-row gap-x-2 gap-y-1 md:order-[-1] md:border-b md:pb-5 cursor-pointer p-5 md:p-0"
              onClick={handleClickShowInputSearch}
            >
              <img
                src={searchIcon}
                alt="searchIcon"
                className="w-5 h-5 object-cover"
              />
              <span className="text-[#ccc] text-[10px] md:text-[15.5px] not-italic font-semibold uppercase md:hidden">
                Search
              </span>
              <input
                type="text"
                className="hidden md:block px-2 border-none outline-none text-[15.5px] not-italic font-semibold leading-[20px] text-black-60 w-full placeholder-[#ccc]"
                placeholder="Search"
              />
            </button>
            <button className="flex flex-col items-center gap-x-2 md:hidden border-l p-5">
              <img src={filterIcon} alt="filterIcon" />
              <span
                className={cn(
                  "text-[#ccc] text-[10px] md:text-[15.5px] not-italic font-semibold uppercase md:capitalize"
                )}
              >
                Filter
              </span>
            </button>
          </div>
          <Outlet />
        </div>
      </WrapperContainer>
    </div>
  );
};

export default GamesPage;
