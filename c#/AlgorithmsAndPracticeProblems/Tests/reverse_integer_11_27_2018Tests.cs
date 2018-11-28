using System.Collections;
using NUnit.Framework;

namespace AlgorithmsAndPracticeProblems
{
    [TestFixture]
    public class Reverse_integer_11_28_2018Tests
    {
        [Test]
        public void TestCase1()
        {   
            int output = ReverseIntegerClass.ReverseInteger(123);
            Assert.AreEqual(output, 321);
        }
        
        [Test]
        public void TestCase2()
        {
            int output = ReverseIntegerClass.ReverseInteger(-123);
            Assert.AreEqual(output, -321);
        }
        
        [Test]
        public void TestCase3()
        {
            int output = ReverseIntegerClass.ReverseInteger(120);
            Assert.AreEqual(output, 21);
        }
        
        [Test]
        public void TestCase4()
        {
            int output = ReverseIntegerClass.ReverseInteger(-2147483648);
            Assert.AreEqual(output, 0);
        }
        
        [Test]
        public void TestCase5()
        {
            int output = ReverseIntegerClass.ReverseInteger(1534236469);
            Assert.AreEqual(output, 0);
        }
        
         [Test]
        public void TestCase6()
        {
            int output = ReverseIntegerClass.ReverseInteger(-1563847412);
            Assert.AreEqual(output, 0);
        }
    }
}
