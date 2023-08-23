import reducer from "./reducer.js";
export default function logger(reducer) { 
    return (state, action, args) => { 
        var nextState = reducer(state, action, args); 
        if(action) { 
            console.group(action); 
            console.log('preState', state);
            console.log('action arguments', args); 
            console.log('nextState', state);
            console.groupEnd(); 
        }
        return nextState; 
    }
}