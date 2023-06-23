import React, { useState } from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddUpArrow from '@material-ui/icons/KeyboardArrowUp'
import { AccessAlarm } from "@material-ui/icons";

    function Input(props){

        // Expand Animation
        const [isExpanded, setIsExpanded] = useState(false);

        function expand(){
            setIsExpanded(true);
        }
        
        function minimize(){
            setIsExpanded(false);
        } 

        //Input Values
        const [todoTitle, setTodoTitle] = useState("");
        const [todoDesc, setTodoDesc] = useState("");
        const [dline, setDeadline] = useState(null);

        function addTitle(event){
            const temp = event.target.value;
            setTodoTitle(temp);
        }

        function addDesc(event){            
            const temp = event.target.value;
            setTodoDesc(temp);
        }

        function addDate(event){
            const temp = event.target.value;
            setDeadline(temp);
        }

        return (
            <div className="input-container" style={{height: isExpanded && "25%"}} >
                {
                    isExpanded && (
                        <div className="input-titlebar">
                            <input onChange={addTitle} type="text" id="input-title" name="todo-title" placeholder="Task Title" />
                            {/* <button><input onChange={addDate} /><AccessAlarm/></button> */}
                            <button onClick={minimize}><AddUpArrow /></button>
                        </div>
                    )
                }
                <textarea onClick={expand} onChange={addDesc} id="input-description" width="100%" name="todo-desc" type="text" placeholder="What's on your mind today?" rows="1" />
                
                {
                    isExpanded && (
                        <div className="add-button">
                            <button type="submit" 
                            onClick={
                                ()=> {props.onAdd(todoTitle, todoDesc, dline);}
                            }
                            ><AddCircleOutlineIcon fontSize="large"/></button>
                        </div>
                    )
                }
            </div>
        )
    }

export default Input;