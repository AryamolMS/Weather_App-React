import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './User/Home';
import Homepage from './User/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Homepage/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
