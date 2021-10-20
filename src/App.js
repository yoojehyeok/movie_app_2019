import React from "react";

class App extends React.Component {
  
  state = {
    isLoading : true
  }

  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({isLoading: false});
    },3000);
  }

  render(){
    console.log("render");
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loading" : "Ready"}
      </div>

    )
  }
}

export default App;
