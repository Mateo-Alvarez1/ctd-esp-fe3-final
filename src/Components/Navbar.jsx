import React, { useContext, useState } from 'react'
import { Context } from './utils/Context';
import { Link } from 'react-router-dom'
import { BsFillMoonFill , BsFillSunFill} from "react-icons/bs";

const Navbar = () => {

   const { state , handleNewColorTheme } =  useContext(Context)
   const [icon, setIcon] = useState('sun')

   const style = {
    backgroundColor: state.theme === "light" ? "#D4D4D4" : "#555555",
    color: state.theme === "light" ? "#21130d" : "#21130d",
  };

  const buttonStyle = {
    backgroundColor: icon === 'sun' ? '#000000': '#ffa64d'  ,
    color: icon === 'sun' ?  '#ffe600':'#000000'
  }


  return (
    <nav style={style} >
      <div className='navBarContainer'>
      <Link style={style} to={'/home'}>Home</Link>
      <Link style={style} to={'/contact'}>Contact</Link>
      <Link style={style} to={'/favorites'}>Favorites</Link>
      <button onClick={() => {
        handleNewColorTheme()
        setIcon(icon === 'sun' ? 'moon' : 'sun')
        }} style={buttonStyle}> { icon === 'sun' ? <BsFillMoonFill/>: <BsFillSunFill/>  }</button>
      </div>
    </nav>
  )
}

export default Navbar