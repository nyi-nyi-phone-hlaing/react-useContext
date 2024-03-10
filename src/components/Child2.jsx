import React, { useContext } from "react";
import { FirstContext } from "../context/FirstContext";

const Child2 = () => {
  let { userName, liveIn } = useContext(FirstContext);
  return (
    <section>
      <h1>Child 2</h1>
      <p>Company name is {userName}</p>
      <p>Live in {liveIn}</p>
    </section>
  );
};

export default Child2;
