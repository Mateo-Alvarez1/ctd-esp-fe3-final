import React, { useContext } from "react";
import doctor from '../images/doctor.jpg'
import { Link } from "react-router-dom";
import { Context } from "./utils/Context";
import {AiFillStar } from "react-icons/ai";

const Card = ({ data }) => {

  const { handleNewFav } = useContext(Context);
  

  return (
    <div className="cardContainer">
      {data.map((item) => (
        <div className="card" key={item.id}>
          <Link to={`/dentists/${item.id}`}>
            <img className="cardImage" src={doctor} alt="medico" />
            <h1 className="cardH1">{item.name}</h1>
            <p>{item.username}</p>
          </Link>
          <button  className="favButton" onClick={() => handleNewFav(item)} >
            <AiFillStar className='favIcon' />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
