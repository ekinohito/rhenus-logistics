function makeLengthRecorder() {
    let quantity = 0
    let length = 0
    return function (newString) {
        const words = newString.split(/[ .,]+/).filter(word => word !== "")
        quantity += words.length
        length += words.reduce((length, value) => length + value.length, 0)
        if (quantity === 0)
            throw new Error("no words")
        return +(length / quantity).toFixed(2)
    }
}
const averageLength = makeLengthRecorder()

console.log("Задание 4")
console.log(`"Я хорошо знаю javascript" -> ${averageLength("Я хорошо знаю javascript")}`)
console.log(`"Но некоторые вопросы вызывают трудности, например замыкания." -> ${
    averageLength("Но некоторые вопросы вызывают трудности, например замыкания.")}`)
