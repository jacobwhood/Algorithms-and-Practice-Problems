using System;

namespace AlgorithmsAndPracticeProblems
{
    public static class ReverseIntegerClass
    {
        public static int ReverseClass(int x)
        {
            int result = 0;
            bool isNegative = x < 0 ? true : false;
            int copy = x;
            
            while (copy != 0)
            {
                int digit = copy % 10;
                result = result * 10 + digit;
                copy = (int)Math.Floor((double)(copy / 10));
            }

            if (isNegative)
                return result <= (Math.Pow(2, 31) * -1) ? 0 : result;
            else
                return result >= Math.Pow(2, 31) - 1 ? 0 : result;
        }
    }
}
