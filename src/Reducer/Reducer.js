


const reducerInfo = (state={counter:0}, action)=>{
    //debugger;
switch(action.type){
    case 'INCREMENT':
    state.counter++;
    console.log(state.counter);
    return {counter:state.counter++};
    case 'DECREMENT':
    if(state.counter>0){
        state.counter--;
    }
    return {counter:state.counter--};
    // break;
    default: 
        return state;
}

}

export default reducerInfo;