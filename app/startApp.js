import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import FirstComponentContainer from './container/firstComp';
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk';
import CompSecond from './components/secondComp';
import appReducer from './reducer/rootReducer'
import {Provider} from 'react-redux'

/**
 * Startup Router - Initialisierungen für die einzelnen Componenten
 * Danach wird der Router bzw. die Componente an das DIV Tag app angebunden.
 * Die "Startseite" befinden sich in htdocs/index.html
 * @type {XML}
 */

/*
    Bekanntmachung des Stores (Redux).
    createStore legt den Store an.
    Der Parameter appReducer bindet alle angegeben Reducer an.
    Somit sieht der Store in unserem Beispiel so aus:
    cos {
        ichBinEinProp: 'init'
        }
    Parameter compose wird später behandlet.... Ist für den jetzigen Zeitpunkt noch nicht wichtig.
    Die Parameter window.devToolsExtension schalten die Tools von Chrome für Redux ein.
 */
const store = createStore(appReducer, compose(applyMiddleware(thunkMiddleware)),window.devToolsExtension ? window.devToolsExtension() : f => f);

const markup = (
    /*
        Die Komponente Provider bindet den Store dann an die "Kinder" der Anwendung (Children)
     */
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={FirstComponentContainer}/>
                <Route path='/CompFirst' component={FirstComponentContainer}/>
                <Route path='/CompSecond' component={CompSecond}/>
            </Switch>
        </BrowserRouter>
    </Provider>
);


hydrate(markup, document.getElementById('app'));