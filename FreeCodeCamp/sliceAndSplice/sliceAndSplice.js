
const arr1 = [[1,2,3],[4,5,6],[7,8,9]];
const arr2 = [[1,2],["a","b"],[7,8]];
const arr3 =["head", "shoulders", "claw", "tentacle", "knees", "toes","feet","eyes","tongue"];
// let n =3;
let copy1 = [];
let copy2 = [];

function frankenSplice(arr1, arr2, n) {
  const copy1 = arr1.slice();
  const copy2 = arr2.slice();
  copy2.splice(n, 0, ...copy1);
  return copy2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 2)); //Should return [4,5,1,2,3,6]
console.log(frankenSplice([1, 2], ['a', 'b'], 1)); //Should return ["a", 1, 2, "b"]

  //Should return
 console.log(frankenSplice(["head", "shoulders", "claw","tentacle"], ['head', 'shoulders', 'knees', "toes","feet","eyes","tongue"], 2));)
); //Should return ["head","shoulders","head","shoulders","claw","tentacle","knees","toes","feet","eyes","tongue"]
