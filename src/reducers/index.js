import actions from './actions'


const initialState = {
    counter: 0
}

const mainReducer = (state = initialState,action) => {
    switch(action.type){
	case actions.INCREMENT_COUNTER:
	    return {...state, counter: state.counter + 1}
	default:
	    return state;
    } 
}

export default mainReducer;

