let arr = [
   {
    name: "sardor ml",
    age: 15,
    isMarried: false
   },
   {
    name: "ismail",
    age: 12,
    isMarried: true
   },
   {
    name: "dilruh",
    age: 16,
    isMarried: false
   },
   {
    name: "amira",
    age: 16,
    isMarried: false
   },
   {
    name: "allayor",
    age: 5,
    isMarried: false
   },

]

let married = []
let single = []

let average_age = 0

arr.forEach(item => {
    average_age += item.age
    
        if (item.isMarried === true) {
            married.push(item.name)
        } else {
            single.push(item.name)
        }

})

average_age = average_age / arr.length

console.log(married, single);
console.log(average_age.toFixed(2));


