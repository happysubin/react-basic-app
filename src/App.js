import React from "react";
import PropTypes from "prop-types";

function Ex1() {
  return <h2>hi everyOne!</h2>;
}
function Food({ image, name, rating }) {
  return (
    <div>
      <h3>I LOVE {name}!!!!</h3>
      <h4> {rating}/5.0 </h4>
      <img src={image} alt="no img" />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.4,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.8,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      <h1>Hello Wolrd!!!!</h1>
      <Ex1></Ex1>
      {foodILike.map((food) => {
        return (
          <Food
            key={food.id}
            name={food.name}
            image={food.image}
            rating={food.rating}
          ></Food>
        );
      })}
    </div>
  );
}
/* 
function renderFood(dish){
  return <Food name={dish.name} image={dish.image}/>; 이 함수를 추가
}
return <div> {foodILike.map(renderFood)} </div>; 53~ 55번을 이것으로 변경
이것도 위의 로직과 같다
*/
export default App;
