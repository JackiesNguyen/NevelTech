import { AllGameIcon, HomeIcon, TimelineIcon } from "@/assets";
import { PATH } from "./paths";

export const HEADER_NAV_LINKS = [
  {
    key: "home",
    title: "Home",
    link: PATH.USER.HOME,
  },
  {
    key: "games",
    title: "Games",
    link: PATH.USER.GAMES,
  },
  {
    key: "news",
    title: "News",
    link: PATH.USER.NEWS,
  },
  {
    key: "math",
    title: "Math",
    link: PATH.USER.MATH,
  },
  {
    key: "company",
    title: "Company",
    link: PATH.USER.COMPANY,
  },
  {
    key: "events",
    title: "Events",
    link: PATH.USER.EVENTS,
  },
  {
    key: "partners",
    title: "Partners",
    link: PATH.USER.PARTNERS,
  },
];

export const FOOTER_NAV_LINKS = [
  {
    id: 1,
    title: "WEB MAP",
    children: [
      "Home",
      "Games",
      "News",
      "Math",
      "Company",
      "Events",
      "Partners",
    ],
  },
  {
    id: 2,
    title: "ABOUT US",
    children: [
      "Licensing",
      "Certification",
      "Responsible Gaming",
      "Exhibitions",
      "Copyright Protection",
      "Privacy Policy",
    ],
  },
  {
    id: 3,
    title: "EVENTS",
    children: ["PG ICE 2017", "PG ICE 2018", "PG ICE 2019", "About ICE"],
  },
  {
    id: 4,
    title: "OUR PARTNERS",
    children: ["Relax Gaming", "Leander Games"],
  },
];

export const GAME_NAV_LINKS = [
  {
    id: 1,
    icon: HomeIcon,
    title: "Home",
    link: PATH.USER.GAMES_HOME,
  },
  {
    id: 2,
    icon: TimelineIcon,
    title: "Time Line",
    link: PATH.USER.TIME_LINE,
  },
  {
    id: 3,
    icon: AllGameIcon,
    title: "All Games",
    link: PATH.USER.ALL_GAMES,
  },
];
