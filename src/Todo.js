import { useState } from "react";
import store from "./store";
import { Button } from "reactstrap";
import * as actions from "./actions";

function Todo() {
  const [state, setState] = useState(false);
  const data = store.getState();

  const handleDelete = (todoId) => {
    setState(!state);
    store.dispatch({
      type: actions.removeTodo,
      id: todoId,
    });
  };

  const handleComplete = (todoId) => {
    setState(!state);
    store.dispatch({
      type: actions.markCompleteTodo,
      id: todoId,
    });
  };
  return (
    <div>
      {data.map((todo) => {
        return (
          <div className="todo">
            <p
              style={{
                fontSize: "2rem",
                marginRight: "10px",
                color: todo.completed ? "green" : "",
              }}
            >
              {todo.description}
            </p>
            <div>
              <Button onClick={() => handleDelete(todo.id)} color="danger">
                delete
              </Button>
              <Button onClick={() => handleComplete(todo.id)} color="success">
                complete
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
