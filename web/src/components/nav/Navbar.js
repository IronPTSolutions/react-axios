import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-ih.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-middle" />
          React & Axios
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/">Products</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/create-product">Add Product</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
