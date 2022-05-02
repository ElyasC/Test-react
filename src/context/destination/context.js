import { createContext, useReducer, useEffect } from "react";
import Reducer from "./reducer";


const initialState = {
  items: []
};
const localState = JSON.parse(localStorage.getItem("state"));

export const DestinationsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <DestinationsContext.Provider value={[state, dispatch]}>
      {children}
    </DestinationsContext.Provider>
  )
};


export const DestinationsContext = createContext(initialState);

