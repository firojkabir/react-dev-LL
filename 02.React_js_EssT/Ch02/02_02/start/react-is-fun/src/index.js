import React from 'react';
import ReactDOM from 'react-dom';

var style = {
	backgroundColor: '#221b24',
	color: '#6d8d89',
	fontFamily: 'Arial'
}

//chapter 02-03
// const title = React.createElement(
// 	'h1',
//   	{id: 'title', className: 'header', style: style},
//   	'Hello World'
// )

// ReactDOM.render(
// 	title,
// 	document.getElementById('root')
// )

//chapter 02-04
ReactDOM.render(
	<div style={style}>
		<h1>Hello World</h1>
		<p>We're glad to here.</p>
	</div>,
	document.getElementById('root')
)

