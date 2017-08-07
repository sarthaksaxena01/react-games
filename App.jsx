import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
            	<li>Home</li>
            	<li>About</li>
            	<li>Contact</li>

            </ul>

            {this.props.children}

         </div>
      );
   }
}

export default App;