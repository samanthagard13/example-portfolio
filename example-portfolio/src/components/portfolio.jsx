import React from 'react';

function Portfolio() {
  return (
    <div className="container p-2 main-content">
      <h2 className="m-2 display-6">Portfolio</h2>
      <div className="image-container">
        <div className="image-with-buttons">
          <img src="/images/todo-pic.png" className="img-fluid p-2" alt="TODO App" />
          <div className="image-buttons">
            <a href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="image-with-buttons">
          <img src="/images/weather-pic.png" className="img-fluid p-2" alt="Weather App" />
          <div className="image-buttons">
            <button>Button 1</button>
            <button>Button 2</button>
          </div>
        </div>
      </div>
      <div className="image-container">
        <div className="image-with-buttons">
          <img src="/images/movie-pic.png" className="img-fluid p-2" alt="Movie App" />
          <div className="image-buttons">
            <button>Button 1</button>
            <button>Button 2</button>
          </div>
        </div>
        <div className="image-with-buttons">
          <img src="/images/quiz-pic.png" className="img-fluid p-2" alt="Quiz App" />
          <div className="image-buttons">
            <button>Button 1</button>
            <button>Button 2</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
