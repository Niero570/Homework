//Diff Two Arrays

function diff(arr1, arr2){
    var diffArray = [];
    for(var i = 0; i < arr1.length; i++){
        //Iterate through array 1
        if(arr2.indexOf(arr1[1] === -1)){
            //If array 2 doesn't contain items in array 1
            diffArray.push(arr1[i]);
            //Add it to new holder array
        }
    }
    //Vice versa switch array 1 with array 2
        for(var j = 0; j < arr2.length; j++){
            if(arr2.indexOf(arr1[j] === -1)){
                diffArray.push(arr2[j]);
            }
        }

    
    return diffArray;

}



diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);







//Seek and Destroy

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);

    console.log(args);
    console.log(arr);



    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < args.length; j++) {
        if (arr[i] === args[j]) {
          delete arr[i]
        }
      }
    }





    return arr;
  }

  destroyer([1, 2, 3, 1, 2, 3], 2, 3);




  //Where art Thou


  
  function whatIsInAName(collection, source){
    //whatIsInAName takes larger input collection and compares it to selection needed
    var srcKeys = Object.keys(source);

    //Use filter and return values
    return collection.filter(function (obj) {
      //Check values and compare souorce and compare with item
      for (i in srcKeys) {
        if (obj.hasOwnProperty(srcKeys[i])) || obj[srcKeys[i]] !== source[K]{
          return false;
        }

      }
    }
    return arr;
  }

  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



