import React from "react";
import PropTypes from "prop-types";

const List = ({ todos }) => (
  <>
    {todos.map(todo => (
      <div key={todo.id}>
        {todo.done ? <strike>{todo.task}</strike> : <div>{todo.task}</div>}
      </div>
    ))}
  </>
);

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    })
  )
};

export default List;
