/// <reference path="../TSTest.ts" />
class Calculator
{
    public add(a: number, b: number): number
    {
        return a + b;
    }
    public subtract(a: number, b: number): number
    {
        return a - b;
    }
}

class CalculatorUnitTests extends TSTest.UnitTest
{
    private calculator: Calculator;

    // Override setUp to create the calculator instance
    public setUp()
    {
        this.calculator = new Calculator();
    }
    // Override tearDown to remove the calculator instance
    public tearDown()
    {
        this.calculator = null;
    }

    // Test methods must begin with "test"
    public testAdd()
    {
        this.assert.areIdentical(4, this.calculator.add(3, 1), "add(3, 1) is 4");
        this.assert.notIdentical(5, this.calculator.add(3, 1), "add(3, 1) is not 5");
    }
    public testSubtract()
    {
        this.assert.areIdentical(4, this.calculator.subtract(5, 1), "subtract(5, 1) is 4");
        this.assert.notIdentical(5, this.calculator.subtract(5, 1), "subtract(5, 1) is not 5");
    }
}

window.addEventListener("DOMContentLoaded", () =>
{
    var testSuite = new TSTest.UnitTestSuite();
    // Log out to document
    testSuite.addLogger(new TSTest.ElementLogger());
    // Add our unit tests
    testSuite.addUnitTest(new CalculatorUnitTests());
    // Run it
    testSuite.run();
});