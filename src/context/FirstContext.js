import { createContext } from "react";

export const FirstContext = createContext(null);

const FristContextProvider = (props) => {
  let userName = "Codelab MM";
  let liveIn = "Mandalay";
  return (
    <FirstContext.Provider value={{ userName, liveIn }}>
      {props.children}
    </FirstContext.Provider>
  );
};

export default FristContextProvider;
