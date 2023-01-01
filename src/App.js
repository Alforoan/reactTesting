import Tasks from "./components/Tasks";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quotes from "./components/Quotes";
import Navbar from "./components/Navbar";
import Important from "./components/Important";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/important" element={<Important />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </>
  );
}

export default App;
