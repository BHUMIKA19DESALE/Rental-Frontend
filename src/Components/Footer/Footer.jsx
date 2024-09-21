import React from "react";
import { Link } from "react-router-dom";
import facebookImg from "../../assets/facebook.png";
import instaImg from "../../assets/instagram.png";
import LinkedinImg from "../../assets/linkedin.png";
import TwitterImg from "../../assets/twitter.png";

const footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#4682B4",
        padding: "20px",
        marginTop: "20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <Link
        to="/about"
        style={{
          textDecoration: "none",
          color: "white",
          marginLeft: "-1100px",
        }}
      >
        ABOUT US
      </Link>
      <Link
        to="/contact"
        style={{
          textDecoration: "none",
          color: "white",
          // textAlign:"left",
          marginLeft: "-350px",
        }}
      >
        
        CONTACT US
      </Link>
      
      <p>
        <b> Email : </b> <i>restyletreasure@gmail.com</i>
      </p>
      <p>&copy; 2024 RestyleTreasure</p>
      {/* <p>Follow us</p> */}
      <img src={facebookImg} style={{ width: "25px", height: "25px" }} />
      <img
        src={instaImg}
        style={{ width: "25px", height: "25px", marginLeft: "15px" }}
      />
      <img
        src={LinkedinImg}
        style={{ width: "31px", height: "31px", marginLeft: "15px" }}
      />
      <img
        src={TwitterImg}
        style={{ width: "32px", height: "32px", marginLeft: "15px" }}
      />
    </footer>
  );
};

export default footer;
