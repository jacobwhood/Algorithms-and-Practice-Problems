using System;

namespace AlgorithmsAndPracticeProblems
{
    public static class ReverseIntegerClass
    {
        /*
        *   Reverse Integer
        *    Given a 32-bit signed integer, reverse digits of an integer.
        *
        *   Complexity analysis:
        *     - Time:  O(n), where n is number of digits in x
        *     - Space: O(1), additional space allocation does not grow with size of input
        */
        public static int ReverseInteger(int x)
        {
            Int64 result = 0;
            bool isNegative = x < 0 ? true : false;
            int copy = x;
            
            
            while (copy != 0)
            {
                int digit = copy % 10;
                result = result * 10 + digit;
                copy = (int)Math.Floor((double)(copy / 10));
            }

            if (isNegative)
                return result <= (Math.Pow(2, 31) * -1) ? 0 : (int)result;
            else
                return result >= Math.Pow(2, 31) - 1 ? 0 : (int)result;
        }
    }
}
