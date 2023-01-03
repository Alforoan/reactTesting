const Navbar = () => {
  return (
    <section className="navbar-container">
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <a className="home" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="quotes" href="/quotes">
              Quotes
            </a>
          </li>
          <li>
            <a className="important" href="/important">
              Important
            </a>
          </li>
          <li>
            <a className="to-do" href="/tasks">
              To-Do
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
