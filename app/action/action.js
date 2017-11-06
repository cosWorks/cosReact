/*
    Action Methode zum Verändern des States
    Hier wird ein neuer Inhalt über die Methode ChangePropValue in den State übergeben
 */

export function changePropValue(newValue) {
    return {
        type: "CHANGEVALUE", // String-Wert für später im Reducer zu Wissen von wo man her kommt.
                            // Im Reducer kann dann später auf action.type auf diesen Wert zugegriffen werden.
        newValue   //Neuer Wert der später mit action.newValue im Reducer ausgelesen werden kann
    }
}