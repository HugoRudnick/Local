import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './Actions/Store';
import { Provider, connect, link } from 'react-redux';
import Usuario from './Components/Usuarios';
 import Genero from './Components/Generos';
import Filme from './Components/Filmes';
import Locacao from './Components/locacaos';
import { Container } from "@material-ui/core";
import { ToastProvider } from 'react-toast-notifications'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <Provider store={ store }>
      <ToastProvider autoDismiss={true}>
        <Container maxWidth = "lg">
        <div>
          <ul>
            <li><Link to="/usuario">Usuários </Link></li>
            <li><Link to="/genero">Gêneros </Link></li>
            <li><Link to="/filme">Filmes </Link></li>
            <li><Link to="/locacao">Locações </Link></li>
          </ul>
        </div>
        <hr/>
        <Switch>
          <Route path="/usuario" exact component={ Usuario } />
          <Route path="/genero" exact component={ Genero } />
          <Route path="/filme" exact component={ Filme } />
          <Route path="/locacao" exact component={ Locacao } />
        </Switch>
        </Container>
      </ToastProvider>
    </Provider>
    </Router>
  );
}

export default App;
