import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

// const div = [React.createElement("div", {id: "parent"},
//     React.createElement("child", {id: "child"},
//         [
//             React.createElement("h2", {}, "I'm h2 tag"),
//             React.createElement("h1", {}, "I'm h1 tag")
//         ]
//     )
// ),
// React.createElement("div", {id: "parent2"},
//     React.createElement("child", {id: "child"},
//         [
//             React.createElement("h2", {}, "I'm h2 tag"),
//             React.createElement("h1", {}, "I'm h1 tag")
//         ]
//     )
// )];

// const heading = (
//   <h1 id="heading" className="head" tabIndex="5">
//     Hello from JSX
//   </h1>
// );

// const TitleComponent = () => {
//   return <h1 className="title">Hello from Title Component</h1>;
// };

// const Title = <h1 className="title">Hello from Title Component</h1>;

// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       {Title}
//       <h1 className="heading">This is Heading Component</h1>
//     </div>
//   );
// };
// ReactDOM.createRoot(document.getElementById("root")).render(heading);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <HeadingComponent />
// );

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Vishal",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
  ,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />,
);
