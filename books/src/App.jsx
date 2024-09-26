import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Navigation from './Pages/Navigation.jsx';
import NoPage from './Pages/NoPage';


function App() {
  return (
<div classname='App'>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NoPage />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
</div>
  );
}

export default App;

