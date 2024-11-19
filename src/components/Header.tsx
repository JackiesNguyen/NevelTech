import { Link } from "react-router-dom";
import WrapperContainer from "./WrapperContainer";
import { PATH } from "@/constants/paths";
import { whiteLogoImg } from "@/assets";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="bg-custom-gradient fixed w-full left-0 right-0 top-0 z-50 md:bg-black-60 bg-transparent">
      <WrapperContainer className="flex items-center justify-between pr-0 md:pr-5 py-2 md:py-0">
        <Link to={PATH.USER.HOME}>
          <img
            src={whiteLogoImg}
            alt="whiteLogoImg"
            className="w-[70px] md:w-full h-full object-cover"
          />
        </Link>
        <div className="hidden md:block">
          <NavItems />
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </WrapperContainer>
    </header>
  );
};

export default Header;
