import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import ViewAll from './components/ViewAll';
import ViewMyPost from './components/ViewMyPost';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
      <Route path='/mypost' element={<ViewMyPost/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
