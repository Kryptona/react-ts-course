import React from "react";
import { getCorrectStr } from "./parser";

export function Render() {

    const [mathExp, setMathExp] = React.useState("0");
    let result: number = 0;
    getCorrectStr(mathExp);

    return (
        <>
            <div>
                <input type='text' name='mathExp' value={mathExp} onChange={(e) => setMathExp(e.target.value)}/>
            </div>
            <div>
                <label>{result}</label>
            </div>
        </>
    );
}