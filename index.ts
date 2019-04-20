import React, { useReducer } from 'react';
import './App.css';

interface CountState {
	count: number;
}

const reducer = (state: { count: number }, action: { type: string }): CountState => {
	console.log(action);
	console.log(state);
	switch (action.type) {
		case 'ADD':
			return { ...state, count: state.count + 1 };
		case 'SUBTRACT':
			return { ...state, count: state.count - 1 };
		case 'RESET':
			return { ...state, count: 0 };
		default:
			return state;
	}
};

const buttonStyles = {
	padding: '10px',
	background: 'dodgerblue',
	color: 'white',
	borderRadius: '4px',
	margin: '1em auto',
	width: '100px'
};

// const Counter: React.FunctionComponent = () => {
// 	const [state, dispatch] = useReducer(reducer, { count: 0 });
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				Current count: {state.count}
// 				<button style={buttonStyles} onClick={() => dispatch({ type: 'ADD' })}>
// 					ADD
// 				</button>
// 				<button style={buttonStyles} onClick={() => dispatch({ type: 'SUBTRACT' })}>
// 					SUBTRACT
// 				</button>
// 				<button style={buttonStyles} onClick={() => dispatch({ type: 'RESET' })}>
// 					RESET
// 				</button>
// 			</header>
// 		</div>
// 	);
// };

export default Counter;
