import Main from "./components/main/mainComponent";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/HeaderComponent";
import { CreateRoute } from "./components/form/CreateRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/map" element={<Main />} />
        <Route path="/map/create" element={<CreateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
