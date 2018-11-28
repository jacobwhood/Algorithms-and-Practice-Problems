using System.Collections;
using NUnit.Framework;

namespace AlgorithmsAndPracticeProblems
{
    [TestFixture]
    public class Three_sum_11_27_2018Tests
    {
        [Test]
        public void TestCase1()
        {
            int[] example1 = { -1, 0, 1, 2, -1, -4 };
            
            ArrayList output = ThreeSumClass.ThreeSum(example1);
            ArrayList expected = new ArrayList
            {
                new int[] { -1, 0, 1 },
                new int[] { -1, -1, 2 }
            };

            CollectionAssert.AreEquivalent(output, expected);
        }
        
        [Test]
        public void TestCase2()
        {
            int[] example2 = { -3, 0, 0, 2, 1, -4 };
            
            ArrayList output = ThreeSumClass.ThreeSum(example2);
            ArrayList expected = new ArrayList
            {
                new int[] { -3, 1, 2 },
            };

            CollectionAssert.AreEquivalent(output, expected);
        }
    }
}
