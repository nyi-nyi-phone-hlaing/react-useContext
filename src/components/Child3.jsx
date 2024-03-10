import { useContext } from "react";
import { FirstContext } from "../context/FirstContext";

const Child3 = () => {
  let { userName } = useContext(FirstContext);
  return (
    <section>
      <h1>Child 3</h1>
      <p>Company name is {userName}</p>
    </section>
  );
};

export default Child3;
