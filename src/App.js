import React from "react";

//component의 데이터를 바꾸기

class App extends React.Component {
  constructor(props) {
    super(props); //super 키워드는 부모 오브젝트의 함수를 호출할 때 사용됩니다.
    this.state = {
      count: 0,
      isLoading: true,
      movies: [],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "we are loading.." : "we are ready"}</div>;
  }
}
//this.add()가 아닌 이유는 click시에만 함수를 호출하기 때문이다. this.add()면 항시 호출이 되어서 이렇게 코드를 작성하지 않는다.

export default App;
