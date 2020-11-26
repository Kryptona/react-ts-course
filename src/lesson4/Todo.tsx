import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
import "./todo";
import { TodoData } from "./TodoData";


interface Props {
    readonly data: TodoData;
    readonly setData: (data: TodoData) => void;
}

const Todo = ({ data, setData }: Props) => {

    return (
        <div className="todo">
            <input className="inputTodo" type="text" value={data.name}
                   onChange={e => setData({ id: data.id, name: (e.target.value) })}/>
            <Checkbox className="checkTodo" color={"primary"}/>
        </div>
    );
};

export default Todo;