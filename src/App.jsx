import FristContextProvider from "./context/FirstContext";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";
import "./index.css";
function App() {
  return (
    <section className='App'>
      <FristContextProvider>
        <Child1 />
        <Child2 />
        <Child3 />
      </FristContextProvider>
    </section>
  );
}

export default App;
