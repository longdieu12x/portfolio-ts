import React from "react";
import "./About.css";
import Award from "../../img/award.png";
const About: React.FC<{}> = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h2 className="about-title">About Me</h2>
        <div className="about-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </div>
        <p className="about-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          officiis facilis expedita vero minus veniam optio eligendi error totam
          reprehenderit rem dignissimos, repellendus quis quas incidunt sit ut
          eaque temporibus.
        </p>
        <div className="about-award">
          <img src={Award} alt="image" className="about-award-img" />
          <div className="about-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
