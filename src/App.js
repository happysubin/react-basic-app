import React from "react";

//component의 데이터를 바꾸기

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("born");
  }
  state = {
    count: 0,
  };
  add = () => {
    //this.state.count = +1;  state를 바로 직접적으로 바꿀 수 없다.
    //this.setState({ count: this.state.count + 1 }); 이건 좋은코드는 아니다.
    this.setState((current) => ({
      //화살표함수의 this 는 상위 객체를 가리킨다.
      //만약 js 일반 function 이면 this 가 자신을 가리켜서 상위 객체를 가리키기 위해 화살표 함수를 사용한다.
      //setState는 비동기이다. 다른곳에서도 count를 호출하면 계산이 이상해질 수 있기 때문이다.
      count: current.count + 1,
    }));
  };
  minus = () => {
    //current 는 현재의 state를 가리킨다.
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }

  render() {
    console.log("render!!!!");
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
