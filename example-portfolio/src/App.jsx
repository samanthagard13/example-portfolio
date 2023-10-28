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
        <nav class="navbar navbar-expand-lg transparent-navbar fixed-top m-4">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Jane Doe
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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

      </div>
    </>
  );
}

export default App;
