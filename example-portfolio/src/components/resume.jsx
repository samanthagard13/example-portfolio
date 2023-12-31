function Resume() {
  return (
    <div className="container p-2 main-content">
      <h2 className="m-2 display-6">Resume</h2>
      <div>
        <h4>Front End</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Web Design</li>
          <li>React</li>
          <li>Bootstrap</li>
          
        </ul>
      </div>
      <div>
        <h4>Back End</h4>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>

<div className="m-2 resume-link contact-btn">
  <a href="https://docs.google.com/document/d/1bi6CAyqn2YU0juhRDLmMQMU8XL5pEzC0b57UHmFpIWQ/edit?usp=sharing" target="blank">My Resume</a>
</div>

    </div>
  );
}

export default Resume;
