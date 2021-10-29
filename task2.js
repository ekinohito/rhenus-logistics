Array.prototype.weave = function (anotherArray) {
    this.reduce((previousValue, currentValue) => {
        if (currentValue < previousValue)
            throw new Error("this array is not sorted")
        return currentValue
    })
    anotherArray.reduce((previousValue, currentValue) => {
        if (currentValue < previousValue)
            throw new Error("another array is not sorted")
        return currentValue
    })
    const { anotherArray: remaining, result } = this.reduce(({ anotherArray, result } , currentValue) => {
        const partitionIndex = anotherArray.findIndex(value => value > currentValue)
        if (partitionIndex < 0)
            return {
                anotherArray: [],
                result: [...result, ...anotherArray, currentValue]
            }
        return {
            anotherArray: anotherArray.slice(partitionIndex),
            result: [...result, ...anotherArray.slice(0, partitionIndex), currentValue]
        }
    }, { anotherArray, result: [] })
    return [...result, ...remaining]
}

console.log("Задание 2")
console.log(`[1, 3, 4], [1, 2, 6] -> ${[1, 3, 4].weave([1, 2, 6])}`)
console.log(`[1, 2, 3, 4], [2, 5, 10] -> ${[1, 2, 3, 4].weave([2, 5, 10])}`)
try {
    console.log(`[1, 3, 2], [1, 2, 3] -> ${[1, 3, 2].weave([1, 2, 3])}`)
} catch (e) {
    console.error(`[1, 3, 2], [1, 2, 3] -> ${e}`)
}