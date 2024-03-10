import { useContext } from "react";
import { FirstContext } from "../context/FirstContext";

const Child3 = () => {
  let { userName, num, setNum } = useContext(FirstContext);
  return (
    <section>
      <h1>Child 3</h1>
      <p>Company name is {userName}</p>
      <div>
        <p>{num}</p>
        <button
          onClick={() => {
            setNum((prev) => prev + 1);
          }}>
          +1
        </button>
      </div>
    </section>
  );
};

export default Child3;
