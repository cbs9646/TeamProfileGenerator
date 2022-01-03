const Manager = require("../library/manager");


describe('Manager', () => {


    describe('instantiation', () => {
        it('should pass and instantiate object correctly.', () => {
            // arrange
            let testManager = new Manager ("Jason", 1, "jasong@gmail.com", "Manager", 300);
            //act
            //assert
            expect(testManager.name).toEqual("Jason");
            expect(testManager.id).toEqual(1);
            expect(testManager.email).toEqual("jasong@gmail.com");
            expect(testManager.role).toEqual("Manager");
            expect(testManager.officeNumber).toEqual(300);
            
            
        });
    });

    describe("get Role", () => {
        it("should return role", () => {
            let testManager = new Manager ("Jason", 1, "jasong@gmail.com", "Manager", 300);
            let role = testManager.getRole();
            expect(role).toEqual("Manager");
        });
    });

    describe('getOfficeNumber', () => {
        it('should return office number correctly.', () => {
            // arrange
            let testManager = new Manager("Jason", 1, "jasong@gmail.com", 300);
            //act
            let officeNumber = testManager.getOfficeNumber();
            //assert
            expect(officeNumber).toEqual(300);
        });
    });

    
});
    