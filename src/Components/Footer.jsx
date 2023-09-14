import React from 'react'
import { useContext } from 'react'
import { Context } from './utils/Context'

const Footer = () => {

 const { state  } =  useContext(Context)

 const style = {
  backgroundColor: state.theme === "light" ? "#D4D4D4" : "#555555",
 }

  return (
    <footer style={style}>
        <p>Powered by <b>Mateo Alvarez</b></p>
    </footer>
  )
}

export default Footer
