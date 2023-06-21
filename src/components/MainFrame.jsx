import React from "react";
import Input from "./Input";
import List from "./List";
import Header from "./Header";

    function MainFrame(){

        var date = new Date();
        const options = {weekday : 'long'}
        var day = date.toLocaleDateString('en-US',options);

        return (
            <div>
                <Header />
                <div className="main">
                    
                        <div className="list-container">
                            <List title="Upcoming Week" />

                            <div className="center-container">
                                <Input title="input-container"/>
                                <List title={"Hello" + {day}} style="today-container"/>
                            </div>
                            
                            <List title="Next day" />
                        </div>
                </div>

            </div>
        )
    }

export default MainFrame;