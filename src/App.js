import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
