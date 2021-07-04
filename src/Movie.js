import react from "react";
import PropTypes from "prop-types";

//prop를 가져온다. prop는 변하지 않는 데이터이다.
function Movie({ id, year, title, summary, poster }) {
  return <h3>{title}</h3>;
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
