import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Innovative from "./Components/Innovative";
import Home2 from "./Home2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/innovative" Component={Innovative} />
          <Route path="/home2" Component={Home2} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
