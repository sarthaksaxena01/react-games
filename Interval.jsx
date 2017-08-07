import React from 'react';

class Timer extends React.Component{
	constructor(props){
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount(){
		var self=this;
		this.timerId=setInterval(function() {
			this.tick();
		}.bind(this),1000);
	}

	componentWillUnmount(){
		clearInterval(this.timerId);
	}

	tick(){
		this.setState({
			date:new Date()
		});
	}

	render(){
		return(
			<div>
				<h1>Hello, I am in interval class</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}

}

export default Timer;