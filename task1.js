function sumSpaces(array) {
    return array
        .sort()
        .reduce(({ previousValue, accumulator }, currentValue) => {
            const space = (currentValue + previousValue) * (currentValue - previousValue - 1) / 2
            return { previousValue: currentValue, accumulator: (space > 0)?accumulator + space:accumulator}
        }, { previousValue: array[0], accumulator: 0 })
        .accumulator
}

console.log("Задание 1")
console.log(`[1, 3, 4, 6] -> ${sumSpaces([1, 3, 4, 6])}`)
console.log(`[45, 48] -> ${sumSpaces([45, 48])}`)
console.log(`[1, 2, 3] -> ${sumSpaces([1, 2, 3])}`)