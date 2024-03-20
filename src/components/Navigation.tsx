import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <>
      <nav className="container--navigation">
        <h2 className="headLine">THE ZOO</h2>
        <ul className="container--menu">
          <li>
            <NavLink className="text__link" to={"/"}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className="text__link" to={"/animals"}>
              ANIMALS
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
