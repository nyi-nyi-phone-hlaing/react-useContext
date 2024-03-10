import { createContext, useState } from "react";

export const FirstContext = createContext(null);

const FristContextProvider = (props) => {
  let [num, setNum] = useState(0);
  let userName = "Codelab MM";
  let liveIn = "Mandalay";
  return (
    <FirstContext.Provider value={{ userName, liveIn, num, setNum }}>
      {props.children}
    </FirstContext.Provider>
  );
};

export default FristContextProvider;
