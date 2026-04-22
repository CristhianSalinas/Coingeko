import { BrowserRouter as Router, Route, Routes, Link } from 'react-router';


import Informativa from './informativa'
import Original from './original'
import Usuario from './usuario'
import Home from './home'
import Favoritos from './favoritos'
import Equipo from './equipo';

import hogar from './img/hogar.svg';
import CorazonIMG from './img/corazon.svg';
import MenuIMG from './img/menu-hamburguesa.svg';
import Originalimg from './img/Original.svg';
import User from './img/usuario.svg';


import './App.css'

function App() {


  return (
    <>
     <Router>
      <nav className='c-menu'>
        <Link to="/"><img src={hogar} /><p>Home</p></Link>
        <Link to="/favoritos"><img src={CorazonIMG} /><p>Favoritos</p></Link>
        <Link to="/original"><img src={Originalimg} /><p>Original</p></Link>
        <Link to="/informativa"><img src={MenuIMG} /><p>Informativa</p></Link>
        <Link to="/usuario"><img src={User} /><p>Usuario</p></Link>   
      </nav>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Favoritos" element={<Favoritos/>} />
            <Route path="/informativa" element={<Informativa/>} />
            <Route path="/usuario" element={<Usuario/>} />
            <Route path="/original" element={<Original/>} />
            <Route path="/equipo/:equipo" element={<Equipo/>} />
          </Routes>    
       </Router>  
    </>
  )
}

export default App
