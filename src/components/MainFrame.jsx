import React, { useState } from "react";
import Input from "./Input";
import List from "./List";
import Header from "./Header";
import Footer from "./Footer";

    function MainFrame(){

        var date = new Date();
        const options = {weekday : 'long'}
        var day = date.toLocaleDateString('en-US',options);

        const [todayTasks, setTodayTasks] = useState([]);
        const [tomorrowTasks, setTomorrowTasks] = useState([]);
        const [weekTasks, setWeekTasks] = useState([]);

        const handleSubmit = (todoTitle, todoDesc, dline) => {
            // e.preventDefault();
            console.log(dline);

            let realDateObject = new Date(dline);

            if (isToday(realDateObject)) {
            setTodayTasks((prevTasks) => [...prevTasks, { title : todoTitle, description : todoDesc, deadline : dline}]);
            } else if (isTomorrow(realDateObject)) {
            setTomorrowTasks((prevTasks) => [...prevTasks, { title : todoTitle, description : todoDesc, deadline : dline }]);
            } else if (isUpcomingWeek(realDateObject)) {
            setWeekTasks((prevTasks) => [...prevTasks, { title : todoTitle, description : todoDesc, deadline : dline}]);
            }
        };

        const isToday = (date) => {
            const currentDate = new Date();
            return date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear();
          };
        
          const isTomorrow = (date) => {
            const currentDate = new Date();
            const tomorrow = new Date(currentDate);
            tomorrow.setDate(currentDate.getDate() + 1);
            return date.getDate() === tomorrow.getDate() && date.getMonth() === tomorrow.getMonth() && date.getFullYear() === tomorrow.getFullYear();
          };
        
          const isUpcomingWeek = (date) => {
            const currentDate = new Date();
            const upcomingWeekEndDate = new Date(currentDate);
            upcomingWeekEndDate.setDate(currentDate.getDate() + 7);
            return date >= currentDate && date <= upcomingWeekEndDate;
          };
        

        return (
            <div>
                <Header />
                <div className="main">
                    
                        <div className="list-container">
                            <List title="Upcoming Week" tasks ={weekTasks} />

                            <div className="center-container">
                                <Input title="input-container" onAdd={handleSubmit} />
                                <List title="Hello  ${day}" style="today-container" tasks={todayTasks}/>
                            </div>
                            
                            <List title="Next day"  tasks={tomorrowTasks} />
                        </div>
                        {console.log(todayTasks)}
                </div>
                <Footer />
            </div>
        )
    }

export default MainFrame;
