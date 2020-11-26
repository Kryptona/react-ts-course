import { Guid } from "guid-typescript";
import React, { useState } from "react";
import Todo from "./Todo";
import { TodoData } from "./TodoData";
import { AddTodo } from "./AddTodo-bt";
import "./todo.css";

export function Todos() {

    const [data, setData] = useState([{ id: Guid.create(), name: "Default" }]);

    const createTodo = () => {
        setData([...data, { id: Guid.create(), name: "Default" }]);
    };

    const setNewData = (newData: TodoData) => {
        const index = data.findIndex(x => x.id === newData.id);
        if (~index) {
            const dataCopy = [...data];
            dataCopy[index] = newData;
            setData(dataCopy);
        }
    };

    return (
        <>
            <div className="wrapper">
                <h2 className="header">Todos</h2>
                <div className="container">
                    {data.map(x =>
                        <Todo data={x} setData={setNewData}/>
                    )}
                </div>
            </div>
            <div className="footer">
                <AddTodo createTodo={createTodo}/>
            </div>
        </>
    );
}


