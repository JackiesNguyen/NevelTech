import { HEADER_NAV_LINKS } from "@/constants/navLinks";
import cn from "@/libs/utils";
import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="flex flex-col items-start md:flex-row md:items-center gap-x-7 gap-y-4 xl:gap-[42px] xl:mr-20">
      {HEADER_NAV_LINKS.map((link) => {
        return (
          <NavLink
            key={link.key}
            to={link.link}
            className={({ isActive }) =>
              cn(
                "text-gray-50 text-[12px] sm:text-[14.75px] uppercase not-italic font-normal leading-1 md:leading-[90px] tracking-[0.5px] hover:text-white border-b-2 border-transparent",
                { "text-white border-white": isActive }
              )
            }
          >
            {link.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavItems;
