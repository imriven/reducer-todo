import React from "react"
import "./Todo.css";
import Styled from "styled-components"

/***Styles***/
const ItemP = Styled.p`
padding: 1% 0;
font-family: 'Comic Neue', cursive;

`
/********/

const Todo = props => {
  
    const toggleComplete = (id) => {
        props.dispatch({type: "TOGGLE_COMPLETE", payload:id})
      };
      
        return(
        <ItemP onClick={() => toggleComplete(props.todo.id) } className={props.todo.completed ? "strike" : "" }>{props.todo.task}</ItemP>
        )
    
}
export default Todo;