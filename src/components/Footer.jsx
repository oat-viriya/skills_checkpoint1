import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="email-icon-container">
          <div className="icon-container">
            <img
              className="email-icon"
              src="src/assets/Squircle.png"
              alt="email"
            ></img>
            <div className="email-container">auttasit.v@gmail.com</div>
          </div>
        </div>
        <div className="copyright-container">© Copyright 2023 | Auttasit.V</div>
        <div className="footer-icons-container">
          <div>
            <img
              className="footer-icon"
              src="src/assets/footer-icons/Group 2.png"
            ></img>
          </div>
          <div>
            <img
              className="footer-icon"
              src="src/assets/footer-icons/Group 4.png"
            ></img>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
