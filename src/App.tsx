import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTemas from './components/temas/listatemas/ListaTemas';
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>

      <Router> {/* satélite */}

        <Navbar />

        <Routes> {/* GPS */}

          <Route path='/home' element={<Home />} /> {/* Rua */}

          <Route path='/cadastrousuario' element={<CadastroUsuario />} />

          <Route path='/' element={<Login />} />

          <Route path='/login' element={<Login />} />

          <Route path='/temas' element={<ListaTemas />} />

          <Route path='/posts' element={<ListaPostagens />} />

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />

        </Routes>

        <Home />

        <Footer />

      </Router>

    </Provider>
  );
}

export default App;