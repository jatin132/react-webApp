import React from "react";
import aboutImg from "../../images/about.webp";
import team1 from "../../images/team-1.webp";
import team2 from "../../images/team-2.webp";
import team3 from "../../images/team-3.webp";
import team4 from "../../images/team-4.webp";
import "./about.css";

const About = () => {
  const team = [
    {
      img: team1,
      teamName: "DOMINICK JAMES",
      title: "Founder and Principal",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      img: team2,
      teamName: "GRACE RIOS",
      title: "Project Manager",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      img: team3,
      teamName: "KIM BAILEY",
      title: "VP Marketing",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      img: team4,
      teamName: "TREVON SINCLAIR",
      title: "VP Accounts",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
  ];

  return (
    <div className="">
      <div className="container mb-5">
        <h1 className="heading text-center"> ABOUT </h1>
        <div className="row mt-5">
          <div className="col-lg-6 border p-5">
            <p style={{ marginTop: 60 }}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="mt-5">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
          <div className="col-lg-6 border">
            <img
              src={aboutImg}
              alt="About Image"
              className="col-lg-12 img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <h1 className="heading text-center"> OUR TEAM </h1>
        <div className="row mt-5">
          {team.map((item, idx) => {
            return (
              <div className="col-lg-6 border p-5" key={idx}>
              <img src={item.img} alt="Team Member" className="img-fluid col-lg-12" />
              <h1 className="mt-5">{item.teamName} </h1>
              <h6 className="font-weight-bolder"> {item.title} </h6>
              <p style={{ marginTop: 60 }}> {item.desc} </p>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
