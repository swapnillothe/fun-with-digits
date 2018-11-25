const { deepEqual } = require( 'assert');
const { 
  getResult, 
  getAllCombination, 
  readUserInput, 
  generateOperaterCombinations,
  cycleGenerator,
  combiner,
  make2dArray
} = require( '../src/lib.js' );

describe('getResult' ,function(){
  it('should works for no combination',function(){
    deepEqual( getResult( { num: "1234", value:"12" }), [] );
  });
  it('should works for one combination',function(){
    deepEqual( getResult( { num: "12", value:  "3" }),[ '1+2' ]);
  });
  it('should works for multiple combinations',function(){
    deepEqual( getResult( { num: "1234", value:"10" }),[ '1+2+3+4', '1*2*3+4' ])
  });
});

describe('getAllCombination' ,function(){
  it('should works for one combination',function(){
    deepEqual( getAllCombination( "1", "1"), [ "1" ] );
  });
  it('should works for multiple combinations',function(){
    deepEqual( getAllCombination( "12", "1"), [ '1+2', '1-2', '1*2', '1/2', '12' ] );
  });
});

describe('readUserInput' ,function(){
  it('should works',function(){
    deepEqual( readUserInput( [,, "12", "1"]), { num: '12', value: 1 } );
  });
});

describe('generateOperaterCombinations' ,function(){
  it('should works with no length',function(){
    deepEqual( generateOperaterCombinations( 0 ), [ [] ]);
  });
  it('should works with one length',function(){
    deepEqual( generateOperaterCombinations( 1 ), [ [ '+' ], [ '-' ], [ '*' ], [ '/' ], [ '' ] ] );
  });
  it('should works with multiple length',function(){
    deepEqual( generateOperaterCombinations( 2 ), [['+','+'],['-','+'],['*','+'],['/','+'],['','+'],['+','-'],['-','-'],['*','-'],['/','-'],['','-'],['+','*'],['-','*'],['*','*'],['/','*'],['','*'],['+','/'],['-','/'],['*','/'],['/','/'],['','/'],['+',''],['-',''],['*',''],['/',''],['','']] );
  });
});

describe('cycleGenerator' ,function(){
  it('should works for 1 times',function(){
    let cycle = cycleGenerator( 1 );
    deepEqual( cycle(), "+" );
    deepEqual( cycle(), "-" );
    deepEqual( cycle(), "*" );
    deepEqual( cycle(), "/" );
    deepEqual( cycle(), "" );
  });
  it('should works for multiple times',function(){
    let cycle = cycleGenerator( 2 );
    deepEqual( cycle(), "+" );
    deepEqual( cycle(), "+" );
    deepEqual( cycle(), "-" );
    deepEqual( cycle(), "-" );
    deepEqual( cycle(), "*" );
    deepEqual( cycle(), "*" );
    deepEqual( cycle(), "/" );
    deepEqual( cycle(), "/" );
    deepEqual( cycle(), "" );
    deepEqual( cycle(), "" );
  });
});

describe('combiner' ,function(){
  it('should works for single element with single element',function(){
    let combine = combiner( [ "1" ] );
    deepEqual( combine( [ "+" ] ), "1+" );
  });
  it('should works for multiple elements with multiple elements',function(){
    let combine = combiner( [ "1", "2" ] );
    deepEqual( combine( [ "+", "-" ] ), "1+2-" );
  });
});

describe('make2dArray' ,function(){
    it('should works for no element',function(){
      deepEqual( make2dArray( 0 ), [] );
    });
    it('should works for single element',function(){
      deepEqual( make2dArray( 1 ), [ [] ] );
    });
    it('should works for multiple elements',function(){
      deepEqual( make2dArray( 2 ), [ [], [] ] );
    });
});
