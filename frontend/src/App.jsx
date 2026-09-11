import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './css/General.css'
import Home from './Pages/Home'
import ProjectDetails from './Pages/ProjectDetails';
import Projects from './Pages/Projects'
import Stats from "./components/Stats";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project-details' element={<ProjectDetails />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/stats' element={<Stats />} />
      </Routes>
    </>
  )
}

export default App
