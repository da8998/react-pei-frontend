import './App.css';
import { Routes, Route } from "react-router-dom";
import Root from './components/Root';
import SharPei from "./components/SharPei";
import ErrorPage from './components/ErrorPage';
import SharPeiByName from "./components/SharPeiByName";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route index element={<Root />} />
          <Route path="/" element={<Root />} />
          <Route path="/sharpei" element={<SharPei />}>
            <Route path=":name" element={<SharPeiByName />}></Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    
    </div>
  );
}

export default App;
