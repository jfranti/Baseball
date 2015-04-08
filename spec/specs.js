describe('roman', function(){

    it("it counts a 1 as a I", function(){
        expect(roman(1)).to.equal('I');
    });
    it("it counts a 5 as a V", function(){
        expect(roman('5')).to.equal('V');
    });
    it("it counts a 10 as a X", function(){
        expect(roman(10)).to.equal('X');
    });
    it("it counts a 19 as a XVIIII", function(){
        expect(roman(19)).to.equal('XVIIII');
    });
    it("it counts 2545 as a MMDXXXXV", function(){
        expect(roman(2545)).to.equal('MMDXXXXV');
    });
    it("it counts 4 as a IV", function(){
        expect(roman(4)).to.equal('IV');
    });
    it("it counts 9 as a IX", function(){
        expect(roman(9)).to.equal('IX');
    });
});
