import { useState } from "react";
import "./App.css";
import About from './components/about';
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";

function App() {
  const [selectedPage, setSelectedPage] = useState('about');

  const handleNavClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top m-4">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Jane Doe
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <a
                    className={`nav-link ${selectedPage === "about" ? "active" : ""}`}
                    onClick={() => handleNavClick("about")}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${selectedPage === "portfolio" ? "active" : ""}`}
                    onClick={() => handleNavClick("portfolio")}
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${selectedPage === "contact" ? "active" : ""}`}
                    onClick={() => handleNavClick("contact")}
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${selectedPage === "resume" ? "active" : ""}`}
                    onClick={() => handleNavClick("resume")}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="bg-white">
          {selectedPage === 'about' && <About />}
          {selectedPage === 'portfolio' && <Portfolio />}
          {selectedPage === 'contact' && <Contact />}
          {selectedPage === 'resume' && <Resume />}
        </main>

        <footer className="fixed-bottom p-2">
          <div>
            <a href="https://github.com"><i className="fab fa-github fa-2x m-2 p-2 icons"></i></a>
            <a href="https://www.linkedin.com"><i className="fab fa-linkedin fa-2x m-2 p-2 icons"></i></a>
            <a href="https://stackoverflow.com/"><i className="fab fa-stack-overflow fa-2x m-2 p-2 icons"></i></a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
