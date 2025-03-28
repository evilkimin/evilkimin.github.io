//submision box (where you will enter text)
//text instruction telling person to input text one word at a time
//second button, sort objects
//array
//something that will alphabetically sort array (sorting algorithm)
//output button (submit button)

let input;
let buttonSubmit;
let buttonSort;
var nameList = []
var myName;
var lineDistance = 12
var nameOrder;

function setup(){
    createCanvas(400, 700);
    input = createInput('submit names one at a time');
    myName = input.value();

    buttonSubmit = createButton('submit');
    buttonSort = createButton('sort');

    buttonSubmit.mousePressed(printSubmit); 
    buttonSort.mousePressed(printSort);
}

//instruction

function draw(){
    background('lightblue');

    //text(myName, 0, 20);

   // for(nameList.length )
   // for every new name, +10Y
   for(let i = 0;i < nameList.length; i++){
    text(nameList[i], 10, (20 + (i*lineDistance)));
   }

   //if print sort is pressed, run nameList array through bubble sort and reprint page

}


nameList.sort();

   users.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  let sortedNames = nameList.sort();
console.log(nameList);


function printSort(){
  //bubbleSort(nameList, nameList.length);
  //printSubmit();

  nameList.sort();

}

function printSubmit(){
 myName = input.value();
 addNameList();

  //nameList.push(myName);
}

function addNameList(){
  nameList.push(myName);
}


// references
// https://stackoverflow.com/questions/11777788/how-can-i-replace-text-thats-been-printed-out-on-screen-already-in-java Replacing text to make without deleting or reprinting new lines
// https://www.geeksforgeeks.org/sorting-algorithms-in-javascript/ bubble sorting
// https://www.freecodecamp.org/news/javascript-string-comparison-how-to-compare-strings-in-js/ for localeCompare
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length adding length to array and making print list good in draw
// https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/#:~:text=We%20can%20do%20this%20in,of%20objects%20with%20name%20users New sorting thing



/* testing for sorting thingy

let names =  ['ted','cindy', 'jack', 'andy', 'jason' ];
console.log(names);
var nameOrder;

names.sort();

users.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  let sortedNames = names.sort();
console.log(sortedNames);
  

function setup(){
    createCanvas(400,700);

}

function draw(){
    background('lightpink');

    text(names.sort(), 20, 20);


} */

    /*function bubbleSort(arr, n) {
    let swapped = false;
    for(let i = 0;i < n; i++){
        swapped = false;
        for(let j = 0 ; j < n - i -1; j++){
            nameOrder = arr[j].localeCompare(arr[j+1]);
            if( nameOrder = 1){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        
        if( swapped === false) break;
    }
    return arr;
}*/
// bubble sort may be wrong. Names will print when submitted, but are not sorted when
//sort is clicked. Sort repeats the last name in the array and prints them top and bottom

//create a new program to test bubble sort and a pre existing array. 
// find out if its actually sorting properly
