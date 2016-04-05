TSTest
======

TSTest is a simple unit testing library for TypeScript.

Unit tests are classes that extend the TSTest.UnitTest class. Test methods must start with "test", e.g. "testSomething()". This allows you to have any other supporting methods inside your unit test class. You may also implement setUp() and tearDown() methods. The setUp() method is called before any tests are run and tearDown() is called after all tests have run.

    class MyUnitTest extends TSTest.UnitTest
    {
        public testSomething()
        {
            //...
        }
    }
            
Next you use the built-in Assert class to implement tests. Assert has the following assertion methods. They all take a name parameter which you can use to uniquely identify tests to help you find them when there are failures.

* isTrue(bool, name)
* isFalse(bool, name)
* areIdentical(expected, actual, name) - Determines if two objects are identical using strict equality operator (===)
* notIdentical(expected, actual, name) - Determines if two objects are not identical using strict equality operator (===)
* areEqual(expected, actual, name) - Determines if two objects are equal using equality operator (==)
* notEqual(expected, actual, name) - Determines if two objects are not equal using equality operator (==)

Please note that TSTest does not supply methods to check if two objects or arrays are identical. It only uses the equality operators therefore only primitive types (string, number, bool) are correctly compared.

    public testSomething()
    {
        this.assert.areEqual(4, add(3, 1), "add(3, 1) is 4");
    }
            
Once you have unit tests you can create a test suite and add your unit tests to them.

    var testSuite = new TSTest.UnitTestSuite();
    testSuite.addUnitTest(new MyUnitTest());
            
Results are printed out to the browser's console window by default. If you would also like the results printed to your web page you can add an element logger.

    testSuite.addLogger(new ElementLogger());
            
When your test suite is all set up you run it.

    testSuite.run();
            
That's it! Happy unit testing.
