var c = new Calculator();

describe('calculator', function () {

    describe('sum', function () {

        it('should calculate sum correctly', function () {
            expect(c.sum(1, 2)).toEqual(3);
            expect(c.sum(3, 3)).toEqual(6);
        });

    });

});
