import React from 'react';

export default class CompFirst extends React.Component {

    /**
     * Konstruktur. Wird beim Erzeugen der Componente automatisch aufgerufen.
     * Auch hier gilt... erste Zeile ist immer super(); !
     */
    constructor() {
        super();
    }

    /**
     * !!Bevor!! die Componente angezogen wird, wird diese Methode ausgeführt
     */
    componentWillMount() {

    }

    /**
     * !!Componente bereits angezogen (gemounted)!! Hier kann Funktionalität eingebaut werden wenn die render Methode ausgeführt wurde.
     */
    componentDidMount() {
    }

    /**
     * Sowas wie ein Destructor. Sobald React die Componente aus dem "DOM" entfernt können hier Funktionalitäten eingebaut werden die
     * für das "Aufräumen" verantwortlich sind.
     */
    componentWillUnmount() {
    }


    /**
     * Methode für das rendern des HTML Fragments der Componente
     */
    render() {
        return <div>
            <p> Ich bin die zweite Componente</p>
        </div>

    }
}
