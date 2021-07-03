import React from "react";

function Ex1() {
  return <h2>hi everyOne!</h2>;
}
function Food({ fav, name }) {
  //obj안에 fav라는 프로퍼티가 있다.
  return (
    <h3>
      I LOVE {fav}!!!! {name}
    </h3>
  );
}

function App() {
  return (
    <div>
      <h1>Hello Wolrd!!!!</h1>
      <Ex1></Ex1>
      <Food fav="kimchi" name="first"></Food>
      <Food fav="chicken"></Food>
      <Food fav="ice-cream"></Food>
      <Food fav="kimbap"></Food>
    </div>
  );
}

export default App;
