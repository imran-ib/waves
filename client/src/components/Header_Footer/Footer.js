import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCompass from "@fortawesome/fontawesome-free-solid/faCompass";
import faPhone from "@fortawesome/fontawesome-free-solid/faPhone";
import faClock from "@fortawesome/fontawesome-free-solid/faClock";
import faEnvelope from "@fortawesome/fontawesome-free-solid/faEnvelope";

export class Footer extends Component {
  state = {
    FooterContent: [
      {
        icon: faCompass,
        topLine: "Address",
        bottomLine: "Shahrahe Faisal karachi"
      },
      {
        icon: faPhone,
        topLine: "Phone",
        bottomLine: "555-55-555"
      },
      {
        icon: faClock,
        topLine: "Working Hours",
        bottomLine: "Mon/Sat 9am 8pm"
      },
      {
        icon: faEnvelope,
        topLine: "Email",
        bottomLine: "nfo@waves.com"
      }
    ]
  };
  renderContent = () => {
    return this.state.FooterContent.map((content, i) => (
      <div className="tag" key={i}>
        <FontAwesomeIcon icon={content.icon} className="icon" />
        <div className="nfo">
          <div>{content.topLine}</div>
          <div>{content.bottomLine}</div>
        </div>
      </div>
    ));
  };
  render() {
    return (
      <footer className="bck_b_dark">
        <div className="container">
          <div className="logo">Waves</div>
          <div className="wrapper">
            <div className="left">
              <h2>Contact Information</h2>
              <div className="business_nfo">{this.renderContent()}</div>
            </div>

            <div className="left">
              <h2>Be The First One To Know</h2>
              <div>
                Get all the latest information on events , sales and offers. You
                would love it !!!
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
