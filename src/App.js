import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Innovative from "./Components/Innovative";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/innovative" Component={Innovative} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
