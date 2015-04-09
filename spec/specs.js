describe('scrabbler', function(){

    it("returns 1 for an entry of the word 'A'.", function(){
        expect(scrabbler("A")).to.equal(1);
    });

    it("returns 1 for an entry of the word 'E'.", function(){
        expect(scrabbler("E")).to.equal(1);
    });

    it("returns 2 for an entry of the word 'AE'.", function(){
        expect(scrabbler("AE")).to.equal(2);
    });

    it("returns 4 for an entry of the word 'F'.", function(){
        expect(scrabbler("F")).to.equal(4);
    });

    it("returns 13 for an entry of the word 'fox'.", function(){
        expect(scrabbler("fox")).to.equal(13);
    });


});
