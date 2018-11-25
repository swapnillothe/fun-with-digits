const { deepEqual } = require('assert');

const make2dArray = function(length){
  return new Array(length).fill("").map(x=>[]);
}

const combiner = function( list1 ){
  return function( list2 ){
    let index = 0;
    list2.push("");
    return list1.map(x=>x+list2[index++]).join("");
  }
}

const cycleGenerator = function(times){
  let array = [ "+", "-", "*", "/", "" ];
  let index = 0;
  return function(){
    let i = Math.floor((index++)/times);
    return array[i%array.length];
  }
}

const generateOperaterCombinations = function(combinationLength){
  let operatorCombinations = make2dArray(Math.pow(5,combinationLength));
  for(let column=0; column<combinationLength; column++){
    let cycle = cycleGenerator(Math.pow(5,column));
    for(let row = 0; row < Math.pow(5, combinationLength); row++) {
      operatorCombinations[row][column] = cycle();
    }
  }
  return operatorCombinations;
}


const getAllCombination = function( number, numberToCheck ){
  let oprantCombo = generateOperaterCombinations( number.length-1 );
  let digits = number.split("");
  let combine = combiner( digits );
  return oprantCombo.map(combine);
}

const readUserInput = function( args ){
  let providedNumber = args[2];
  let requiredValue = +args[3];
  return { num: providedNumber, value: requiredValue };
}

const getResult = function( args ){
  let number = args.num;
  let numberToCheck = args.value;
  let combos = getAllCombination( number, numberToCheck );
  return combos.filter(x=>eval(x)==numberToCheck);
}

deepEqual( getResult( { num: "1234", value:"10" }),[ '1+2+3+4', '1*2*3+4' ])
deepEqual( getResult( { num: "123", value:  "6" }),[ '1+2+3', '1*2*3' ])

exports.getResult = getResult;
exports.readUserInput = readUserInput;
exports.getAllCombination = getAllCombination;
exports.readUserInput = readUserInput;
exports.generateOperaterCombinations = generateOperaterCombinations;
exports.cycleGenerator = cycleGenerator;
exports.combiner = combiner;
exports.make2dArray = make2dArray;
