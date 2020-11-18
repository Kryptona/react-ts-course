import React from "react";
import { action } from "@storybook/addon-actions";

import Hello from "./Hello";

export default {
    title: 'Header',
    component: Hello,
};

export const Text = () => <Hello>Hello World!</Hello>