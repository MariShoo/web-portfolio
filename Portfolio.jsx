import "../assets/portfolio.css";
import React from "react";
import { LinkIcon } from "@chakra-ui/icons";
import { Button, Box } from '@chakra-ui/react'
import { BsFacebook } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
const Portfolio = () => {
  const navigateTo = (hash) => {
    window.location.href = hash;
  };
  const downloadCV = () => {
    const fileUrl = "";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Mariam_Ramanashvili_CV.pdf";

    link.click();
  };

  return (
    <>
      <section className="body">
        <nav className="nav">
        {/* <Button onClick={() => navigateTo("#home")} rightIcon={<MdCall />} colorScheme='blue' variant='outline'>Home<Button/>
        <Button onClick={() => navigateTo("#home")} rightIcon={<MdCall />} colorScheme='blue' variant='outline'>About<Button/>
        <Button onClick={() => navigateTo("#home")} rightIcon={<MdCall />} colorScheme='blue' variant='outline'>Projects<Button/>
        <Button onClick={() => navigateTo("#home")} rightIcon={<MdCall />} colorScheme='blue' variant='outline'>skills<Button/>
        <Button onClick={() => navigateTo("#home")} rightIcon={<MdCall />} colorScheme='blue' variant='outline'>Contanct<Button/> */}
          <button onClick={() => navigateTo("#home")}>Home</button>
          <button onClick={() => navigateTo("#about-me")}>About</button>
          <button onClick={() => navigateTo("#projects")}>Projects</button>
          <button onClick={() => navigateTo("#skills")}>skills</button>
          <button onClick={() => navigateTo("#contact")}>Contact</button>
        </nav>
        {/* <img
          style={{
            width: "300px",
            float: "right",
            marginRight: "40px",
            marginTop: "60px",
          }}
         src="C:\Users\marir\OneDrive\Desktop\my portfolio web\ce11882b-e66e-46bb-aabc-51175ffc20d1.jpg"
        /> */}

        <section className="home" id="home">
        <h1 className="h1s" >Welcome To My Personal Portfolio Web Page!</h1>
          <div className="text-animation">
            <span className="animated-text"> web desginer</span>
            {/* <span className=""> ui/ux desginer</span> */}
          </div>
          <br></br>
          <section className="CVbutton"> 
            <button onClick={downloadCV}>Download CV </button>
          </section>
        </section>

        <section className="home" id="about-me">
          <h2 className="h2s">About Me</h2>
          <img
            style={{
              width: "300px",
              float: "left",
              marginRight: "50px",
              marginTop: "0px",
            }}
            src="https://scontent.ftbs5-4.fna.fbcdn.net/v/t39.30808-6/328052059_212479617992480_2948957834168672246_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeG8haR02SN5jEVSC3adlEvh2RrHTgXcVG3ZGsdOBdxUbS1YTn2mP0ugfuRmlkQTg7dExjDbQ1nj1so0ULkp6P8G&_nc_ohc=OR8JBAzNKCYQ7kNvgHEHKTe&_nc_ht=scontent.ftbs5-4.fna&_nc_gid=AnHlcx_JnFTRAZq5MmpQNxc&oh=00_AYC76QWaeWpTAUPs1kQQCwLocHaOCGzj_mSeImm2OtZDvQ&oe=66EF457A"
          />
          <h3 className="decorated-title">Hello , I'm Mariam Ramanashvili</h3>
            <h3 className="h3s">
            a third-year Computer Science student at Georgian Technical University (GTU).<br></br> 
            I am highly motivated to expand my knowledge and skills in this field as I pursue my Bachelor's degree,
            and I am eager to continue my studies abroad to gain further international experience and expertise.<br></br>
            I am particularly interested in web development and cybersecurity, and I am constantly seeking opportunities to deepen my expertise in these areas.
            My long-term goal is to contribute to technological advancements in software engineering or cybersecurity, and I actively participate in academic projects.
            </h3>
        </section>

        <section className="home" id="projects">
          <h2 className="h2s">Projects</h2>
          <p className="decorated-title">Projects I have worked on with a team are:</p>
          <br></br>
          <br></br>
          <ul className="h3s">
            <li>Calculator (Python)</li>
            <li>To-do list (Python)</li>
            <li>Weather app (Python)</li>
          </ul>
          <br></br>
          <p className="decorated-title">Projects I have worked on myself:</p>
          <br></br>
          <br></br>

          <ul className="h3s">
            <li>personal portfolio on web</li>
            <li>"rock, paper & scissors" game (java) </li>
            <li>small computer network (Cisco Packet Tracer)</li>
           
          </ul>
        </section>

        <section className="home" id="skills">
          <h2 className="h2s">Skills</h2>
          <ul>
            <p className="decorated-title">Languages</p>
            <br></br>
            <br></br>
            
            <ul className="h3s">
            <li>English : B2</li>
            <li>French : A2-B1</li>
            </ul>
            
            <br></br>
            
            <p className="decorated-title">programming Languages</p>
            <br></br>
            <br></br>
            
            <ul className="h3s">

            <li>Office programs</li>
            <li>writting basic programs on java</li>
            <li>writting basic programs on Python</li>
            
            </ul>
          </ul>
        </section>

        <footer className="footer" id="contact">
          <h2 className="h2s">Contact</h2>
          <a
            href="https://www.instagram.com/https.marishoo?igsh=cW9sNGttZXplaDF5"
            target="_blank"
          >
            <LinkIcon></LinkIcon>
            instagram
          </a>{" "}
          <a
            href="https://www.facebook.com/mari.ramanashvili?mibextid=ZbWKwL"
            target="_blank"
          >
            <LinkIcon></LinkIcon>
            facebook
          </a>{" "}
          <a
            href="www.linkedin.com/in/mariam-ramanashvili-2a7482312"
            target="_blank"
          >
            <LinkIcon></LinkIcon>
            linkedin
          </a>{" "}
        </footer>
      </section>
    </>
  );
};

export default Portfolio;
