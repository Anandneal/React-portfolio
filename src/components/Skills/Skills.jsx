import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills-container" id="skill-1">
      <h1 id="skills-1">Skills</h1>
      <div className="pre-skill">
        <div className="skill">
          <h1>
            <p className="skill-title">HTML/CSS</p>
            <p className="featured-desc skill-desc">
              Creating fun intuitive websites with HTML and CSS
            </p>
          </h1>
        </div>
      </div>
      <div className="pre-skill">
        <div className="skill">
          <h1>
            <p className="skill-title">JavaScript</p>
            <p className="featured-desc skill-desc">
              Combining HTML and CSS to make them more interactive!
            </p>
          </h1>
        </div>
      </div>
      <div className="pre-skill">
        <div className="skill">
          <h1>
            <p className="skill-title">Python</p>
            <p className="featured-desc skill-desc">
              Whether you’re interested in data visualization, artificial
              intelligence or web development. Python can do it!
            </p>
          </h1>
        </div>
      </div>
    </section>
  );
}
