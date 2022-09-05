import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './components/header/NavBar';
import MediaCard from './components/cardscomponents/Cards.js';
import ItemListContainer from './components/countercomponents/ItemListContainer.js';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


class App extends React.Component {
  render() {
    return(
      <div>
        <div>
          <ColorSchemesExample 
          title='steam'
          title2='categorias' 
          title3='iniciar sesion' 
          />
        </div>
        <div>
          <MediaCard 
          nombres='santi'
          descripcion='soy santi'
          />
          <MediaCard
          nombres='pepe'
          descripcion='el pepe'
          />
          <div>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
