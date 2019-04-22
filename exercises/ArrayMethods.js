var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
var food = fruit.concat(vegetables)
var removed = food.splice(4, 4, 'pepper', '3')
var removed = food.splice(4, 0, 'pepper', '1')
food.reverse()
var foodToEnd = food.slice(4)
food.toString()
var poppedItem = food.pop('banana')



// var removed = vegetables.splice(3)
// var removed = fruit.splice(0)
// var index = fruit.indexOf('orange')
// fruit.push('2')
// vegetables.push(3)



// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);
// console.log(index)
// console.log(vegetables)
// console.log(vegetables.length)
console.log(food)
console.log(food.join)