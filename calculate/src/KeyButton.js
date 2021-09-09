import React, { Component } from 'react';
import '../src/App.css'

class KeyButton extends Component {
    PressButton = (event) =>{
     this.props.PressButton(event.target.name);
    }
    render() {
        return (
            <div className="button shadow-lg p-3 mb-5 bg-body rounded" >
                
                <button name="+" onClick={this,this.PressButton} type="button" class="btn btn-outline-primary">+</button>
                <button name="*" onClick={this,this.PressButton} type="button" class="btn btn-outline-primary">*</button>
                <button name="/" onClick={this,this.PressButton} type="button" class="btn btn-outline-primary">/</button>
                <button name="-" onClick={this,this.PressButton} type="button" class="btn btn-outline-primary">-</button>
                <button name="1" onClick={this,this.PressButton} type="button" class="btn btn-outline-dark">1</button>
                <button name="2" onClick={this,this.PressButton} type="button" class="btn btn-outline-dark">2</button>
                <button name="3" onClick={this,this.PressButton} type="button" class="btn btn-outline-dark">3</button>
                <button name="=" onClick={this,this.PressButton} type="button" class="btn btn-outline-primary">=</button>
                <button name="4" onClick={this,this.PressButton} type="button" class="btn btn-outline-dark">4</button>
                <button name="5" onClick={this,this.PressButton} type="button" class="btn btn-outline-dark">5</button>
                <button name="6" onClick={this,this.PressButton} type="button" class="btn btn-outline-dark">6</button>
                <button name="C" onClick={this,this.PressButton} type="button" class="btn btn-danger" >C</button>
                <button name="7" onClick={this,this.PressButton} type="button" class="btn btn-outline-dark">7</button>
                <button name="8" onClick={this,this.PressButton} type="button" class="btn btn-outline-dark">8</button>
                <button name="9" onClick={this,this.PressButton} type="button" class="btn btn-outline-dark">9</button>
                <button name="0" onClick={this,this.PressButton} type="button" class="btn btn-outline-dark">0</button>
   
            </div>
        );
    }
}

export default KeyButton;