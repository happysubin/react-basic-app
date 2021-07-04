import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    //<HashRouter> 도 사용가능
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </BrowserRouter> //github 페이지에 설명하기 어렵다고 한다.
    //</HashRouter>
  );
}
//exact 는 이거아니면 렌더링 안한다는 뜻!!!! 그래서 컴포넌트가 1개만 렌더링된다.
export default App;
