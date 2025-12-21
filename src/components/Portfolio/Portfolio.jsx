import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Learned - E-learning Platform",
    img: "./assets/Screenshot (112).png",
    desc: "Developed a full-stack learning platform to address digital education gaps in Nigerian primary schools. Created responsive frontend with React.js, designed RESTful APIs using Node.js, and managed data with PostgreSQL.",
    link: "https://github.com/Joshthefullstack/Learned-ver-1",
  },
  {
    id: 2,
    title: "CureHub – Hospital Management System",
    img: "./assets/e-learning.png",
    desc: "Designed a hospital system to digitize manual healthcare workflows. Utilized C# and Entity Framework for the backend and Windows Forms for the frontend. Facilitated patient admission, doctor-patient mapping, and pharmaceutical dispensation with secure role-based access.",
    link: "https://github.com/Joshthefullstack/CureHub",
  },
  {
    id: 3,
    title: "Birthday Wishlist Application",
    img: "./assets/bookstore.png",
    desc: "Using Next.js Technology and Node.js technology and MongoDb for the database, I designed abirthday wishlist application where users, can come come and list out their wishes for their birthday, and generate an SEO friendly link, to share to others to view their wishlists they have created.",
    link: "https://github.com/Joshthefullstack/wishlist-application",
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
          {/* <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div> */}
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
