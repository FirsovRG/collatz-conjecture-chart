const isOdd = (num: number) => Boolean(num % 2);

const getNextNumber = (currentNumber: number) => {
    if (isOdd(currentNumber)) {
        return currentNumber * 3 + 1;
    }

    return currentNumber / 2;
}

export const getChartData = (initialNumber: number) => {
    const resultData: number[] = [initialNumber];

    while (initialNumber !== 1) {
        initialNumber = getNextNumber(initialNumber);
        resultData.push(initialNumber);
    }

    return resultData;
}
