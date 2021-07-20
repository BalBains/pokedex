import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              to="/pokedex"
              className="nav-link"
              activeClassName="active"
            >
              PokeDex
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin" className="nav-link" activeClassName="active">
              Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
