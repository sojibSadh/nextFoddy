import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";

const Root = lazy(() => import("./Root"));
const Home = lazy(() => import("../pages/Home"));
const Booking = lazy(() => import("../pages/Booking"));
const Blogs = lazy(() => import("../pages/Blogs"));
const Singleproduct = lazy(() => import("../component/Home/Singleproduct"));
const Notfound = lazy(() => import("../component/Notfound"));

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};
const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <Root />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "doctor/:id",
        element: <Singleproduct />,
        loader: () => fetch("/doctors.json").then((res) => res.json()),
        // hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "*",
        Component: Notfound,
      }

    ],
  },
]);

export default Router;