import { Suspense, lazy } from "react";
import LoadingCard from "../components/Cards/LoadingCard";
const MainLayout = lazy(() => import("../layout/main"));
const Home = lazy(() => import("../views/Home"));
const Add = lazy(() => import("../views/Add"));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: (
        <Suspense fallback={<LoadingCard />}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/add",
      element: (
        <Suspense fallback={<LoadingCard />}>
          <Add />
        </Suspense>
      ),
    },
    {
      path: "/on-progress",
      element: (
        <Suspense fallback={<LoadingCard />}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/done",
      element: (
        <Suspense fallback={<LoadingCard />}>
          <Home />
        </Suspense>
      ),
    },
  ],
};

export default MainRoutes;
