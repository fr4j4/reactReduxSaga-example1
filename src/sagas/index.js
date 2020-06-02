import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import actions from '../reducers/actions'
function* onCounterChanged(action){
    switch(action.type){
	default:
	    console.log('Counter changed!')
    }
}

function* mySaga(){
    //yield takeLatest(actions.INCREMENT_COUNTER,onCounterChanged)
    yield takeEvery(actions.INCREMENT_COUNTER,onCounterChanged)
}

export default mySaga;
