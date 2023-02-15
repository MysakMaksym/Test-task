import "../styles/App.scss";
import NewRent from "./NewRent.js";
import Apartments from "./Apartments.js";

function App() {
  return (
    <div className="App">
      <h1 className="header">Apartments Marketplace</h1>
      <NewRent />
      <Apartments />
    </div>
  );
}

export default App;
