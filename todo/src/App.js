import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Styled from "styled-components"
import './App.css'
import Background from "./images/postit-scrabble-to-do-todo-3299.jpg"



/****Styles****/

const ImageBackground = Styled.div `
display: flex;
justify-content:center;
background-image: url(${Background});
background-size:cover;
height: 100vh;
`
const ContainerDiv = Styled.div`
display:flex;
flex-direction: column;
text-align: center;
width: 80%;
`

const ExcellentHeader = Styled.h1 `
font-family: 'Poppins', sans-serif;
padding: 2%;
margin-top: 30%;
color: black;
font-size: 1.5em;
`

/************/

const initialValue = [
  {
    task: "Organize Garage",
    id: uuidv4(),
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: uuidv4(),
    completed: true,
  },
]

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    case 'TOGGLE_COMPLETE':
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
      case 'CLEAR_COMPLETE':
        return state.filter(todo => !todo.completed )
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <ImageBackground>
      <ContainerDiv>
      <ExcellentHeader>Welcome To The TodoList App!</ExcellentHeader>
      <TodoList
        todos={state}
        dispatch={dispatch}
      />
      <TodoForm dispatch={dispatch} />
    </ContainerDiv>
    </ImageBackground>
  );
}


export default App;
