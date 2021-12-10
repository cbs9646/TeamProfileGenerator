const Engineer = require("../library/engineer")


describe('Engineer', () => {


    describe('instantiation', () => {
        it('should pass and instantiate object correctly.', () => {
            // arrange
            let testEngineer = new Engineer ("Jason", 1, "jasong@gmail.com", "jasong@github.com");
            //act
            //assert
            expect(testEngineer.github).toBe("jasong@github.com")
        });
    });

    describe('getGithub', () => {
        it('should return github link correctly.', () => {
            // arrange
            let testEngineer = new Engineer("Jason", 1, "jasong@gmail.com", "jasong@github.com");
            //act
            let github = testEngineer.getGithub();
            //assert
            expect(github).toBe("jasong@github.com");
        });
    });

    
});
    




