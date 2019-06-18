// App.js é um componente, que é um arquivo js que tem como obrigação retornar um conteúdo jsx.

import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
