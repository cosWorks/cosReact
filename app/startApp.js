import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import CompFirst from './components/firstComp';
import CompSecond from './components/secondComp';
import App from './components/firstComp';

/**
 * Startup Router - Initialisierungen für die einzelnen Componenten
 * Danach wird der Router bzw. die Componente an das DIV Tag app angebunden.
 * Die "Startseite" befinden sich in htdocs/index.html
 * @type {XML}
 */
const markup = (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/CompFirst' component={CompFirst}/>
            <Route path='/CompSecond' component={CompSecond}/>
        </Switch>
    </BrowserRouter>
);


hydrate(markup, document.getElementById('app'));