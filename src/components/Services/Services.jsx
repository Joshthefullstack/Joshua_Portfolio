import React, { useRef } from "react";
import "./servicepage.scss";
import { motion, useInView } from "framer-motion";

const serviceVariants = {
  inital: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 5,
      staggerChildren: 0.1,
    },
  }
};

const Services = () => {

  const ref = useRef();

  const isInView = useInView(ref,{margin: "-100px"} )
  return (
    <motion.div
      className="services"
      variants={serviceVariants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      // animate={isInView && "animate"}
    >
      <motion.div className="titleContainer" variants={serviceVariants}>
        <div className="title">
          {/* <img src="./assets/people.webp" alt="" /> */}
          <h1>
            {" "}
            <motion.b whileHover={{ color: "orange"}}>Services</motion.b> That I Provide
          </h1>
        </div>
        <div className="title">
          <h1>
            {" "}
            <motion.b  whileHover={{ color: "orange"}}>For Your</motion.b> Business
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={serviceVariants}>
        <motion.div
          className="box"
          // whileHover={{ background: "lightgrey" }}
        >
          {/* <img src="./fd3d.png" alt="" /> */}
          <h2>Frontend Development</h2>
          <p>
            From converting ready made UI/UX code to full on web application with my toolkit to integrating a backend system for a frontend application, My frontend development skills are top notch. 
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          // whileHover={{ background: "lightgrey" }}
        >
          <h2>Backend Development</h2>
          <p>
            RESTFUL APIS, CRUD operations, Authentication, Authorization, Database management, Server management, Deployment, and many more. I have got you covered. Backend development is my forte. 
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          // whileHover={{ background: "lightgrey" }}
        >
          <h2>Graphics Designing</h2>
          <p>
            From creating a logo to a full on branding design, I have got you covered. I use the latest tools and software to create stunning designs for your business.
            {/* Graphic design is the process of creating visual elements for communication, such as logos, images, and illustrations.  */}
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
