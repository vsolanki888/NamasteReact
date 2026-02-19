import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
// const About = () => {
//   return (
//     <div className="about">
//       <h1>About Us</h1>
//       <p>This is the About Us page of our application.</p>
//       <UserClass
//         name={"Vishal (class)"}
//         location={"Pune"}
//         contact={"@vishal"}
//       />
//     </div>
//   );
// };
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent About constructor");
  }

  componentDidMount() {
    console.log("parent About componentDidMount");
  }
  render() {
    console.log("parent About render");
    return (
      <div className="about">
        <h1>About Us</h1>
        <p>This is the About Us Class page of our application.</p>
        <UserClass />
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h2 className="font-bold text-lg">
              Logged in User: {loggedInUser}
            </h2>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default About;
