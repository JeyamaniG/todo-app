import React, { Component } from "react"
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter: 0
        }
        this.increment=this.increment.bind(this);

    }
    render(){
        return(
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment}/>
                <CounterButton by={5} incrementMethod={this.increment}/>
                <CounterButton by={10} incrementMethod={this.increment}/>
                <span className="count"
   //inline css style defined
   style= {{fontSize:"50px"}}>{this.state.counter}</span>
            </div>
        );
    }

    increment(by)
    { 
        
        //console.log(`increment from child-${by}`)
        this.setState(
            (prevState)=>{
            return {Counter: this.prevState.counter+by}
        });
    }
}



class CounterButton extends Component{
    //Define the initial state in a constructor
    //state=>counter 0
    constructor(){
        super(); //imp
        this.state={
            counter:0 
        }
        this.increment=this.increment.bind(this);
    }

    //render = ()=>
    //const style={fontSize:50px, padding:"15px 30px"}; defining style as a javascript variable
    render(){
    return(
<div className="CounterButton">
    <button onClick={this.increment}>+{this.props.by}</button>
    <span className="count"
   //inline css style defined
   style= {{fontSize:"50px"}}>{this.state.counter}</span>
</div>
    );
}


increment(){ 
    
    //console.log("increment from parent")
    //update state - counter++
    //console.log('increment');
    //this.state.counter++;
    this.setState({
        Counter: this.state.counter+this.props.by
     });
    this.props.incrementMethod();
}
}

CounterButton.defaultProps= {
    by: 1
}

CounterButton.propTypes= {
    by: PropTypes.number
}

export default Counter
