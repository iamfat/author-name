var authorName = require('../index.js');
var assert = require("assert");

function _test(author, expect) {
    
    it('last name should be ' + expect.lastName, function(){
        assert.equal(expect.lastName, author.lastName);
    })
    
    it('first name should be ' + expect.firstName, function(){
        assert.equal(expect.firstName, author.firstName);
    })
    
    it('short name should be ' + expect.shortName, function(){
        assert.equal(expect.shortName, author.shortName());
    })
    
    if (expect.middleName) it('middle name should be ' + expect.middleName, function(){
        assert.equal(expect.middleName, author.middleName);
    })

    if (expect.fullNameFF) it('full name FF should be ' + expect.fullNameFF, function(){
        assert.equal(expect.fullNameFF, author.fullName(true));
    })

    if (expect.fullNameLF) it('full name LF should be ' + expect.fullNameLF, function(){
        assert.equal(expect.fullNameLF, author.fullName(false));
    })
    
}

describe('"Huang PhD, Jingyun Andrea"', function(){
   
    _test(new authorName('Huang, Jingyun Andrea'), {
        firstName: 'Jingyun',
        lastName: 'Huang',
        middleName: 'Andrea',
        shortName: 'Huang JA',
        fullNameFF: 'Jingyun Andrea Huang',
        fullNameLF: 'Huang, Jingyun Andrea'
    });

});

describe('"Huang, Jingyun Andrea"', function(){
   
    _test(new authorName('Huang, Jingyun Andrea'), {
        firstName: 'Jingyun',
        lastName: 'Huang',
        middleName: 'Andrea',
        shortName: 'Huang JA',
        fullNameFF: 'Jingyun Andrea Huang',
        fullNameLF: 'Huang, Jingyun Andrea'
    });

});

describe('"Jingyun Andrea Huang"', function(){
   
    _test(new authorName('Jingyun Andrea Huang'), {
        firstName: 'Jingyun',
        lastName: 'Huang',
        middleName: 'Andrea',
        shortName: 'Huang JA',
        fullNameFF: 'Jingyun Andrea Huang',
        fullNameLF: 'Huang, Jingyun Andrea'
    });

});

describe('"Huang JA"', function(){
   
    _test(new authorName('Huang JA'), {
        firstName: 'J',
        lastName: 'Huang',
        middleName: 'A',
        shortName: 'Huang JA',
        fullNameFF: 'J A Huang',
        fullNameLF: 'Huang, J A'
    });

});

describe('"Huang, JA"', function(){
   
    _test(new authorName('Huang, JA'), {
        firstName: 'J',
        lastName: 'Huang',
        middleName: 'A',
        shortName: 'Huang JA',
        fullNameFF: 'J A Huang',
        fullNameLF: 'Huang, J A'
    });

});

