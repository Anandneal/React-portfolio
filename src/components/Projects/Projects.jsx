import "./Projects.css";

export default function Projects() {
  return (
    <>
      <h1 id="portfolio-1">Projects</h1>
      <div className="portfolio-container transistion3">
        <div className="porfolio-left">
          <div className="inner">
            <p className="subtitle">FEATURED PROJECT</p>
            <p className="featured-title">
              Barhop - HTML CSS &amp; JavaScript/APIs
            </p>
            <p className="featured-desc">
              Our goal was to build an app that would allow a user to enter a
              city in the search bar and get a list of bars in that city, then
              allow the user to generate a route using the bars that they have
              selected.
              <a
                href="https://github.com/SatyaHMehta/firstGroupProject"
                target="_blank"
              >
                Click here to check out the repository!{" "}
              </a>
            </p>
          </div>
        </div>
        <a
          href="https://satyahmehta.github.io/firstGroupProject/"
          target="_blank"
        >
          <img
            className="projectImage"
            src="assets/img/Barhop.png"
            alt="Barhop"
          />
        </a>
      </div>
      <div className="portfolio-container transistion3">
        <div className="porfolio-left">
          <p className="subtitle">FEATURED PROJECT</p>
          <p className="featured-title">
            Barhop v2 - JavaScript, Sequalize, Node.js, Express
          </p>
          <p className="featured-desc">
            Our Goal to build upon or first project, We implemented database
            that stores user login information and also allow users to create
            accounts on our application. With a account set up users can then
            review routes they took and write reviews!
            <a
              href="https://github.com/SatyaHMehta/BarHop-V2.git"
              target="_blank"
            >
              Click here to check out the repository!{" "}
            </a>
          </p>
        </div>
        <a href="https://barhopv2.herokuapp.com/" target="_blank">
          <img
            className="projectImage"
            src="./assets/img/barhope v2.png"
            alt="barhopv2"
          />
        </a>
      </div>
      <div className="portfolio-container transistion3">
        <div className="porfolio-left">
          <div className="inner">
            <p className="subtitle">FEATURED PROJECT</p>
            <p className="featured-title">
              Quiz Coding Game - HTML CSS &amp; JavaScript
            </p>
            <p className="featured-desc">
              Quiz application using HTML, CSS, and Javascript. This application
              emphasizes the use of Javascript to provide quiz questions and
              collect user data to determine whether the answers to a question
              are correct, this then generates a score and appends a final page
              of results from the user data.
              <a href="https://github.com/Anandneal/quiz-code" target="_blank">
                Click here to check out the repository!{" "}
              </a>
            </p>
          </div>
        </div>
        <a href="https://anandneal.github.io/quiz-code/" target="_blank">
          <img
            className="projectImage"
            src="./assets/img/quiz.png"
            alt="quiz"
          />
        </a>
      </div>
    </>
  );
}
