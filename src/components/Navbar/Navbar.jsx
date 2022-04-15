import React from 'react'
import { Link } from "react-router-dom"
import style from "../Navbar/navbar.module.css"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Resume from "../../Resume/resume.pdf"


function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [burger, setBurger] = React.useState(true);
  const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClose = () => {
    setAnchorEl(null);
    setBurger(true)
  };

  return (
    <div className={style.navbarDiv}  >
    <img className={style.logo} src="https://i.ibb.co/6s4wL75/KING-royal-logo-typography.png" alt="logo" height={"45px"} />
    <div className={style.linkDiv} >
      <a className={style.links} href="#top" >Home</a>
      <a className={style.links} href="#top" >About</a>
      <a className={style.links} href="#skill" >Skills</a>
      <a className={style.links} href="#project" >Projects</a>
      <a className={style.links} href="#footer" >Contact</a>
      <a href={Resume} download >RESUME</a>
    </div>

    <div className={style.dropMenu} >
    <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
          setBurger(!burger)
        } }
      >
        {
          burger ?  <img  className={style.menuIcon} src='https://i.ibb.co/Y2H7jpg/icons8-menu-rounded-50.png' height={"30px"} /> : <img  className={style.menuIcon} src='https://i.ibb.co/T8X6nd0/icons8-cancel-64.png' height={"30px"} />
        }
       
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <a className={style.dropmenu} href="#top" ><MenuItem onClick={handleClose}> <img src="https://i.ibb.co/4Snypzm/icons8-about-24.png" alt="" /> About</MenuItem></a>
        <a className={style.dropmenu} href="#skill" ><MenuItem onClick={handleClose}> <img src="https://i.ibb.co/0QtT8Df/icons8-communication-skill-24.png" alt="" /> Skills</MenuItem></a>
        <a className={style.dropmenu} href="#project" ><MenuItem onClick={handleClose}> <img src="https://i.ibb.co/0M8RjYj/icons8-project-24.png" alt="" /> Projects</MenuItem></a>
        <a className={style.dropmenu} href="#footer" ><MenuItem onClick={handleClose}> <img src="https://i.ibb.co/yQMHZK6/icons8-contact-24.png" alt="" /> Contact</MenuItem></a>
        <a  className={style.dropmenu} href={Resume} download ><MenuItem onClick={handleClose}> <img src="https://i.ibb.co/BjNY82K/icons8-resume-24.png" alt="" /> Resume</MenuItem></a>
      </Menu>
    </div>

    </div>
  )
}

export default Navbar