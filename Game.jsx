import React from 'react';

const Block=React.createClass({
	propTypes: {
        onClick: React.PropTypes.func.isRequired,
        isSelected: React.PropTypes.bool
    },
    getDefaultProps: function() {
        return {
            isSelected: false
        };
    },
	getInitialState:function() {
		return {
			clickFlag:false
		}
	},
	clickerEvent:function() {
		this.setState({
			clickFlag:!this.state.clickFlag
		});
	},
	render:function() {
		var liStyle={
			background:'green'
		};

		if(this.props.isSelected || this.state.clickFlag){
			liStyle.background='blue';
		}

		return(
			<div className='blocks' onClick={this.props.onClick} onMouseEnter={this.clickerEvent} onMouseLeave={this.clickerEvent} style={liStyle}>{this.props.keys}</div>  
		);
	}


});


const Game=React.createClass({

	getInitialState:function() {
		return{
			selectedBlock:null
		};
	},

	clickHandler:function(id){
		this.setState({
			selectedBlock:id
		});
	},

	render(){
		let props=this.props;

		const changeBlocks=function(blockNumber){
			console.log(blockNumber);
		}

		var displayTotalBlocks=props.totalBlocks.map(function(block,ids) {
			var is_selected=this.state.selectedBlock==ids;
			return(
				<Block isSelected={is_selected} keys={ids} onClick={this.clickHandler.bind(this,ids)}></Block>
			);
		}.bind(this));	

		return(
			<div className='fullContainer'>				
				{displayTotalBlocks}
			</div>
		);
	}
});


class GameContainer extends React.Component{
	
	constructor(props){		
		super(props);
		this.state={result:{}};
	}

	render(){
		let totalBlocks1=[1,2,3,4,5,6,7,8,9],arraySelectedBoxes1=[3,5,9];
		return(
			<div className='GameContainer'>
				<Game selected={arraySelectedBoxes1} totalBlocks={totalBlocks1}></Game>	
			</div>
		)
	}


}

export default GameContainer;

























// const displayTotalBlocks=props.totalBlocks.map(function(bl) {
// 			return(
// 				<div className={'blocks '+ (props.selected.indexOf(bl)!=-1 ? 'colors' : 'nocolor' )} key={bl} onClick={()=>changeBlocks(bl)}>{bl}</div>
// 			);
// 		})







// let totalBlocks=[{
		// 	display:1,
		// 	alpha:1
		// },{
		// 	display:2,
		// 	alpha:2
		// },{
		// 	display:3,
		// 	alpha:3
		// },{
		// 	display:4,
		// 	alpha:4
		// },{
		// 	display:5,
		// 	alpha:5
		// },{
		// 	display:6,
		// 	alpha:6
		// },{
		// 	display:7,
		// 	alpha:7
		// },{
		// 	display:8,
		// 	alpha:8
		// },{
		// 	display:9,
		// 	alpha:9
		// }];

		// let arraySelectedBoxes=[{
		// 	display:2,
		// 	alpha:2
		// },{
		// 	display:5,
		// 	alpha:5
		// },{
		// 	display:9,
		// 	alpha:9
		// }];