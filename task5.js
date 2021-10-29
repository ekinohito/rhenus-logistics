function differentPathsQuantity({ x, y }) {
    function factorial(n) {
        let result = 1
        for (let i = 2; i <= n; ++i)
            result *= i
        return result
    }
    const horizontalSteps = Math.abs(x)
    const verticalSteps = Math.abs(y)
    const totalSteps = horizontalSteps + verticalSteps
    return factorial(totalSteps) / factorial(horizontalSteps) / factorial(verticalSteps)
}

console.log("Задание 5")
console.log(`{x: 0, y: 1} -> ${differentPathsQuantity({x: 0, y: 1})}`)
console.log(`{x: 1, y: 1} -> ${differentPathsQuantity({x: 1, y: 1})}`)
console.log(`{x: 2, y: 2} -> ${differentPathsQuantity({x: 2, y: 2})}`)
