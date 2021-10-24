import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TodoForm from "../../component/todo/TodoForm";
import TodoList from "../../component/todo/TodoList";
import {addtodoAction ,deletetodoAction} from '../../redux/todo'
import './Todo.css';
function Todo() { 
  
  //component parent (view)
//   const [todos, setTodos] = useState([
//     {
//       title: "learn node js",
//       content: "Lorem ipsum dolor sit amet.",
//     },
//     {
//       title: "go to the sea",
//       content: "Lorem ipsum dolor sit amet.",
//     },
//     {
//       title: "walk the dog",
//       content: "Lorem ipsum dolor sit amet.",
//     },
//   ]);
const todostate = useSelector(state => state.todos)
 const dispatch = useDispatch()
// console.log(todostate);
  const addTodo = (task) => {
    dispatch (addtodoAction(task));
  };
// *********************************
  const deleteTodo = (index) => {
    dispatch(deletetodoAction(index))
  }

 
  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todostate} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;