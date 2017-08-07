import React from 'react';

class Contact extends React.Component {
	constructor(props){
		super(props);
		this.state={mobile:'',email:''};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}


	handleChange(event){
		const target=event.target;
		const value=target.value;
		const name=target.name;

		this.setState({
			[name]:value
		});
	}

	handleSubmit(event) {
    	//alert('A name was submitted: ' + this.state.email+" and "+this.state.mobile);
    	event.preventDefault();
    	if(this.state.email.slice(this.state.email.length-3,this.state.email.length)!=='.in'){
    		alert('wrong email');
    	}
    	if(this.state.mobile.slice(0,3)!=='+91'){
    		alert('wrong mobile');
    	}
  	}

	


   render() {
      return (
       <div>
            <h1>Contact Us Form</h1>
         	<form onSubmit={this.handleSubmit}>
         		<label>
         			Email:
         			<input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
         			
         		</label>
         		<label>
         			Mobile Number:
         			<input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
         			
         		</label>
         		<label>
         			Dummy:
         			<textarea name="dummy" value={this.state.dummy}	minLength="3" maxLength="7" onChange={this.handleChange}></textarea>
         			
         		</label>
         		<input type="submit" value="Submit" />
         	</form>
       </div>
      )

   }
}

export default Contact;
