import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);
