import React from "react";
import ListContent from "./ListContent";

    function List(props){

        var date = new Date();
        const options = {weekday : 'long'}
        var day = date.toLocaleDateString('en-US',options);

        const listTitle = props.title;

        const deleteIdHandler = (id) => {
            props.onChecked(id);
        };

        return(
            <div className="list-div" id={props.style}>
                <h2>{listTitle === "" ? "Hello! " + day : props.title}</h2>
                <ListContent tasks={props.tasks} title={listTitle} clickHandler={deleteIdHandler}/>
            </div>
        )
    }

export default List