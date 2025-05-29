//1
let yourArray = ["day", 2, true, "false", 18];

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = false
// Only change code above this line
console.log(myArray);



//2
function mixedNumbers(arr) {
    // Only change code below this line
    let mixedNumbers 
    arr.push(7, 'VIII', 9);
  
    arr.unshift('I', 2, 'three');
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

//3
  function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete'])); 


  //4
  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
 arr.splice(4, 5);
 let newArray = arr.splice(0, 1);
// Only change code above this line
console.log(arr);

//5
function htmlColorNames(arr) {
    // Only change code below this line
    
     arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));



  //6
  function forecast(arr) {
    // Only change code below this line
    
    return arr.slice(2, 4);
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


  //7
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
    
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));


  //8
  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());


  //9
  function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) >= 0){
      return true
    }
    return false
  
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


  //10
  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i = 0; i < arr.length; i++)
    if (arr[i].indexOf(elem) == -1){
        newArr.push(arr[i]);
    }
  
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


  //11
  spread', 'array', 'deep',   ['mutate', 1327.98, 'splice', 'slice', 'push', deeper,  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', 'deepest']]
]
 ]
]
  // Only change code above this line
];let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested',   ['loop', 'shift', 6, 7, 1000, 'method',   ['concat', false, true, '


  //12
  const foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods.bananas = 13
  foods['grapes'] = 35
  foods.strawberries = 27
  
  // Only change code above this line
  
  console.log(foods);

  //13
  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45
  // Only change code above this line
  
  console.log(userActivity);


  //14
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
  return foods[scannedItem]
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));

  //15
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges
  delete foods.plums
  delete foods.strawberries
  
  // Only change code above this line
  
  console.log(foods);

  //16
  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
   return userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan");
  }  
  
    
    // Only change code above this line
  
  
  console.log(isEveryoneHere(users));