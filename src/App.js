import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './components/NavBar';
import MediaCard from './cardscomponents/Cards.js'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
        </div>
      </div>
    )
  }
}

export default App;
