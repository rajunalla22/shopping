import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './components/style.css';
import { SignUpPage } from './components/signup';
import { LoginPage } from './components/login';

function App() {
  return (
    <div>
      <h1>Welcome to Online Shopping!!!!</h1>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
