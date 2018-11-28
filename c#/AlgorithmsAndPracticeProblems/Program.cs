using System;
using System.Collections;

namespace AlgorithmsAndPracticeProblems
{
    class Program
    {
        static void Main()
        {
            Console.WriteLine("Beginning execution");
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
