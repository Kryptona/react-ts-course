import React from "react";
import "./hello.css";
import { Meta } from "@storybook/react/types-6-0";

interface Props {
    readonly children: React.ReactNode;
}

export const Hello = ({ children }: Props) => {
    return (
        <h2 className="header">
            {children}
        </h2>
    );
};

export default Hello;