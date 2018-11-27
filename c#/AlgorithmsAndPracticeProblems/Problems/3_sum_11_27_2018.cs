using System;
using System.Collections;

namespace AlgosAndPracticeProblems
{
    public static class ThreeSumClass
    {
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

