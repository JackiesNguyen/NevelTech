import NavItems from "./NavItems";
import { Sheet, SheetContent, SheetTrigger } from "./Sheet";
import { barIcon } from "@/assets";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="rounded-lg">
          <img src={barIcon} alt="icon-menu" />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-black opacity-90">
        <NavItems />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
