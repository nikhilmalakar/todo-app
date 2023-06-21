import React from "react";

    function List(props){
        return(
            <div className="list-div" id={props.style}>
                <h2>{props.title}</h2>
                <ul>
                    <li>Buy Milk</li>
                </ul>
            </div>
        )
    }

export default List