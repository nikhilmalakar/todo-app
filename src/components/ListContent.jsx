import { useState } from "react";


    function ListContent(props){
        
        // console.log(props.item);
        // const itemList = props.item.shift();
        const [itemListToday, setItemListToday] = useState(props.item);
        var currDate = new Date();
        

        // function print(item){
        //     return(
        //         <li>{item}</li>
        //     )
        // }

        function test(){
            setItemListToday(
                itemListToday.filter((item) => {
                    // if(item.deadline != null && item.deadline.getDate === currDate.getDate) ;
                    return item.deadline != null && console.log(item) && item.deadline.getDate === currDate.getDate;
                }  )
            )
        }
        
        return(
            <div>
                <ul>
                    {/* {itemList.map(print)} */}
                    {/* <button onClick={test}>Helllooo</button> */}
                    {/* {console.log(itemListToday)} */}
                </ul>
            </div>
        )
    }

export default ListContent