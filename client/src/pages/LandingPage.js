import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            {" "}
            lorem ipsum satum Forage marfa pabst hashtag cloud bread.
            Thundercats vegan franzen, knausgaard bitters tumeric fanny pack.
            Cold-pressed chambray raclette stumptown, taxidermy banh mi food
            truck subway tile occupy. Echo park af tonx edison bulb, tote bag
            unicorn selfies. Irony tacos beard heirloom waistcoat keffiyeh
          </p>
          <Link to="/register" className="btn btn-hero">
            {" "}
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
