import React from "react";
import "./App.css"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count :0
    }
  }

 myFun = ()=> {
  this.setState({
    count:this.state.count +1
  })  
}
  render(){
    return(
      <>
      <div className="parent">
          <button onClick={this.myFun} className="btn">You Click On {this.state.count} Times</button>
      </div>  
      </>
    )
  }
}

export default App