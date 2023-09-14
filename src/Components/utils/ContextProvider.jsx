import { useReducer } from "react";
import { favReducer, reducer } from "./reducer";
import { useEffect } from "react";
import { Context } from "./Context";
import swal from "sweetalert";

//* InitialState *//

const initialState = {
  theme: "light",
  data: [],
  favs: [],
};


export const ContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const [favs, dispatchFav] = useReducer(favReducer, initialState.favs);



//* HANDLERS *//

  const handleNewColorTheme = () => {
    const action = {
      type: "TOGGLE_THEME",
    };
    dispatch(action);
  };

  const handleNewFav = (fav) => {
    const action = {
      type: "ADD_FAV",
      payload: fav,
    };
    if(favs.find((favs => favs .id === fav.id)))return;
    swal({
      title: "Ready!",
      text: "Dentist successfully saved to favorites",
      icon: "success",
      button: "Continue",
    });
    dispatchFav(action);
  };

  const handleRemoveFav = ( id ) => {
    const action = {
      type: "REMOVE_FAV",
      payload: id,
    };
    dispatchFav(action);
  };



  //*FETCH*//

  const fetchData = async () => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await resp.json();
      const action = { type: "API_DATA", payload: jsonData };
      dispatch(action);
    } catch (error) {
      console.error("Error al obtener los datos", error);
    }
  };

  //*SSECONDARY EFFECTS*//

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  return (
    <Context.Provider value={{ state, handleNewColorTheme, handleNewFav, favs, fetchData , handleRemoveFav }}>
      {children}
    </Context.Provider>
  );
};
