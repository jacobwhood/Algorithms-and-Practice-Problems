using System;
using System.Collections;

namespace AlgosAndPracticeProblems
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] example1 = { -1, 0, 1, 2, -1, -4 };
            int[] example2 = { -3, 0, 0, 2, 1, -4 };
            ArrayList output1 = ThreeSumClass.ThreeSum(example1);      // [[-1, 0, 1], [-1, -1, 2]]
            ArrayList output2 = ThreeSumClass.ThreeSum(example2);       // [[-3, 2, 1]]
            PrintOutput(output1);
            PrintOutput(output2);
            
        }
        
        static void PrintOutput(ArrayList arrayList)
        {
            for (int i = 0; i < arrayList.Count; i++)
            {
                int[] combo = (int[])arrayList[i];
                
                if (i == 0) Console.Write("[ [");
                else Console.Write(" [");
                for (int k = 0; k < combo.Length; k++)
                {
                    if (k == combo.Length - 1) Console.Write($"{combo[k]}");
                    else Console.Write($"{combo[k]}, ");
                }
                if (i == arrayList.Count - 1) Console.WriteLine("] ]");
                else Console.Write("], ");
            }
            
        }
    }
}
