import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    // exact é usado para dizer que o caminho de acesso precisa ser exato = /
    // pois se não irá atrapalhar o restante das rotas por começar com /
    return(
        <BrowserRouter>
            <Switch>               
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}