using System.Collections;
using NUnit.Framework;

namespace AlgorithmsAndPracticeProblems
{
    [TestFixture]
    public class Valid_Parentheses_12_4_2018Tests
    {
        [Test]
        public void TestCase1()
        {
            bool output = ValidParenthesesClass.isValid("()");
            Assert.IsTrue(output);
        }
        
        [Test]
        public void TestCase2()
        {
            bool output = ValidParenthesesClass.isValid("()[]{}");
            Assert.IsTrue(output);
        }
        
        [Test]
        public void TestCase3()
        {
            bool output = ValidParenthesesClass.isValid("(]");
            Assert.IsFalse(output);
        }
        
        [Test]
        public void TestCase4()
        {
            bool output = ValidParenthesesClass.isValid("([)]");
            Assert.IsFalse(output);
        }
    }
}
