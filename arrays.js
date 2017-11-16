var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray (x,y) {
  ["y",...x];
  return(x)
}
function destructivelyAddElementToBeginningOfArray (x,y) {
  x.unshift(y);
  return(x)
}
function addElementToEndOfArray (){}
function destructivelyAddElementToEndOfArray (){}
function accessElementInArray (){}
function destructivelyRemoveElementFromBeginningOfArray (){}
function removeElementFromBeginningOfArray (){}
function destructivelyRemoveElementFromEndOfArray (){}
function removeElementFromEndOfArray (){}
