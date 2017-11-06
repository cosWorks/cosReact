import initState from '../const/initState'

/*
    Name des Reducers hier "cos" bestimmt im state später das Objekt.
    Beispiel: Wenn der Reducer hier "cos" heisst, können später auf die einzelnen Werte mit
    state.cos.<prop> zugegriffen werden.
    Heisst der Reducer "eingabe1" so kann später mit state.eingabe1.<prop> zugegriffen werden.
 */
function cos(state = initState, action) {
    /*
        Switch zum Auswerten aus welcher Action Methode man kommt
     */
    switch (action.type) {
        case "CHANGEVALUE": {
            /*
                Es wird immer eine KOPIE!!! des States erzeugt, diese wird abgeändert und zurückgegeben.
             */
            return {
                ...state, //Kurform von Object.assign ... Kopie des States
                ichBinEinProp: action.newValue // Ändern des ichBinEinProp auf neuen Wert
            }
        }
        /*
            Wenn der action.type unbekannt ist, oder nicht angegeben wird,
            wird der state 1:1 zurück gegeben.
         */
        default:
            return state;

    }
}

export default cos;