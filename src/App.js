// import Home from "./components/home/Home.js";
import Parks from "./components/parks/Parks";
import Navigation from "./components/navigation/Navigation";
import "./App.css";
import Links from "./components/Links";
import useAuth from "./hooks/useAuth";
import Home from "./components/home/Home.js";

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
      <Home />
      <Navigation />
      <Links />
      <Parks />
    </div>
  );
}

export default App;
