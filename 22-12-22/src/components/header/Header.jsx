import "./header.scss";

export const Header = () => {
  const menuItems = [
    { label: "Home", href: "#header" },
    { label: "🌏", href: "https://www.who.int/" },
    { label: "Footer", href: "#footer" },
  ];
  return (
    <header className="Header">
      <div className="container">
        <div className="row">
          <div className="col">🤖</div>
          <div className="col">
            <nav className="navbar">
              <ul className="navbar-ul" role="menu">
                {menuItems.map(function (menuItem, index) {
                  return (
                    <li key={index} role="menuitem">
                      <a href={menuItem.href}>{menuItem.label}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
