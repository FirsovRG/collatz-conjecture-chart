import { CHECK_LOOP_SUBSEQUENCE } from "../constants";

const isOdd = (num: number) => Boolean(num % 2);

const getNextNumber = (currentNumber: number) => {
    if (isOdd(currentNumber)) {
        return currentNumber * 3 + 1;
    }

    return currentNumber / 2;
}

const checkLoopInData = (array: number[]) => {
    const joinedString = array.join(",");
    return joinedString.includes(CHECK_LOOP_SUBSEQUENCE)
}

export const getChartData = (initialNumber: number) => {
    const resultData: number[] = [initialNumber];

    while (!checkLoopInData(resultData)) {
        initialNumber = getNextNumber(initialNumber);
        resultData.push(initialNumber);
    }

    return resultData;
}

export const inputValueRegExpValidation = (value: string, regExp: RegExp) => regExp.test(value);
