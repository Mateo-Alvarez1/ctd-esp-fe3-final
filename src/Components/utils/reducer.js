

export const reducer = ( initialState , action ) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return { ...initialState, theme: initialState.theme === 'light' ? 'dark' : 'light' };
        case "API_DATA":
          return { ...initialState, data: action.payload };;
        default:
            return initialState;
    }
} 

export const favReducer = ( initialState, action) => {
    switch (action.type) {
      case "ADD_FAV":
       return [ ...initialState, action.payload ];
      case "REMOVE_FAV":
        return initialState.filter( item => item.id !== action.payload)
      default:
        return initialState;
    }
  };