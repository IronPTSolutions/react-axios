import logo from '../../images/logo-ih.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-middle" />
          React & Axios
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
