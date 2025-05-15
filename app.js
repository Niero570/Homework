const myArray = [["live", 50 ], ['sad', 50]];

function multiplyAll(arr) {
  
    
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      console.log(arr[i][j]);
    }
  }

    ;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

  function returnGreater(num1, num2){
    if(num1 < num2){
        return num2
    }else{
        return num1
    }
  }
  returnGreater(35, 7)

  function valEquality(str1, str2){
    if(str1 == str2){
        return 'equal'
        
    }else{
        return 'not equal'
    }
}console.log(valEquality(56, 56));
console.log(valEquality('happiness', 'sad'))
    


