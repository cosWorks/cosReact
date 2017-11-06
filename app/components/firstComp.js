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
     * Beim Drücken auf den Button wird die Methode ChangePropInStore ausgeführt.
     * Diese ändert den Wert auf "neuer Inhalt" ab
     */
    _changePropInStore() {
        this.props.changePropValue("Neuer Inhalt",
            ()=>console.log("und ich bin ein callback"));
    }


    /**
     * Methode für das rendern des HTML Fragments der Componente
     */
    render() {
        return <div>
            <p>Dies ist die erste Componente</p>
            <CompSecond />
            <p><Link to={'/CompSecond'}>Link Beispiel</Link></p>
            <p>Inhalt von ichBinEinProp: {this.props.ichBinEinProp}</p>
            <button onClick={this._changePropInStore.bind(this)} type="button">change Store</button>
        </div>
    }
}
