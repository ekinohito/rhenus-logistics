function computeRating(starsQuantity) {
    const totalQuantity = starsQuantity.reduce((totalQuantity, currentQuantity) => totalQuantity + currentQuantity)
    if (totalQuantity === 0)
        throw new Error("no reviews")
    const starsSum = starsQuantity.map((quantity, value) => quantity * (value + 1)).reduce((sum, value) => sum + value)
    const rating = starsSum / totalQuantity
    return [+(rating).toFixed(2), "*".repeat(Math.round(rating))]
}

console.log("Задание 3")
console.log(`[0, 2, 0, 1, 23] -> ${computeRating([0, 2, 0, 1, 23])}`)
console.log(`[16, 17, 23, 40, 45] -> ${computeRating([16, 17, 23, 40, 45])}`)
console.log(`[55, 67, 98, 115, 61] -> ${computeRating([55, 67, 98, 115, 61])}`)
