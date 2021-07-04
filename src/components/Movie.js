import React from "react"; //React로 import
import PropTypes from "prop-types";
import "./Movie.css";
//prop를 가져온다. prop는 변하지 않는 데이터이다.
function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, idx) => {
            //1번 매개변수는 item, 2번 매개변수는 item 인덱스
            return (
              <li key={idx} className="genres__genre">
                {genre}
              </li>
            );
          })}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
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
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
