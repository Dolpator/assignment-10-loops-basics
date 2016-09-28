////------------------------------------------------------------------
// TASK 1 : Build a function that returns an array of strings with last names added:
//    If less than 6 characters, append Sampson: e.g. "Homer Sampson"
//    If 6 characters or longer, append Simpson: 'Jessica Simpson'
////------------------------------------------------------------------

var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]

var simpOrSamp = function(arrayStr){
var newArray = []
var lastName = ''
for(var i = 0; i < arrayStr.length; i += 1){

    if(arrayStr[i].length < 6){
    lastName = (arrayStr[i] + ' Sampson');
    } else {
    lastName = (arrayStr[i] + ' Simpson');
    }
    newArray.push(lastName)

}

    return newArray;
}
var modifiedNamesList = simpOrSamp(simpList)
console.assert( modifiedNamesList[1] === "OJ Sampson" )
console.assert( modifiedNamesList[2] === "Marge Sampson" )
console.assert( modifiedNamesList[5] === "Maggie Simpson" )


////------------------------------------------------------------------
// TASK 2 : Write a function called shortiesOnly(). It should as input an array of strings, and
//    it should return a new array containing only those strings with four or fewer characters.
////------------------------------------------------------------------


var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]
var shortiesOnly = function(arrayStr){
var nameCount = 0
var newList = []
for (var i = 0; i < arrayStr.length; i ++){
    if(arrayStr[i].length <= 4){
        nameCount = nameCount + 1;
      //   newList.push(allNames[i])

    }
}
        return newList;

}
var shortList = shortiesOnly(allNames)
console.assert( shortList.length === 4 )
// checks to see that FRED is INCUDED in the array.
console.assert( shortList.indexOf('Fred') != -1 )
// checks to see that WAYNE is NOT in the array.
console.assert( shortList.indexOf('Wayne') === -1 )
