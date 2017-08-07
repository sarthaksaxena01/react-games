import React from 'react';

const Block=React.createClass({	
	render:function() {
		let props=this.props;
		return(
			<div className='blocks gamer' style={{background:props.blockColor}}></div>
		);
	}
});

const Game=React.createClass({

	render(){
		let props=this.props;
		var elementStarting=props.starter;

		var displayTotalBlocks=props.totalBlocks.map(function(blocks,ids) {
			return(
				<div className='block' key={ids}>
					<Block blockColor={blocks}></Block>
				</div>
			);
		})

		return(
			<div className='fullContainer'>
				{displayTotalBlocks}
			</div>
		);
	}
});


class GameColor extends React.Component{
	constructor(props){
		super(props);
		this.totalBlocks=['red','gray','yellow','brown','red','red','yellow','brown','gray','brown','red','gray','red','brown','yellow','gray'];
		this.state={starter:0,storageArray:[0],colorWatch:this.totalBlocks[0],totalBlocksChange:this.totalBlocks};
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
    		totalBlocksChange:copyArray.slice(0),
    		colorWatch:this.state.totalBlocksChange[0],
    		storageArray:[0],
    	})
    }

	checkAdjacentElements(index,joined) {
		index=Number(index);
		var indexMatched=[];
		

		if(index%4 != 0 && this.state.totalBlocksChange[index-1]==this.state.colorWatch && joined.indexOf(index-1)==-1)
			indexMatched.push(index-1);
		if((index+1)%4 != 0 && this.state.totalBlocksChange[index+1]==this.state.colorWatch && joined.indexOf(index+1)==-1)
			indexMatched.push(index+1);
		if(index<=11 && this.state.totalBlocksChange[index+4]==this.state.colorWatch && joined.indexOf(index+4)==-1)
			indexMatched.push(index+4);
		if(index>3 && this.state.totalBlocksChange[index-4]==this.state.colorWatch && joined.indexOf(index-4)==-1)
			indexMatched.push(index-4);
		return indexMatched;

	}

	adjacentElementFound(ind,joined,colorProvided){
		var self=this,j=0;
		var adjacentElementFoundIndex=this.checkAdjacentElements(ind,joined);

		for(var i=0;i<adjacentElementFoundIndex.length;i++){
			joined.push(adjacentElementFoundIndex[i]);
			this.adjacentElementFound(adjacentElementFoundIndex[i],joined,colorProvided);
		}
		this.setState({
	 		storageArray:joined,
	 		colorWatch:colorProvided,
	 		totalBlocksChange:self.state.totalBlocksChange.map(function(elem,ind,arr){
	 			if(joined.indexOf(ind)!=-1)
	 				return colorProvided;
	 			else
	 				return elem;
	 		})
		 });
		 
	}


	render(){
		var self=this,j=0;

		var resStyle = {
		  marginTop:'10px'
		};

		var resultDisplays=function() {
			for(j;j<self.state.totalBlocksChange.length;j++){
				if(self.state.totalBlocksChange[j+1]==self.state.totalBlocksChange[j])
					continue;
				else
					break;
			}
			if(j==self.state.totalBlocksChange.length-1){
				return(
					<div className='resultDisplay' style={resStyle}>Level Cleared !!!</div>
				);
			}else{
				return(
					<div>
						<button className='buttons btn-gray' onClick={self.adjacentElementFound.bind(self,0,[0],'gray')}>Gray</button>
						<button className='buttons btn-yellow' onClick={self.adjacentElementFound.bind(self,0,[0],'yellow')}>Yellow</button>
						<button className='buttons btn-brown' onClick={self.adjacentElementFound.bind(self,0,[0],'brown')}>Brown</button>
						<button className='buttons btn-red' onClick={self.adjacentElementFound.bind(self,0,[0],'red')}>Red</button><br/>
					</div>
				);
			}
		}
		
		var displayGame=function() {	
			return(
				<Game totalBlocks={self.state.totalBlocksChange} starter={self.starter} ></Game>	
			);
		}

		return(
			<div className='GameContainer'>
				<button className='restartButton' onClick={this.shuffleElements.bind(this)}>Restart</button>
				{displayGame()}
				{resultDisplays()}
			</div>
		)
	}

}


export default GameColor; 
