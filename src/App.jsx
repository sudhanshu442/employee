import React ,{useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from "./Components/header";
import Home from "./Components/home";
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
