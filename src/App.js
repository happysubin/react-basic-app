import { current } from "immer";
import React from "react";

//component의 데이터를 바꾸기

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    //this.state.count = +1;  state를 바로 직접적으로 바꿀 수 없다.
    //this.setState({ count: this.state.count + 1 }); 이건 좋은코드는 아니다.
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    //this.state.count = -1; state를 바로 직접적으로 바꿀 수 없다.
    //this.setState({ count: this.state.count - 1 }); 이건 좋은코드는 아니다.
    this.setState((current) => ({
      count: current.count - 1,
    }));
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
