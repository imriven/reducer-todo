import React, { useState } from  "react"
import Styled from "styled-components"
import { v4 as uuidv4 } from "uuid";

/**** Styles ****/

const AwesomeInput = Styled.input `
display:flex;
justify-content:center;
text-align: center;
font-family: 'Comic Neue', cursive;
color:black;
font-size: 1rem;
background: transparent;
border: none;
border-bottom: 2px solid black;
padding: .5% 3%;
width: 20%;
height: 15%;
margin-top: 1.5%;
text-shadow: 2px 2px 2px lightGray;
outline:none;
`

const ContainerDiv = Styled.div`
display:flex;
justify-content: center;
text-align: center;
width: 95%;
margin: 2%;

`

const AwesomeButton = Styled.button `
box-shadow: 5px 5px 8px gray;
height: 40%;
border-radius: 15px;
font-size: .7em;
margin: 1% 1%;
outline:none;
`

const TodoForm = props => {
const [newToDo, setNewToDo] = useState("");
        const handleChanges = e => {
            e.preventDefault();
            setNewToDo(e.target.value)
        }
        const addToDo = () => {
            const newItem = {
              task: newToDo,
              id: uuidv4(),
              completed: false,
            };
            props.dispatch({type: "ADD_TODO", payload:newItem})
            setNewToDo("")
          };

        
        
          const clearComplete = () => {
            props.dispatch({type: "CLEAR_COMPLETE"})
          }


        

        const handleKeyDown = e => {
            if (e.key === 'Enter') {
                addToDo()
            }
        }

    

       
        return(
            <ContainerDiv>
                   <AwesomeInput
          type="text"
          name="item"
          placeholder="Add Your Todo's!!"
          value={newToDo}
          onChange={handleChanges}
          onKeyDown={handleKeyDown}
        />
        <AwesomeButton onClick={addToDo}>Add Todo</AwesomeButton>
        <AwesomeButton onClick={clearComplete}>Clear Completed</AwesomeButton>
        
      </ContainerDiv>
          
        )
    
}


export default TodoForm;