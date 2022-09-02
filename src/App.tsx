import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './paginas/home/Home'
import './App.css';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';


function App() {
  return (
    <Router> {/* satélite */}

      <Navbar />

      <Routes> {/* GPS */}

        <Route path='/home' element={ <Home /> } /> {/* Rua */}

        <Route path='/cadastrousuario' element={ <CadastroUsuario /> } /> {/* Rua */}

        <Route path='/' element={ <Login /> } /> {/* Rua */}

        <Route path='/login' element={ <Login /> } /> {/* Rua */}

        </Routes>

      <Home />

      <Footer />

    </Router>
  );
}

export default App;
