import React from "react";

//component의 데이터를 바꾸기

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render() {
    return (
      <div>
        <h1>HELLO WORLD {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}
//this.add()가 아닌 이유는 click시에만 함수를 호출하기 때문이다. this.add()면 항시 호출이 되어서 이렇게 코드를 작성하지 않는다.

export default App;
