import "./Main.css";
import { portfolio1, portfolio2 } from "../app/Portfolio.js";
import qualifications from "../app/Qualifications.js";

function Main() {
  return (
    <main>
      <section className="introduction-section">
        <div className="info-container">
          <div className="greetings">Hi!</div>
          <div className="my-name">
            I'm Auttasit Viriyasakulkarn. <br /> a Software developer.
          </div>
          <div className="details">
            Software developer based in Bangkok, Thailand.
            <br /> I am coding with a clean and beautiful problem solving in
            mind.
          </div>
          <div className="social-networks-container">
            <div className="follow-me">Follow me</div>
            <div className="social-networks-buttons-container">
              <button className="social-networks-buttons">
                <img
                  src="public/assets/facebook_icon.png"
                  className="social-networks-icon"
                ></img>
              </button>
              <button className="social-networks-buttons">
                <img
                  src="public/assets/twitter_icon.png"
                  className="social-networks-icon"
                ></img>
              </button>
              <button className="social-networks-buttons">
                <img
                  src="public/assets/instagram_icon.png"
                  className="social-networks-icon"
                ></img>
              </button>
              <button className="social-networks-buttons">
                <img
                  src="public/assets/telegram_icon.png"
                  className="social-networks-icon"
                ></img>
              </button>
            </div>
          </div>
          <div className="buttons-container">
            <button className="request-button">Send Request</button>
            <button className="download-cv-button">Download CV</button>
          </div>
        </div>
        <div className="photo-container">
          <img
            className="profile-picture"
            src="public/assets/Image.png"
            alt="Auttasit's photo"
          ></img>
        </div>
      </section>
      <section className="qualifications-section">
        <h1>Why hire me?</h1>
        <div className="qualifications-cards-container">
          {qualifications.map((item, index) => {
            return (
              <div className="qualifications-card" key={index}>
                <div className="card-icon-container">
                  <div className="card-icon-border">
                    <img
                      className="card-icon"
                      src={item.img}
                      alt={item.alt}
                    ></img>
                  </div>
                </div>
                <div className="card-title">{item.title}</div>
                <div className="card-details">{item.description}</div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="portfolio-section">
        <div className="title-container">
          <div className="portfolio-title">
            <h1>Portfolio</h1>
          </div>
          <div className="see-more">
            <div>See more →</div>
          </div>
        </div>
        <div className="portfolio-container-outer">
          <div className="portfolio-container-inner portfolio-row1">
            {portfolio1.map((item, index) => {
              return (
                <div className="portfolio-image-container" key={index}>
                  <img className="portfolio-image" src={item.img}></img>
                </div>
              );
            })}
          </div>
          <div className="portfolio-container-inner portfolio-row2">
            {portfolio2.map((item, index) => {
              return (
                <div className="portfolio-image-container" key={index}>
                  <img className="portfolio-image" src={item.img}></img>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
