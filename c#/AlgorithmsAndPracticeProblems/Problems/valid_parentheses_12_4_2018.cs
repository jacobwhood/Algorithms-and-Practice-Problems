using System;
using System.Collections;

namespace AlgorithmsAndPracticeProblems
{
    public static class ValidParenthesesClass
    {
        /*
         * Valid Parentheses
         * 
         * Given a string containing just the characters '(', ')', '{', '}', '[', ']', determine
         * if the input string is valid
         * 
         * An input string is valid if:
         *   1. Open brackets must be closed by the same type of brackets.
         *   2. Open brackets must be clsoed in the correct order.
         * 
         * Example 1:
         * Input: '()'
         * Output: true
         * 
         * Example 2:
         * Input: '()[]{}'
         * Output: true
         * 
         * Example 3:
         * Input: '(]'
         * Output: false
         * 
         * Example 4:
         * Input: '([)]'
         * Output false
         * Complexity Analysis:
         *   Time: O(n), where n is length of input string
         *   Space: O(1), additional space does not grow with size of input
         * 
        */
        public static bool isValid(string s)
        {
            Stack stack = new Stack();
            
            string brace = "";
            
            Hashtable matchingOpenBrace = new Hashtable()
            { 
                {")","("},
                {"}","{"},
                {"]", "["}
            };
            
            Hashtable openingBraces = new Hashtable()
            {
                {"(", "("},
                {"{", "{"},
                {"[", "["}
            };
            
            Hashtable closingBraces = new Hashtable()
            {
                {")", ")"},
                {"}", "}"},
                {"]", "]"}
            };
            
            foreach (char c in s)
            {
                if (openingBraces.ContainsKey(c.ToString()))
                {
                    stack.Push(c.ToString());
                }
                else if (closingBraces.ContainsKey(c.ToString()))
                {
                    if (stack.Count == 0) return false;
                    
                    brace = stack.Pop().ToString();
                    
                    if (brace != matchingOpenBrace[c.ToString()].ToString())
                    {
                        return false;
                    }
                }
            }
            
            try
            {
                if (stack.Pop() != null)
                {
                    return false;
                }
            }
            catch(InvalidOperationException e)
            {
                // expected behavior
                Console.WriteLine(e);
            }
            
            
            
            return true;
        }
    }
}
