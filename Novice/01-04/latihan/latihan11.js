var myArray = /d(b+)d/g.exec('cdbbdbsbz'); 
    // similar to "cdbbdbsbz".match(/d(b+)d/g); however,
    // "cdbbdbsbz".match(/d(b+)d/g) outputs Array [ "dbbd" ], while 
    // /d(b+)d/g.exec('cdbbdbsbz') outputs Array [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ].