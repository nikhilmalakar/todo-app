import React from "react";
import ListContent from "./ListContent";

    function List(props){
        return(
            <div className="list-div" id={props.style}>
                <h2>{props.title}</h2>
                <ListContent item={props.item}/>
            </div>
        )
    }

export default List