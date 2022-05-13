import React from "react";
import Header from "../../components/header/Header";
import "./HomePage.scss";

import "../../styles/main.css";

const HomePage = () => {
  return (
    <div className="visible">
      <section className="main-section">
        <Header />
      </section>
      <main></main>
    </div>
  );
};

export default HomePage;
