let {
    returnTwo, 
    greeting, 
    add, 
    subtract, 
    multiply, 
    divide
} = require("./functions")

test("This is testing returnTwo to return 2", () => {
    expect(returnTwo()).toEqual(2)
})

test("This is testing greeting to equal Hello, James", () => {
    expect(greeting("James")).toEqual("Hello, James")
})

test("This is testing greeting to equal Hello, Jill", () => {
    expect(greeting("Jill")).toEqual("Hello, Jill")
})


describe("This is for math functions", () => {
    test("This is testing add to be equal to a certain number", () => {
        expect(add(1, 2)).toEqual(3)
    })
    test("This is testing add to be equal to a certain number again", () => {
        expect(add(5, 9)).toEqual(14)
    })
    test("This is testing subtract", () => {
        expect(subtract(3, 2)).toEqual(1)
    })
    test("This is testing multiply", () => {
        expect(multiply(3, 2)).toEqual(6)
    })
    test("This is testing divide", () => {
        expect(divide(4, 2)).toEqual(2)
    })
})

test("Checking the datatype of add", () => {
    expect(typeof add(1, 2)).toBe("number")
})

