using System;
using System.Collections;

namespace AlgorithmsAndPracticeProblems
{
    public static class ThreeSumClass
    {
    
        /*
         * 3 sum
         * Given an array nums of n integers, are there elements a, b, c in nums such 
         * that a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.
         * 
         * Note:
         * The solution set must not contain duplicate triplets.
         * 
         * https: //leetcode.com/problems/3sum/description/   
         *   3 Sum
         *
         *   Complexity analysis:
         *     - Time:  O(n^2), where n is number of elements in nums
         *     - Space: O(n), where n is number of elements in nums
        */
        public static ArrayList ThreeSum(int[] nums) {
            Array.Sort(nums);
            ArrayList combos = new ArrayList();
        
            for (int indexA = 0; indexA < nums.Length - 2; indexA++)
            {
                int a = nums[indexA];
                if (a > 0) return combos;
                if (indexA - 1 >= 0 && a == nums[indexA - 1]) continue;
                int indexB = indexA + 1;
                int indexC = nums.Length - 1;
                
                while (indexB < indexC) {
                    int b = nums[indexB];
                    int c = nums[indexC];
                    int sum = a + b + c;
        
                    if (sum == 0) combos.Add(new int[] { a, b, c });
                    
                    if (sum >= 0) {
                        while (nums[indexC - 1] == c) indexC--;
                        indexC--;
                    }
                    if (sum <= 0) {
                        while (nums[indexB + 1] == b) indexB++;
                        indexB++;
                    }
                }
            }
        
            return combos;
        }
 
    }   
}
