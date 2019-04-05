import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../Actions/action';

let Counter = ({setState, stateObj, inc, dec})=>{
    return <div>
        <h1>{setState}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <label>Count: {setState}</label>
            </div>
}
const mapStateToProps = (state)=>({
    setState:state.counter,
    stateObj:state
});
const mapDispatchToProps = (dispatch)=>({
inc:()=> {dispatch(increment())},
dec:()=> {dispatch(decrement())}
});

Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default Counter;