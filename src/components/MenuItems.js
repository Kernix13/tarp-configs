import { Link } from "react-router-dom";

function MenuItems({ showMenu, active }) {
  const closeMobileMenu = () => showMenu(false);

  return (
    <div>
      <ul className={active ? "flex flex-col items-center mt-4 sm:hidden nav-menu" : "hidden"}>
        <li onClick={() => active && closeMobileMenu()} className="nav-item">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn nav-link">
            Home
          </Link>
        </li>
        <li onClick={() => active && closeMobileMenu()} className="nav-item">
          <Link to="/results" className="btn btn-ghost btn-sm rounded-btn nav-link">
            Results
          </Link>
        </li>
        <li onClick={() => active && closeMobileMenu()} className="nav-item">
          <Link to="/configs" className="btn btn-ghost btn-sm rounded-btn nav-link">
            Configs
          </Link>
        </li>
        <li onClick={() => active && closeMobileMenu()} className="nav-item">
          <Link to="/calcs" className="btn btn-ghost btn-sm rounded-btn nav-link">
            Calcs
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuItems;
