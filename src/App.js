import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './components/Movies';
import Login from './components/Login';
import Search from './components/Search';
import Feedback from './components/Feedback';


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Movies/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/feed' element={<Feedback/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
