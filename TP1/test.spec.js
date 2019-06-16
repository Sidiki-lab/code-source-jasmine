// Tp1: How to to use jasmine to test Node js Application

var app = require('./calculator');
describe('Addition', function() {
    
    it('The function should add 2 number', function() {
        var value = app.Addnumber(5,6);

        expect(value).toBe(11);
    }); 
});

