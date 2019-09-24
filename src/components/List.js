import React from "react";
import PropTypes from "prop-types";

const List = ({ movies }) => (
  <>
    {movies.map(movie => (
      <div key={movie.number}>
        <div>{movie.title}</div>
        <div>{movie.description}</div>
      </div>
    ))}
  </>
);

List.propTypes = {
  movies: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default List;
