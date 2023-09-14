import { useContext } from 'react';
import React from 'react'
import Card from '../Components/Card'
import { Context } from '../Components/utils/Context';
import { useEffect } from 'react';




const Home = () => {
  
  const { state , fetchData } =  useContext(Context)
  
  const style = {
    backgroundColor: state.theme === 'light' ? "#FFFFFF" : "#757575" , 
    color: state.theme === 'light' ? "#000000" : "#000000"
  }

  const { data } = state
  
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <main style={style}>
    <div className='home'>
      <h1>Home</h1>
      <div>
        <Card data={ data }/>
      </div>
    </div> 
    </main>
  )
}

export default Home


