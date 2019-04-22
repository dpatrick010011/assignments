let shopper = {
  firstName: 'Johnny',
  lastName: 'Blue',
  memberId: 34,
  rewardsAccount: true,
  function (){
    return this.firstName + " " + this.lastName
  }
}
console.log(shopper.firstName)
console.log(shopper.lastName)
console.log(shopper.memberId)
console.log(shopper.rewardsAccount)

let shoppingCart = {
  produce: ['berries', 'apples', 'greens'],
  meat: ['chicken', 'fish', 'shrimp'],
  canned: ['beans', 'tomatoes'],
  dairy: ['milk', 'creamer', 'yogurt'],
  frozen: ['ice cream', 'popsicles'],
  hygeine: ['toothepaste', 'deodarant', 'shampoo', 'conditioner']
}
console.log(shoppingCart.produce)
console.log(shoppingCart.meat)
console.log(shoppingCart.canned)
console.log(shoppingCart.dairy)
console.log(shoppingCart.frozen)
console.log(shoppingCart.hygeine)