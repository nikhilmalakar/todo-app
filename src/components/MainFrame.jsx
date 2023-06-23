import React, { useState } from "react";
import Input from "./Input";
import List from "./List";
import Header from "./Header";
import Footer from "./Footer";

    function MainFrame(){

        var date = new Date();
        const options = {weekday : 'long'}
        var day = date.toLocaleDateString('en-US',options);

        // Main Item List Array
        // const [itemList, setItemlist] = useState([]);
        // const [itemListDescription, setItemlistDescription] = useState([]);
        // const [itemDeadline, setItemDeadline] = useState([]);

        // function addItem(todoTitle, todoDesc, deadline){
        //     setItemlist( [...itemList, todoTitle]);
        //     setItemlistDescription([...itemListDescription, todoDesc]);
        //     setItemlist( [...itemDeadline, deadline]);
            
        // }  

        const [item, setItem] = useState([{title : "", description: "", deadline : null}]);

        function addItem(todoTitle, todoDesc, dline){
            setItem([
                ...item, {title:todoTitle, description:todoDesc, deadline:dline}
            ]);

            console.log(item);
        }

        return (
            <div>
                <Header />
                <div className="main">
                    
                        <div className="list-container">
                            <List title="Upcoming Week" item={item}/>

                            <div className="center-container">
                                <Input title="input-container" onAdd={addItem}/>
                                <List title={"Hello" + {day}} style="today-container" item={item}/>
                            </div>
                            
                            <List title="Next day" item={item}/>
                        </div>
                        {/* {console.log(date);} */}
                </div>
                <Footer />
            </div>
        )
    }

export default MainFrame;