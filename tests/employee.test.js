const { expect } = require("@jest/globals");
const { generateMapFileComment } = require("convert-source-map");
const { getMaxListeners } = require("process");
const Employee = require("../library/employee");


describe('Employee', () => {


    describe('instantiation', () => {
        it('should pass and instantiate object correctly ', () => {
            // arrange
            let testEmployee = new Employee ("Jason", 1, "jasong@gmail.com");
            //act
            //assert
            expect(testEmployee.name).toBe("Jason")
            expect(testEmployee.id).toBe(1)
            expect(testEmployee.email).toBe("jasong@gmail.com")
        });
    });

    describe('getEmail', () => {
        it('should return email correctly.', () => {
            // arrange
            let testEmployee = new Employee("Jason", 1, "jasong@gmail.com");
            //act
            let email = testEmployee.getEmail();
            //assert
            expect(email).toBe("jasong@gmail.com");
        });
    });

    describe('getId', () => {
        it('should return id correctly.', () => {
            // arrange
            let testEmployee = new Employee("Jason", 1, "jasong@gmail.com");
            //act
            let id = testEmployee.getId();
            //assert
            expect(id).toBe(1);
        });
    });

    describe('getName', () => {
        it('should return name correctly.', () => {
            // arrange
            let testEmployee = new Employee("Jason", 1, "jasong@gmail.com");
            //act
            let name = testEmployee.getName();
            //assert
            expect(name).toBe("Jason");
        });
    });

    describe('getRole', () => {
        it('should return role correctly.', () => {
            // arrange
            let testEmployee = new Employee("Jason", 1, "jasong@gmail.com");
            //act
            let role = testEmployee.getRole();
            //assert
            expect(role).toBe();
        });
    });
    




});