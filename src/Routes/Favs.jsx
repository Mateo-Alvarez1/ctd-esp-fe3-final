import React  from "react";
import doctor  from "../images/doctor.jpg";
import { Context } from "../Components/utils/Context";
import { useContext } from "react";
import {AiFillStar } from "react-icons/ai";

const Favs = () => {

  
const { handleRemoveFav } = useContext(Context)

const data = localStorage.getItem('favs')
const formatData = JSON.parse(data)

const { state  } =  useContext(Context)
  
const style = {
  backgroundColor: state.theme === 'light' ? "#FFFFFF" : "#757575" , 
  color: state.theme === 'light' ? "#000000" : "#000000"
}


  return (
    <div style={style} >
      <h1 style={{ paddingTop: '50px'}}>Dentists Favs</h1>
      <div className="card-grid">
      {
        formatData.map( item => (
          <div className="card" key={item.id}>
            <img className="cardImage" src={doctor} alt="medico" />
            <h1 className="cardH1">{item.name}</h1>
            <p>{item.username}</p>
            <button className="favButton" onClick={ () => handleRemoveFav(item.id)}>
            <AiFillStar className='favIcon' />
        </button>
        </div>
        ))
      }
       
      </div>
    </div>
  );
};

export default Favs;
