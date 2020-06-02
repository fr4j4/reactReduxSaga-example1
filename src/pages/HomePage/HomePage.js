import React from 'react'
import Button from '@material-ui/core/Button';
import {useSelector, useDispatch} from 'react-redux'
const CounterComponent = ({value}) => (
    <div>value:  {value}</div>
)

const Page = ({...props}) => {
    const count_val = useSelector(state => state.counter)
    const dispatch  = useDispatch()
    const onButtonPressed = (event) => {
	console.log('Button pressed')
	dispatch({type:'INCREMENT_COUNTER'})
    }

    return(
	<div>
	    <CounterComponent value={count_val}/>
	    <Button onClick={onButtonPressed}>Increment Counter</Button>
	</div>
    )
}

export default Page
