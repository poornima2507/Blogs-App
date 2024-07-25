import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/add' element={<Add/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
