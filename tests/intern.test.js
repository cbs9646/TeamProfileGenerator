const Intern = require("../library/intern");


describe('Intern', () => {


    describe('instantiation', () => {
        it('should pass and instantiate object correctly.', () => {
            // arrange
            let testIntern = new Intern ("Jason", 1, "jasong@gmail.com", "Intern", "University of Texas");
            //act
            //assert
            expect(testIntern.name).toEqual("Jason");
            expect(testIntern.id).toEqual(1);
            expect(testIntern.email).toEqual("jasong@gmail.com");
            expect(testIntern.role).toEqual("Intern");
            expect(testIntern.school).toEqual("University of Texas");
        });
    });

    describe('getSchool', () => {
        it('should return school name correctly.', () => {
            // arrange
            let testIntern = new Intern ("Jason", 1, "jasong@gmail.com", "Intern", "University of Texas");
            //act
            let school = testIntern.getSchool();
            //assert
            expect(school).toEqual("University of Texas");
        });
    });
    
    describe('getRole', () => {
        it('should return school name correctly.', () => {
            // arrange
            let testIntern = new Intern ("Jason", 1, "jasong@gmail.com", "Intern", "University of Texas");
            //act
            let role = testIntern.getRole();
            //assert
            expect(role).toEqual("Intern");
        });
    });

    
});
    