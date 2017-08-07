import React from 'react';
import axios from 'axios';

var About =React.createClass ({
	
	getInitialState:function(){
		return{
			res:[]
		}
	},

	componentDidMount:function(){
		var _this=this;
		var config = {
  			headers: {'dataType': 'json'}
		};
		this.serviceRequest=axios.get("http://localhost:8080/tech.json",config).then(function(result){
			//console.log(result.data);
			_this.setState({
				res:result.data
			});
			console.log(_this.state.res);
			//var result=JSON.parse(_this.state.res);
			//console.log("result final =",result);
		})
	},
	// },

	// componentWillUnmount:function(){
	// 	this.serviceRequest.abort();
	// },

   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
});

export default About;