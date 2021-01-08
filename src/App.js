import "./App.css";

import Links from "./components/Links";
import useAuth from "./hooks/useAuth";
import logo from "./logo.svg";

import Home from "./components/home/Home.js";
import Navigation from "./components/navigation/Navigation";

function App() {
  const auth = useAuth();

  function loginNow() {
    const email = prompt("Please enter your email");
    auth.login(email);
  }
  if (auth.loading || auth.loggingIn || auth.loggingOut) {
    return "Loading....";
  }
  return (
    <div className="App">
      {auth.loggedIn ? (
        <div>
          You are logged-in.
          <br />
          <button onClick={() => auth.logout()}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={loginNow}>Login Now</button>
        </div>
      )}
      <Navigation />
    </div>
  );
}

export default App;
