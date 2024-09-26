import {Link, Outlet}  from 'react-router-dom'
const Navigation = () => {
    return (
      <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

      </>
    );
  };
  
  export default Navigation;
  