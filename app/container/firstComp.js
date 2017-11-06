import React from "react";
import {connect} from "react-redux";
import FirstComponent from "../components/firstComp";
import {changePropValue} from "../action/action";

/*
    Props die für den aktuellen Container aus dem State ausgelesen werden sollen.
 */
const mapStateToProps = state => {
    return {
        ichBinEinProp: state.cos.ichBinEinProp
    }
};

/*
    Methoden die zum Veraendern des States benutzt werden
 */
const mapDispatchToProps = dispatch => {
    return {
        changePropValue: (newPropValue,callbackfunc) => {
            dispatch(changePropValue(newPropValue))
            callbackfunc();
        }
    }

};

const FirstComponentContainer = connect(mapStateToProps, mapDispatchToProps)(FirstComponent);

export default FirstComponentContainer;
