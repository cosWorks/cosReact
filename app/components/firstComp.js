import React from 'react';
import CompSecond from "./secondComp";
import { Link } from 'react-router-dom';

/**
 * Jede Komponente wird von React.Component abgeleitet
 */
export default class App extends React.Component {

    /**
     * Konstruktur. Wird beim Erzeugen der Componente automatisch aufgerufen.
     * Auch hier gilt... erste Zeile ist immer super(); !
     */
    constructor() {
        super();
    }


    /**
     * Methode für das rendern des HTML Fragments der Componente
     */
    render() {
        return <div>
            <p>Dies ist die erste Componente</p>
            <CompSecond />
            <p><Link to={'/CompSecond'}>Link Beispiel</Link></p>
        </div>
    }
}
