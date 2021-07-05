import React from "react";

class Detail extends React.Component {
  //상속받는다
  componentDidMount() {
    //renter 메소드가 실시된 후 componentDidMount가 실행된다.
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/"); //홈으로 redirect 한다
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
