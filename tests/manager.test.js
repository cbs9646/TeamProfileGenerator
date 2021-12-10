const Manager = require("../library/manager");


describe('Manager', () => {


    describe('instantiation', () => {
        it('should pass and instantiate object correctly.', () => {
            // arrange
            let testManager = new Manager ("Jason", 1, "jasong@gmail.com", 300);
            //act
            //assert
            expect(testManager.officeNumber).toBe(300)
        });
    });

    describe('getOfficeNumber', () => {
        it('should return office number correctly.', () => {
            // arrange
            let testManager = new Manager("Jason", 1, "jasong@gmail.com", 300);
            //act
            let officeNumber = testManager.getOfficeNumber();
            //assert
            expect(officeNumber).toBe(300);
        });
    });

    
});
    