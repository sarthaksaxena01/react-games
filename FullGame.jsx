import React from 'react';

const Block=React.createClass({
	propTypes: {
        isSelected: React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            isSelected: false
        };
    },
  
	getInitialState:function() {
		return {
			clickFlag:false,

		}
	},

	clickerEvent:function() {
		if(this.props.checkGameStarts){
			this.setState({
				clickFlag:!this.state.clickFlag
			});
			this.props.handleColors(this.state.clickFlag);
		}
	},


	render:function() {
		var liStyle={
			background:'rgb(180, 206, 211)'
		};

		// if((this.state.clickFlag || (this.props.selectedAuto && !this.props.checkGameStarts))){
		// 	liStyle.background='blue';
		// }

		if(this.props.storedBlocks.indexOf(this.props.keys) != -1 || (this.props.selectedAuto && !this.props.checkGameStarts)){
			liStyle.background='blue';
		}

		return(
			<div className='blocks' onClick={this.clickerEvent} style={liStyle}>{this.props.keys}</div>  
		);
	}
});


const Game=React.createClass({

	getInitialState:function() {
		return{
			selectedBlock:null,
			storedBlocks:[],
			checkGameStarts:false,
			res:null
		};
	},

	startBlocks:function() {
    	this.setState({
    		checkGameStarts:true
    	});
    }, 



	componentDidMount:function() {
		var self=this;
		this.smallInterval=setTimeout(function() {
			this.startBlocks();
		}.bind(this),500);    	
    },

    componentWillReceiveProps:function() {
    	var self=this;
		this.smallInterval=setTimeout(function() {
			this.startBlocks();
		}.bind(this),500);
		this.setState({
			checkGameStarts:false,
			storedBlocks:[],
			res:null
		});  	
    },

    componentWillUnmount:function() {
    	clearTimeout(this.smallInterval);
    },


	handleColors:function(id,bool){
		this.setState({
			storedBlocks:!bool?this.state.storedBlocks.concat(id):this.state.storedBlocks.filter(function(item){ return item!=id})
		});		
	},

	checkResult:function() {
		if(this.state.storedBlocks.sort().join("")==this.props.selected.sort().join("")){
			this.setState({
				res:"Level Cleared"
			});
		}else{
			this.setState({
				res:"Oops!!! you lose"
			});
		}
	},

	render(){
		let props=this.props;
		//console.log(this.props.selected);

		var displayTotalBlocks=props.totalBlocks.map(function(block,ids) {
			var is_selected=this.state.selectedBlock==ids;
			var is_selectedAuto=this.props.selected.indexOf(ids)!=-1;

			return(
				<div className='block' key={ids}>
					<Block response={this.state.res} selectedAuto={is_selectedAuto} is_selected={is_selected} keys={ids} handleColors={this.handleColors.bind(this,ids)} checkGameStarts={this.state.checkGameStarts} storedBlocks={this.state.storedBlocks}></Block>
				</div>
			);
		}.bind(this));

		return(
			<div>
				<div className='fullContainer'>				
					{displayTotalBlocks}
				</div>
				<button className='resultButton' onClick={this.checkResult}>Check now</button>
				<div className='resultDisplay'>{this.state.res}</div>
				
			</div>
		);
	}
});


class GameContainer extends React.Component{
	
	constructor(props){		
		super(props);
		this.totalBlocks=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
		this.state={ selected:[2,4,10,13] };
	}

	shuffleElements() {
    	var copyArray=this.totalBlocks.slice(0);
    	for(var i=copyArray.length-1;i>0;i--){
    		var j=Math.floor(Math.random()*(i+1));
    		var temp=copyArray[i];
    		copyArray[i]=copyArray[j];
    		copyArray[j]=temp;
    	}
    	this.setState({
    		selected:copyArray.slice(0,4)
    	})
    }

	render(){
		return(
			<div className='GameContainer'>
				<button className='restartButton' onClick={this.shuffleElements.bind(this)}>Restart</button>
				<Game totalBlocks={this.totalBlocks} selected={this.state.selected}></Game>
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

