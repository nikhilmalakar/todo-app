import React, { useState } from "react";
import AddCircleIcon from '@mui/material';

    function Input(){

        const [isExpanded, setIsExpanded] = useState(false);

        function expand(){
            setIsExpanded(true);
        }

        return (
            <div className="input-container">
                {
                    isExpanded && (
                        <input type="text" id="input-title" name="todo-title" placeholder="Task Title" />
                    )
                }
                <textarea onClick={expand} id="input-description" name="todo-input" type="text" placeholder="What's on your mind today?" rows={isExpanded? 2 : 1} />
                {
                    isExpanded && (
                        <AddCircleIcon></AddCircleIcon>
                    )
                }
            </div>
        )
    }

export default Input;