import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Forerunner Leadership Training",
    img: "./assets/Screenshot (112).png",
    desc: "Forerunner Leadership Training is a Leadership training program, that is a part of the John Maxwell Programme. It incorporates registration form, functional pages, aesthetic artifacts.",
    link: "https://forerunnerlt.com/"
  },
  {
    id: 2,
    title: "Chapel Of Praise",
    img: "./assets/e-learning.png",
    desc: "A church website, that incorporates different forms, state of the art functionalities, it is a project for a church and was done with wordpress technologies.",
    link: "https://cop.microwales.ca/"
  },
  {
    id: 3,
    title: "Next.js Online Bookstore",
    img: "./assets/bookstore.png",
    desc: "Using Next.js Technology and Nest.js technology, I designed an online bookstore, where users, can come check out some of their favorite books and the prices, and admins can perform CRUD operations on different books.",
    link: "https://github.com/Joshthefullstack/nestjs-application"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div style={{ y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>Link</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
