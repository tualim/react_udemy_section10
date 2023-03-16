import React, { Fragment, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

function App() {

  const context = useContext(AuthContext)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("isLoggedIn");

  //   if (storedUser === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []); 

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
    // <AuthContext.Provider
    //   value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    // >
    <Fragment>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </Fragment>
    // </AuthContext.Provider>
  );
}

export default App;
