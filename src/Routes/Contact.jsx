import React, { useContext } from 'react'
import Form from '../Components/Form'
import { Context } from '../Components/utils/Context'

const Contact = () => {
    
  const { state } =  useContext(Context)
  
  const style = {
    backgroundColor: state.theme === 'light' ? "#FFFFFF" : "#757575" , 
  }


  return (
    <div style={style} className='contactContainer'>
      <h2>Want to know more?</h2>
      <p >Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact