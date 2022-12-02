let numbers = [5, 2, 1, 4, 11, 8, 7, 25, 37, 2, 6, 1]

let even = []

let odd = []

console.log (
   even = numbers.filter(i => i % 2 === 0 ).sort ((a,b) => a-b)
) 

console.log (
   odd = numbers.filter(i => i % 1 == 0 && i % 2 != 0).sort ((a,b) => a-b)
)
