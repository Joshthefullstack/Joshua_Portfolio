import React from "react";
import "./skills.scss";
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css3.png";
import javascriptImg from "../../assets/javascript.png";
import wordpRessImg from "../../assets/wordpress.png";
import reactImg from "../../assets/react.png";
import nextJs from "../../assets/nextjs_icon_212861.png";
import typescriptImg from "../../assets/typescript.png";
import nestjsImg from "../../assets/pngwing.com.png";
import nodejsImg from "../../assets/node-removebg-preview.png";
import mongodbImg from "../../assets/mongo-db.png";
import githubImg from "../../assets/github-svgrepo-com.png";


const Skills = () => {
  return (
    <div className="skills">
      <h1>My Toolkit</h1>
      <section>
        <div className="container">
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={htmlImg} alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>HTML</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={cssImg} alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>CSS</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={javascriptImg} alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>Javascript</p>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={wordpRessImg} alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>Wordpress
                </p>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={reactImg} alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>React</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={nextJs} alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>NextJS</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={typescriptImg} alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>Typescript</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={nestjsImg} alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>NestJS</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={nodejsImg} alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>NodeJS</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={mongodbImg} alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>Mongo DB</p>
              </li>
            </ul>
          </div>

          
          <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={githubImg} alt=''/>
            </div>
          </div>
          <ul className="sci">
            <li>
              <p>Github</p>
            </li>
          </ul>
          </div>
          
{/*           
          <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src="./assets/git.png" alt=''/>
            </div>
          </div>
          <ul className="sci">
            <li>
              <p>Git</p>
            </li>
          </ul>
          </div> */}

        </div>
      </section>
    </div>
  );
};

export default Skills;
