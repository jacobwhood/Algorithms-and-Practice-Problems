using System.Collections;
using NUnit.Framework;

namespace AlgorithmsAndPracticeProblems
{
    [TestFixture]
    public class Roman_To_Integer_11_30_2018Tests
    {
        [Test]
        public void TestCase1()
        {
            int output = RomanToIntegerClass.RomanToInt("III");
            Assert.AreEqual(output, 3);
        }
        
        [Test]
        public void TestCase2()
        {
            int output = RomanToIntegerClass.RomanToInt("IV");
            Assert.AreEqual(output, 4);
        }
        
        [Test]
        public void TestCase3()
        {   
            int output = RomanToIntegerClass.RomanToInt("IX");
            Assert.AreEqual(output, 9);
        }
        
        [Test]
        public void TestCase4()
        {   
            int output = RomanToIntegerClass.RomanToInt("LVIII");
            Assert.AreEqual(output, 58);
        }
        
        [Test]
        public void TestCase5()
        {   
            int output = RomanToIntegerClass.RomanToInt("MCMXCIV");
            Assert.AreEqual(output, 1994);
        }
    }
}
