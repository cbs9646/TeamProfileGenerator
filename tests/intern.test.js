const Intern = require("../library/intern");


describe('Intern', () => {


    describe('instantiation', () => {
        it('should pass and instantiate object correctly.', () => {
            // arrange
            let testIntern = new Intern ("Jason", 1, "jasong@gmail.com", "University of Texas");
            //act
            //assert
            expect(testIntern.school).toBe("University of Texas")
        });
    });

    describe('getSchool', () => {
        it('should return school name correctly.', () => {
            // arrange
            let testIntern = new Intern ("Jason", 1, "jasong@gmail.com", "University of Texas");
            //act
            let school = testIntern.getSchool();
            //assert
            expect(school).toBe("University of Texas");
        });
    });

    
});
    