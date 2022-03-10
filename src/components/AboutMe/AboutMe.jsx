import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="left about">
      <div className="inner transition2">
        <h1 className="about-me">About Me</h1>
        <p className="featured-desc">
          Hello, my name is Neal Anand. Located in Florida, I have a serious
          passion for UI effeects,annimations and creating intuitive,dynamic
          user expeiernces. I am well organized and a problem solver. I'm a huge
          fan of MMA, outdoor activities, anime and videogames.
        </p>
      </div>
      <div className="imageContainer">
        <img
          className="comp-img transition2"
          src="./assets/img/neal.jpeg"
          alt="neal"
        />
      </div>
    </div>
  );
}
