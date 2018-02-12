import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import './style.css'

class Tap extends React.Component {
  constructor(props){
    super(props)
    let start=0
    if(props.start){start=props.start}
    this.state = {
      term: '',
      items: []}}
  increment()
  {
    var counter=this.state.counter+1;
    this.setState({counter})
  }   
  decrement()
  {
      var counter = this.state.counter-1;
      this.setState({ counter }) 
  }
  render(){
    return (<div>
    <button onClick={() =>this.increment()}>+</button> 
    <button onClick={() => this.decrement()}>-</button>
    {this.state.counter}
    </div>)
  }n
}
const App = ({name, chacked}) => {
  return (
  <div> 
   
    <input type="text" placeholder="to do"/>
    <button> OK </button><br/>
    <Tap start={6} />
    <input type="checkbox" checked={chacked} />hh<br/>
    <input type="checkbox" checked={chacked} />ugf<br/>
    <input type="checkbox" checked={chacked} />vgg
   </div>
)}
var elementToRenderInto = document.getElementById('root')
render(<App name="ToDo List" chacked={false}/>, elementToRenderInto);
