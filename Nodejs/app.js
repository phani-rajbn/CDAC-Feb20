require('./Ex01.js')//include the JS file inside app.
require('./Ex02')
//let cart = require('./Ex03');
let namedmodule = require('./Ex04');//U get the whole module in it......

//////////////Client for ex01 and ex02///////////////////////
// console.log(add(123, 234))
// console.log(sub(123, 234))
// console.log(remainder(12, 3))

/////////////////Client for ex03//////////////////////////////
// cart.add({'id': 1, 'name':'Samsung Note 20', 'price': 45000});
// cart.add({'id': 2, 'name':'Samsung M31', 'price': 20000});
// cart.add({'id': 3, 'name':'Samsung A51', 'price': 35000});
// cart.add({'id': 4, 'name':'Samsung S50', 'price': 40000});

// const items = cart.getAll();
// items.forEach((e)=>{
//     console.log(e);
// })
/////////////////////////client for Ex04//////////
const cart = namedmodule.shoppingcart;//get the cart part of the module
cart.add({'id': 1, 'name':'Samsung Note 20', 'price': 45000});
cart.add({'id': 2, 'name':'Samsung M31', 'price': 20000});
cart.add({'id': 3, 'name':'Samsung A51', 'price': 35000});
cart.add({'id': 4, 'name':'Samsung S50', 'price': 40000});

const items = cart.getAll();
items.forEach((e)=>{
    console.log(e);
})
console.log("This module was developed by: " + namedmodule.developedBy);//read the developedBy part of the module.....
console.log("This module was developed on " + namedmodule.developedOn);

const simpleObj = namedmodule.othersubModule;
console.log(simpleObj.apple)