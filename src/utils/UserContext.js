import { createContext } from "react";
const UserContext = createContext({
  loggedInUser: "Dummy Name",
});

export default UserContext;
