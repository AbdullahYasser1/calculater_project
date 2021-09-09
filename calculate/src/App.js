import React, { Component } from 'react';
import KeyButton from './KeyButton';
import Display from './Display';
import '../src/App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={result:""}
    
  }

  PressButton =(ButtonNumber)=>{
    
    if(ButtonNumber === "="){
      this.calculate();


    }else if(ButtonNumber === "C"){
      this.reset();

    }else
    this.setState({result:this.state.result + ButtonNumber})
    
    
  };

  calculate =()=>{
    this.setState({result:eval(this.state.result)});
    
  }

  reset=()=>{
    this.setState({result:""})
  };

  render() {
    return (
      <div>
        <div className="App">
          <div className="calculate-body"v>

             <Display result={this.state.result} ></Display>
             <KeyButton PressButton={this.PressButton}></KeyButton>

     </div>
    </div>
      </div>
    );
  }
}

export default App;
