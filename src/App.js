import { useState } from "react";
import store from "./store";
import "./App.css";
import * as actions from "./actions";
import { Input, Button } from "reactstrap";
import Todo from "./Todo";
import "bootstrap/dist/css/bootstrap.css";

console.log(store.getState(), "store");
function App() {
  const [inputVal, setInputVal] = useState("");

  const handleAddTodo = () => {
    setInputVal("");
    store.dispatch({
      type: actions.addTodo,
      data: {
        description: inputVal,
      },
    });
  };
  console.log(store.getState());
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 mt-5 d-flex">
          <div>
            <Input
              onChange={(e) => setInputVal(e.target.value)}
              value={inputVal}
              style={{ width: "590px" }}
            />
          </div>
          <div className="col-12 col-sm-2">
            <Button onClick={handleAddTodo}>Add</Button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
