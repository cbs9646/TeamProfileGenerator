const Engineer = require("../library/engineer")


describe('Engineer', () => {


    describe('instantiation', () => {
        it('should pass and instantiate object correctly.', () => {
            // arrange
            let testEngineer = new Engineer ("Jason", 1, "jasong@gmail.com", "Engineer", "JasonG");
            //act
            //assert
            expect ()
            expect(testEngineer.name).toEqual("Jason")
            expect(testEngineer.id).toEqual(1)
            expect(testEngineer.email).toEqual("jasong@github.com")
            expect(testEngineer.role).toEqual("Engineer")
            expect(testEngineer.github).toEqual("JasonG")
        });
    });

    describe('get Github', () => {
        it('should return github link correctly.', () => {
            // arrange
            let testEngineer = new Engineer("Jason", 1, "jasong@gmail.com", "Engineer", "JasonG");
            //act
            let github = testEngineer.getGithub();
            //assert
            expect(github).toEqual("JasonG");
        });
    });
   
describe('get Role', () => {
        it('should return designated role correctly.', () => {
            // arrange
            let testEngineer = new Engineer("Jason", 1, "jasong@gmail.com", "Engineer", "JasonG");
            //act
            let github = testEngineer.getRole();
            //assert
            expect(role).toEqual("JasonG");
        });
    });
   
});
    
    
    






