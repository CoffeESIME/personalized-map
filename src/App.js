import Main from "./components/main/mainComponent";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/HeaderComponent";
import  CreateForm  from "./components/form/CreateForm";
import { Description } from "./components/Description/Description";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Description/>}/>
        <Route path="/map" element={<Main />} />
        <Route path="/map/create" element={<CreateForm />} />
      </Routes>
    </div>
  );
}

export default App;
