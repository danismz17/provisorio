import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

// Importa tus componentes
import Inicio from '../pages/Home/Home.jsx';
import Canales from '../pages/Canales/Canales.jsx';
import Eventos from '../pages/Eventos/Eventos.jsx';


// Define tu componente principal que contendrá las rutas
function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/inicio" component={Inicio} />
                    <Route path="/canales" component={Canales} />
                    <Route path="/eventos" component={Eventos} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
