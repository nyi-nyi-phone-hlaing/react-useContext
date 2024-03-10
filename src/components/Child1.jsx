import { useContext } from "react";
import { FirstContext } from "../context/FirstContext";

const Child1 = () => {
  let { liveIn } = useContext(FirstContext);
  return (
    <section>
      <h1>Child 1</h1>
      <p>Live in {liveIn}</p>
    </section>
  );
};

export default Child1;
