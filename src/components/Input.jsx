import React, { useState } from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddUpArrow from '@material-ui/icons/KeyboardArrowUp'
import { AccessAlarm } from "@material-ui/icons";

    function Input(){

        const [isExpanded, setIsExpanded] = useState(false);

        function expand(){
            setIsExpanded(true);
        }

        function minimize(){
            setIsExpanded(false);
        }

        return (
            <div className="input-container">
                {
                    isExpanded && (
                        <div className="input-titlebar">
                            <input type="text" id="input-title" name="todo-title" placeholder="Task Title" />
                            <button><AccessAlarm/></button>
                            <button onClick={minimize}><AddUpArrow /></button>
                        </div>
                    )
                }
                <textarea onClick={expand} id="input-description" width="100%" name="todo-input" type="text" placeholder="What's on your mind today?" rows={isExpanded? 2 : 1} />
                
                {
                    isExpanded && (
                        <div className="add-button">
                            <button><AddCircleOutlineIcon /></button>
                        </div>
                    )
                }
            </div>
        )
    }

export default Input;