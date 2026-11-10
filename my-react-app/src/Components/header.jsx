import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>THE BEAUTY EDITOR</h1>
        <p>DISCOVER. CURATE. GLOW</p>
      </div>
      <nav className="header-nav">
            <a href="#">Home</a>
            <a href="#">Discover</a>
            <a href="#">My Wishlist</a>
      </nav>
    </header>
  );
}

export default Header;