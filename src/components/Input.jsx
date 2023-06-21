import React from "react";

    function Input(){
        return (
            <div className="input-container">
                <input name="todo-input" type="text" placeholder="What's on your mind today?" />
                <button type="submit">Add</button>
            </div>
        )
    }

export default Input;