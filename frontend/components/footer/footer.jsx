import React from 'react';

const Footer = props => {
  return (
    <div className="footer-container">

      <div className="footer-main">

        <div className="footer-main-content">

          <div className="footer-section">
            <div className="footer-content">
              <h3 className="footer-content-header">About</h3>
              <ul className="footer-content-list">
                <li className="footer-content-item">
                  <a href="https://github.com/ckim310/Welp/wiki">About Welp</a>
                </li>
                <li className="footer-content-item">
                  <a href="https://github.com/ckim310/Welp">Welp Github Page</a>
                </li>
                <li className="footer-content-item">
                  <a href="#">Back to Welp<i className="fab fa-yelp"></i></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-section">
            <div className="footer-content">
              <h3 className="footer-content-header">Discover Christine</h3>
              <ul className="footer-content-list">
                <li className="footer-content-item">
                  <a href="https://github.com/ckim310">Christine's Github</a>
                </li>
                <li className="footer-content-item">
                  <a href="https://www.linkedin.com/in/christine-kim-46857544/">Christine's LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-section">
            <div className="footer-content">
              <h3 className="footer-content-header">Welp for Business Owners</h3>
              <ul className="footer-content-list">
                <li className="footer-content-item">
                  <a href="#">Claim Your Business Page</a>
                </li>
                <li className="footer-content-item">
                  <a href="#">Advertise on Welp</a>
                </li>
                <li className="footer-content-item">
                  <a href="#">Welp Reservations</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-section">
            <div className="footer-content">

              <div className="footer-languages">
                <h3 className="footer-content-header">Languages</h3>
                <div className="footer-languages-options">
                  <select>
                    <option defaultValue="English">English</option>
                    <option value="Korean">Korean</option>
                    <option value="Ruby on Rails">Ruby on Rails</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="JQuery">jQuery</option>
                    <option value="SQL">SQL</option>
                  </select>
                </div>
              </div>

              <div className="footer-education">
                <h3 className="footer-content-header">Education</h3>
                <div className="footer-education-options">
                  <select>
                    <option defaultValue="UMD">UMD</option>
                    <option value="App Academy">App Academy</option>
                  </select>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="footer-img-container">
          <div className="footer-img">
            <img src="./footer_cityscape.png" alt="footer_cityscape"/>
          </div>
        </div>

        <div className="disclaimer">
          <div className="copyright">
            <i className="far fa-copyright"></i>
            &nbsp;Christine Kim | welp est. 2019
          </div>

          <div className="est">
            welp is a clone and not a substitute of yelp
          </div>
        </div>
      </div>

    </div>
  )
};

export default Footer;