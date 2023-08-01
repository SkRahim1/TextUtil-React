// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
    {/* <About></About>
    <Form></Form> */}
    <Routes>
      <Route path="About" element={<About/>}/>
      
      <Route path="" element={<TextForm/>}/>

    </Routes>
    </Router>
    </>
  );
}

export default App;
