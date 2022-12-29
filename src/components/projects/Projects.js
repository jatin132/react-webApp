import React from "react";
import project1 from "../../images/project-1.webp";
import project2 from "../../images/project-2.webp";
import project3 from "../../images/project-3.webp";
import project4 from "../../images/project-4.webp";

const Projects = () => {
  const project = [
    {
      img: project1,
      projectName: "PROJECT 1",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      img: project2,
      projectName: "PROJECT 2",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      img: project3,
      projectName: "PROJECT 3",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      img: project4,
      projectName: "PROJECT 4",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
  ];

  return (
    <div className="">
      <div className="container mb-5">
        <h1 className="heading text-center"> PROJECTS </h1>
      </div>
      <div className="container mb-5">
        <div className="row mt-5 p-3">
          {project.map((item, idx) => {
            return (
              <div className="col-lg-6 col-md-12 border p-5 mb-3" key={idx}>
                <img
                  src={item.img}
                  alt="Projects"
                  className="img-fluid col-lg-12"
                />
                <h1 className="mt-5">{item.projectName} </h1>
                <p style={{ marginTop: 60 }}> {item.desc} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
