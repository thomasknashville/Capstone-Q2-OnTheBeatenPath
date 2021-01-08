import "./App.css";
import Navigation from "./components/Navigation";
import Links from "./components/Links";
import useAuth from "./hooks/useAuth";

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
      <Links />
    </div>
  );
}

export default App;
