import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
import "./todo";
import { data } from "./data";

interface Props {
    readonly children: React.ReactNode;
}


const Todo = ({ children }: Props) => {

    const [data, setData] = useState([{ id: 1, name: "Default" }]);

    return (
        <div className="container">
            {data.map(x =>
                <div className="todo">
                    <input className="inputTodo" type="text" defaultValue={x.name}/>
                    <Checkbox className="checkTodo" color={"primary"}/>
                </div>
            )}
        </div>
    );
};

export default Todo;