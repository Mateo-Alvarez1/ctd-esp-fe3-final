import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Components/utils/Context';


const Detail = () => {
 
  const { id } = useParams();
  const [data, setData] = useState()
  const { state  } =  useContext(Context)
  
  const style = {
    backgroundColor: state.theme === 'light' ? "#FFFFFF" : "#757575" , 
    color: state.theme === 'light' ? "#000000" : "#000000"
  }

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const dentistData = async() => {
    const res = await fetch(url)
    const data = await res.json();
    setData(data)
  }
  
  useEffect(() => {
      dentistData()
  }, [id])
  

  return (
    <div style={style}  className='detailContainer'>
      <h1>Detail Dentist id </h1>
       {
        data ? (
        <div className='containerTable'>
          <div>
            <h3>Name</h3>
            <p>{data.name}</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>{data.email}</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>{data.phone}</p>
          </div>
          <div>
            <h3>Website</h3>
            <p>{data.website}</p>
          </div>
        </div>
        ) : (
          <p>Cargando....</p>
        )
       } 
    </div>
  )
}

export default Detail