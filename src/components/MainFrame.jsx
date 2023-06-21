import React from "react";
import Input from "./Input";
import List from "./List";

    function MainFrame(){

        var date = new Date();
        const options = {weekday : 'long'}
        var day = date.toLocaleDateString('en-US',options);

        return (
            <div className="main">
                <h1>ToDo List</h1>
                <h3>Hello {day}!</h3>
                <Input />
                <List />
            </div>
        )
    }

export default MainFrame;