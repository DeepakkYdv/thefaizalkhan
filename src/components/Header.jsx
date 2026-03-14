function Header() {
  return (
    <header className="hero">
      <nav className="nav">
        <a className="brand" href="#top">
          Your Name
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero-copy" id="top">
        <p className="eyebrow">Frontend Developer • UI Builder</p>
        <h1>Simple portfolio starter with Yarn, React, and Vite.</h1>
        <p className="lead">
          A lightweight starting point for showcasing your work, skills, and
          contact details with a polished single-page layout.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View Projects
          </a>
          <a className="button secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
