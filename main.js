const { getResult, readUserInput } = require('./src/lib.js');

const main = function(){
  console.log( getResult( readUserInput( process.argv ) ) );
}

main();
