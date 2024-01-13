import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import ProfileDetails from "./component/ProfileDetails";

function App() {
  const { loginWithRedirect, user: UserFromAuth0, logout } = useAuth0();

  const { user, createUserAndRecieveInfo } = useContext(UserContext);
  
  console.log("user from Auth0", UserFromAuth0);

  useEffect(() => {
    if (UserFromAuth0) {
      createUserAndRecieveInfo(UserFromAuth0);
    }
  }, [UserFromAuth0]);

  const isAuthenticated = user.email ? true : false;

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            <button onClick={() => logout()}>Logout</button>
            <ProfileDetails />
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
      </header>
    </div>
  );
}

export default App;
