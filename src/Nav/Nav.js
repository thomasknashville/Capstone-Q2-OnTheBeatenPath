import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <details>
      <summary>NavLinks</summary>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/parks">Parks</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/login">Sign in/Sign up</Link>
        </li>
      </ul>
    </details>
  );
};

export default Nav;
