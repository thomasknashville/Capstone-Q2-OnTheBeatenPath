import { NavLink } from "react-router-dom";

export default function Links() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home></NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard></NavLink>
      </li>
      <li>
        <NavLink to="I don't know">Random Place></NavLink>
      </li>
    </ul>
  );
}
