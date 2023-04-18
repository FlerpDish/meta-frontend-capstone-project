import React from "react";
import { Link } from "react-router-dom";
import Food from "../assets/icons_assets/restauranfood.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="left-side">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>
          <Link to="/booking">Reserve a table</Link>
        </button>
      </div>
      <div className="right-side">
        <img
          src={Food}
          alt="Our cook presenting a mouth-watering platter of baguette topped with the freshest veggies and heartiest of meats!"
        />
      </div>
    </header>
  );
};

export default Header;