import React, { useContext } from "react";
import fashionImage from "../../assets/clothingstore3.jpg";
import Footer from "../Footer/Footer";
import { DataContext } from "../../context/DataProvider";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { account } = useContext(DataContext);
  return (
    <>
      <div
        className="container"
        // style={{ backgroundColor: "#ffe6e6" }}
      >
        <h1
          style={{  fontWeight: "bold", fontSize: "5rem", marginLeft: "20px", fontFamily: "apple chancery", fontStyle: "italic", color: "#856088" }}
        >
          Welcome to Restyle Treasure Store
        </h1>
        <img
          className="clothing-image"
          src={fashionImage}
          alt="Clothing Image"
        />
        <div className="quotation">
          <p>
            <b>"Rent.</b>
          </p>
          <p>
            <b> Wear.</b>
          </p>
          <p>
            <b> Repeat"</b>
          </p>
          
        </div>
        {account.name ? (
          <Link to={"/rent"}>
            <button className="rent-button">Rent Now</button>
          </Link>
        ) : (
          <Link to={"/login"}>
            <button className="rent-button">Rent Now</button>
          </Link>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
