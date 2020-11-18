/**
 * return string only numbers and symbols like +-/*()=
 * @param str
 */
import { strict } from "assert";

export function getCorrectStr(str: string): string {
    str.trim();
    let strArr: string[] = str.split("");
    strArr = strArr.filter(x => CORRECT_SYMBOLS.includes(x));
    let correctStr: string = strArr.join("");
    checkMathPriority(correctStr);
    return correctStr;
}

/**
 * Check string start with correct symbol
 * @param str
 */
export function isCorrectStr(str: string): boolean {
    if (NOT_FIRST_MATH_OP.some(x => str.startsWith(x))) {
        return false;
    }
    return true;
}

/**
 * Проверят математический приоритет уравнения
 * @param str
 */
export function checkMathPriority(str: string): void {
    //преобразовать строку в числа и математические знаки (string)
    //пробегаться по знакам и проверять их приоритет
    let arrStr: string[] = str.split(/\+|-|\*|\//);
    console.log(arrStr);

}

const NOT_FIRST_MATH_OP: string[] = [
    "+", "*", "/"
];

const MATH_OPER_ARR: string[] = ["+", "-", "/", "*"];

enum MATH_OPERATORS {
    Plus = "+",
    Minus = "-",
    Multiply = "*",
    Divide = "/",
}

const CORRECT_SYMBOLS: string[] = [
    "0", "1", "2", "3",
    "4", "5", "6", "7",
    "8", "9", "+", "-",
    "/", "*"
];
