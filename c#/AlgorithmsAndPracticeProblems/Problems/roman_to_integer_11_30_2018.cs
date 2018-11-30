using System;
using System.Collections;

namespace AlgorithmsAndPracticeProblems
{
    public static class RomanToIntegerClass
    {
        
        public static int RomanToInt(string s)
        {
            Hashtable NUMERAL_VALUES = new Hashtable() {
                {'I', 1},
                {'V', 5},
                {'X', 10},
                {'L', 50},
                {'C', 100},
                {'D', 500},
                {'M', 1000}
            };
            
            int result = 0;
            
            for (int i = 0; i < s.Length; i++)
            {
                char c = s[i];

                if (!NUMERAL_VALUES.ContainsKey(c))
                {
                    return -1;
                }
                else
                {
                    if ( i + 1 < s.Length && (int)NUMERAL_VALUES[c] < (int)NUMERAL_VALUES[s[i+1]] )
                    {
                        result -=(int)NUMERAL_VALUES[c];
                    }
                    else
                    {
                        result += (int)NUMERAL_VALUES[c];
                    }
                }
                
            }


            return result;
        }
    }
}
