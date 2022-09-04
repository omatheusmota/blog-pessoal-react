import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './paginas/home/Home'
import './App.css';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTemas from './components/temas/listatemas/ListaTemas';
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens';


function App() {
  return (
    <Router> {/* satélite */}

      <Navbar />

      <Routes> {/* GPS */}

        <Route path='/home' element={<Home />} /> {/* Rua */}

        <Route path='/cadastrousuario' element={<CadastroUsuario />} /> {/* Rua */}

        <Route path='/' element={<Login />} /> {/* Rua */}

        <Route path='/login' element={<Login />} /> {/* Rua */}

        <Route path='/temas' element={<ListaTemas />} /> {/* Rua */}

        <Route path='/posts' element={<ListaPostagens />} /> {/* Rua */}

      </Routes>

      <Home />

      <Footer />

    </Router>
  );
}

export default App;