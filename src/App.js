import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
