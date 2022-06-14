import { addTodo } from "./actions";
import * as actions from "./actions";

function reducer(state = [], action) {
  if (action.type === actions.addTodo) {
    return [
      ...state,
      {
        id: state.length + 1,
        description: action.data.description,
        completed: false,
      },
    ];
  } else if (action.type === actions.removeTodo) {
    return state.filter((item) => item.id !== action.id);
  } else if (action.type === actions.markCompleteTodo) {
    return state.map((item) =>
      item.id === action.id ? { ...item, completed: !item.completed } : item
    );
  }
  return state;
}
export default reducer;
// function reducer(state, action) {
//     switch(action.type){
//         case actions.addTodo:
//       return [...state,{id:state.length+1,description:action.data.description,completed:false}]
//          case actions.removeTodo:
//      return state.filter((item)=>item.id!==action.id)
//          case actions.markCompleteTodo:
//       return state.map((item)=>(item.id===action.id) ? {...item,completed:!item.completed} : item)
//            default:
//                return state
//     }
//    }
