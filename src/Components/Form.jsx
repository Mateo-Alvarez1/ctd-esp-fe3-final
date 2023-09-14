import React, { useState } from "react";


  const Form = () => {


    const [message, setMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [formState, setFormState] = useState({
      name:'',
      email:''
  })

  const onInputChange = ({ target }) =>{
    setFormState(prevState =>({
      ...prevState,
      [target.name]:target.value
    }))
  }

  const onHandleSubmit = ( e ) => {
    e.preventDefault();
    const newInput = formState.name.trim()
    if(newInput.length <= 2){
      setErrorMessage(true)
      return
    };
    setMessage(true)
  }


  return (
    <div className="formContainer">
      <form onSubmit={onHandleSubmit}>
        <label htmlFor="name">Nombre Completo</label>
        <input 
          id="name"
          type="text" 
          placeholder="Nombre Completo"
          name="name"
          onChange={onInputChange}
          />
           <label htmlFor="email">Correo Electronico</label>
           <input 
          type="email" 
          placeholder="Correo@gmail.com"
          name="email"
        
          onChange={onInputChange}
          />
          <button type="submit">Send Form</button>
      </form>
      { errorMessage && <p style={{ color:'red' ,textAlign:'center' , fontWeight:'bold'}}>Por favor ingrese un nombre valido</p>}
      { message === true && errorMessage == false ?  <h3 style={{ textAlign:'center'}}>Gracias {formState.name} por registrarte, pronto te contactaremos via mail</h3> : ''}

    </div>
  );
};

export default Form;
