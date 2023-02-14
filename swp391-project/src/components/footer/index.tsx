import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box ml-10 text-xl">
            <h3>About us</h3>
            <p>
              QuizFer was conducted and present by a group of 5 young members
              with the mission to help student, teacher to manage their studies
              and classes. QuizFer makes everything rememberable, easy to
              manipulate and human friendly.
            </p>
          </div>
          <div className="box">
            <h3>Hi</h3>
          </div>
          <div className="box">
            <h3>Quick access</h3>
          </div>
          <div className="box">
            <h3>Follow us</h3>
          </div>
        </div>
        <h1 className="credit">
          Created by <span>QuizFer FPTU </span>
          <a className="underline" href="/" target="_blank" rel="noreferrer">
            Resource
          </a>
        </h1>
      </section>
    </>
  );
};

export default Footer;
