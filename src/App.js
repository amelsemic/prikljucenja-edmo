import "./App.css";
import NewConnectionForm from "./componentsNoviNalog/newConnectionForm";
import Popis from "./componentsPopisNaloga/Popis";
import pov from "./imgs/povecanje.svg"
function App() {
  return (
    <div className="wrapper">
      <NewConnectionForm />
      <Popis/>
    </div>
  );
}

export default App;
