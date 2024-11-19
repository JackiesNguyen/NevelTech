import { PATH } from "@/constants/paths";
import MainLayout from "@/layouts/MainLayout";
import CompanyPage from "@/pages/CompanyPage";
import EventPage from "@/pages/EventPage";
import AllGamePage from "@/pages/GamesPage/AllGame/AllGamePage";
import GamesHomePage from "@/pages/GamesPage/GamesHome/GamesHomePage";
import GamesPage from "@/pages/GamesPage/GamesPage";
import TimeLinePage from "@/pages/GamesPage/TimeLine/TimeLinePage";
import HomePage from "@/pages/HomePage";
import MathPage from "@/pages/MathPage";
import NewsPage from "@/pages/NewsPage";
import PartnersPage from "@/pages/PartnersPage";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: PATH.ROOT,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: PATH.USER.GAMES,
          element: <GamesPage />,
          children: [
            {
              index: true,
              element: <Navigate to={PATH.USER.GAMES_HOME} replace />,
            },
            {
              path: PATH.USER.GAMES_HOME,
              element: <GamesHomePage />,
            },
            {
              path: PATH.USER.TIME_LINE,
              element: <TimeLinePage />,
            },
            {
              path: PATH.USER.ALL_GAMES,
              element: <AllGamePage />,
            },
          ],
        },
        {
          path: PATH.USER.COMPANY,
          element: <CompanyPage />,
        },
        {
          path: PATH.USER.EVENTS,
          element: <EventPage />,
        },

        {
          path: PATH.USER.MATH,
          element: <MathPage />,
        },
        {
          path: PATH.USER.NEWS,
          element: <NewsPage />,
        },
        {
          path: PATH.USER.PARTNERS,
          element: <PartnersPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
