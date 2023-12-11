import { Link, NavLink } from "react-router-dom";

const MyNavbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <>
      <div className="navbara">
        <div className="logo">
          {" "}
          <Link to={"/"}>
            <div>
              <img
                style={{ height: "3.3rem" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"
              ></img>
            </div>
          </Link>
        </div>
        <div className="links">
          <NavLink to={"/"} className={setActiveClass}>
            Home
          </NavLink>
          <NavLink to={"/pokemones"} className={setActiveClass}>
            Pokemones
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MyNavbar;
