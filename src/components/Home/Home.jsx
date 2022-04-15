import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import style from "../Home/home.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Resume from "../../Resume/resume.pdf";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
// import profile from 'file:///C:/Users/sdutt/Desktop/portfolio/portfolio/src/components/Home/portfolio_profile_picture.png'
// import imdb_project from 'file:///C:/Users/sdutt/Desktop/portfolio/portfolio/src/components/Home/imdb_project.png'

function Home() {
  const [linkedin, setLinkedin] = useState(false);
  const [github, setGithub] = useState(false);

  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])

  return (
    <>
      <Navbar />
      <div className={style.topdiv} id="top">
        <div className={style.nameDiv}>
          <h1>Hi,</h1>
          <div className={style.nameline}>
            {" "}
            <h1>I am</h1> <h1> Laxmi</h1>{" "}
          </div>
          <h1>MERN Developer</h1>
          <p className={style.description}>
            Aspiring Full Stack Developer. Capable of writing production-ready
            code using ReactJS, Redux and CSS on the fronted, NodeJS and Express
            on the backend to build single page application. Passionate about
            coding and strongly interested in obtaining a Software Developer
            position to work on enhancing the product experience.
          </p>
          <div
            className={style.linkedin}
            onMouseEnter={() => setLinkedin(true)}
            onMouseLeave={() => setLinkedin(false)}
          >
            {linkedin ? (
              <a
                href="linkedin.com/in/laxmi-dutta"
                target="_blank"
              >
                {" "}
                <img
                  src="https://i.ibb.co/LR6jFt6/icons8-linkedin-50-1.png"
                  alt=""
                  height={"40px"}
                />{" "}
              </a>
            ) : (
              <a
                href="https://www.linkedin.com/in/profileofchetan/"
                target="_blank"
              >
                {" "}
                <img
                  src="https://i.ibb.co/FBWqKgq/icons8-linkedin-50.png"
                  alt=""
                  height={"40px"}
                />{" "}
              </a>
            )}
          </div>
          <div
            className={style.github}
            onMouseEnter={() => setGithub(true)}
            onMouseLeave={() => setGithub(false)}
          >
            {github ? (
              <a href="https://github.com/laxmi124" target="_blank">
                <img
                  src="https://i.ibb.co/xF7kT7v/icons8-github-50-1.png"
                  alt=""
                  height={"40px"}
                />{" "}
              </a>
            ) : (
              <a href="https://www.linkedin.com/in/laxmi-dutta/" target="_blank">
                {" "}
                <img
                  src="https://i.ibb.co/hfY5Rsp/icons8-github-50.png"
                  alt=""
                  height={"40px"}
                />{" "}
              </a>
            )}
          </div>
          <a className={style.resumeBtn} href={Resume} download>
            RESUME
          </a>
        </div>

        <div>
          <img
            className={style.profileImg}
            src="https://i.ibb.co/b3tJ6Sj/portfolio-profile-picture.png"
            alt="profile"
            height={"350px"}
            // width={"130px"}
          />
        </div>
      </div>

      <div className={style.skillDiv} id="skill"  >
        <h1>Skills</h1>
        <div className={style.skillsContainer}>
          <div data-aos="fade-up" >
            <img src="https://i.ibb.co/5rD6Pq1/icons8-html-5-50.png" alt="" />
            <h3>HTML</h3>
          </div>
          <div data-aos="fade-up" >
            <img src="https://i.ibb.co/T88rJN8/icons8-css3-50.png" alt="" />
            <h3>CSS</h3>
          </div>
          <div data-aos="fade-up" >
            <img
              src="https://i.ibb.co/vDsGhPS/icons8-javascript-50.png"
              alt=""
            />
            <h3>JavaScript</h3>
          </div>
          <div data-aos="fade-up" >
            <img
              src="https://i.ibb.co/2SVxPRB/icons8-react-native-50.png"
              alt=""
            />
            <h3>React</h3>
          </div>
          <div data-aos="fade-up" >
            <img src="https://i.ibb.co/w6qPxRy/icons8-redux-50.png" alt="" />
            <h3>Redux</h3>
          </div>
          <div data-aos="fade-up" >
            <img src="https://i.ibb.co/VVxWD39/icons8-nodejs-50.png" alt="" />
            <h3>NodeJS</h3>
          </div>
          <div data-aos="fade-up" >
            <img
              src="https://i.ibb.co/zmXSNcf/express-js-161052138fa79136c0474521906b55e2-1.png"
              alt=""
              width={"48px"}
            />
            <h3>ExpressJS</h3>
          </div>
          <div data-aos="fade-up" >
            <img src="https://i.ibb.co/y5H5FF5/icons8-mongodb-50.png" alt="" />
            <h3>MongoDB</h3>
          </div>
          <div data-aos="fade-up" >
            <img
              src="https://i.ibb.co/0ZDN9v7/icons8-algorithm-50.png"
              alt=""
            />
            <h3>DS & ALGO</h3>
          </div>
          <div data-aos="fade-up" >
            <img
              src="https://i.ibb.co/rdxH3TP/icons8-material-ui-50.png"
              alt=""
            />
            <h3>Material UI</h3>
          </div>
        </div>
      </div>

      <div className={style.projectMainDiv} id="project" data-aos="fade-up" >
        <h1>Projects</h1>
        <div className={style.projectDiv}>
          <Card sx={{ maxWidth: 3000 }} className={style.cardMain} data-aos="fade-up" >
            <CardMedia
              component="img"
              height="320"
              image="https://i.ibb.co/qd8DFJb/imdb-project.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Imdb Clone
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                IMDb is the world's most popular and authoritative source
                 for movie, TV and celebrity content. Find ratings and reviews
                  for the newest movies and TV shows.
                </p>
                <p>
                A collaborative project built by a team of 2, executed in 6 days.
                </p>
                <h4>Role and responsibilities:-</h4>
                <p>
                  <img
                    src="https://i.ibb.co/hDczqkk/icons8-arrow-48.png"
                    alt=""
                    height={"12px"}
                  />{" "}
                  Home page, watch Trailer page, resposivness of all pages, footer
                </p>
                {/* <p className={style.paraofrole}>
                  <img
                    src="https://i.ibb.co/hDczqkk/icons8-arrow-48.png"
                    alt=""
                    height={"12px"}
                  />{" "}
                  Functionalities: User authentication along.
                </p> */}
                <p className={style.techStack}>
                  <b>Tech Stack</b> : HTML | CSS | JavaScript | React | Redux |
                  Material UI | Bootstrap
                </p>
              </Typography>
            </CardContent>
            <CardActions className={style.gobtns}>
              <a className={style.anchorLink}  href="https://github.com/laxmi124/imdb.git" target="_blank" >
              <Button
                className={style.gitlaunchbtn}
                size="small"
              >
                <img
                  src="https://i.ibb.co/gyx1zGk/icons8-github-50-3.png"
                  alt=""
                  height={"25px"}
                />
                CODE
              </Button>
              </a>
              <a className={style.anchorLink}  href="https://imdb-niftyfifty.netlify.app/" target="_blank" >
              <Button
                size="small"
              >
                <img
                  src="https://i.ibb.co/VBNMWVp/icons8-launch-50.png"
                  alt=""
                  height={"25px"}
                />
                LAUNCH
              </Button>
              </a>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 3000 }} className={style.cardMain} data-aos="fade-up" >
            <CardMedia
              component="img"
              height="320"
              image="https://i.ibb.co/jL2LzGz/fabbag.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                fabbag Clone
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                FAbbag is a website where users can find there skincare and beauty
                products easiy.
                </p>
                <p>
                A collaborative project built by a team of 2, executed in 6 days.
                </p>
                <h4>Role and responsibilities:-</h4>
                <p>
                  <img
                    src="https://i.ibb.co/hDczqkk/icons8-arrow-48.png"
                    alt=""
                    height={"12px"}
                  />{" "}
                  Home page,search bar, navbar.
                </p>
                {/* <p className={style.paraofrole}>
                  <img
                    src="https://i.ibb.co/hDczqkk/icons8-arrow-48.png"
                    alt=""
                    height={"12px"}
                  />{" "}
                  Functionalities: User authentication along.
                </p> */}
                <p className={style.techStack}>
                  <b>Tech Stack</b> : HTML | CSS | JavaScript | Local storage
                </p>
              </Typography>
            </CardContent>
            <CardActions className={style.gobtns}>
              <a className={style.anchorLink}  href="https://github.com/laxmi124/fab_bag.git" target="_blank" >
              <Button
                className={style.gitlaunchbtn}
                size="small"
              >
                <img
                  src="https://github.com/laxmi124/fab_bag.git"
                  alt=""
                  height={"25px"}
                />
                CODE
              </Button>
              </a>
              <a className={style.anchorLink}  href="https://fabbag-construct.netlify.app/" target="_blank" >
              <Button
                size="small"
              >
                <img
                  src="https://i.ibb.co/VBNMWVp/icons8-launch-50.png"
                  alt=""
                  height={"25px"}
                />
                LAUNCH
              </Button>
              </a>
            </CardActions>
          </Card>
          

          {/* <Card sx={{ maxWidth: 570 }} className={style.cardMain} data-aos="fade-up" >
            <CardMedia
              component="img"
              height="300"
              image="https://i.ibb.co/p1TFzgP/lll.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tour Clone
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                Tour is the Adventure Booking Platform, where you can effortlessly book private, group, and tailor-made multi-day organized tours in 160+ countries around the world.
                </p>
                <p>
                A collaborative project built by a team of 3, executed in 7 days.
                </p>
                <h4>Role and responsibilities:-</h4>
                <p>
                  <img
                    src="https://i.ibb.co/hDczqkk/icons8-arrow-48.png"
                    alt=""
                    height={"12px"}
                  />{" "}
                   Build to the homepage.
                </p>
                <p className={style.paraofrole}>
                  <img
                    src="https://i.ibb.co/hDczqkk/icons8-arrow-48.png"
                    alt=""
                    height={"12px"}
                  />{" "}
                  Functionalities animation and Image carousel.
                </p>
                <p className={style.techStack}>
                  <b>Tech Stack</b> : HTML | CSS | JavaScript
                </p>
              </Typography>
            </CardContent>
            <CardActions className={style.gobtns}>
            <a className={style.anchorLink} href="https://github.com/devchetan123/tour-project" target="_blank" >
              <Button
                size="small"
              >
                <img
                  src="https://i.ibb.co/gyx1zGk/icons8-github-50-3.png"
                  alt=""
                  height={"25px"}
                />
                CODE
              </Button>
              </a>
              <a className={style.anchorLink}  href="https://devchetan123.github.io/tour/" target="_blank" >
              <Button
                size="small"
              >
                <img
                  src="https://i.ibb.co/VBNMWVp/icons8-launch-50.png"
                  alt=""
                  height={"25px"}
                />
                LAUNCH
              </Button>
              </a>
            </CardActions>
          </Card> */}
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Home;

// console.log(window.innerWidth)