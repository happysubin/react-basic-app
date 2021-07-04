import React from "react"; //React로 import
import PropTypes from "prop-types";

//prop를 가져온다. prop는 변하지 않는 데이터이다.
function Movie({ year, title, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
}
//movie api 를 통해 가져온 obj 내부의 프로퍼티 값을 체크한다.
Movie.propTypes = {
  //소문자 p로 시작
  id: PropTypes.number.isRequired, //대문자 P로 시작
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
