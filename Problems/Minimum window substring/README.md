Problem:

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.


Solution:

To solve this problem we employ the use of the sliding window technique, in the case of the input being a string we use a hashmap as our sliding window.
I also create a hashmap to create a mapping of the characters in the substring and the required count of the characters.

we then initialize two integers representing our "have" and "need" 

Using the window we will iterate over the input string and check to validate if the needed requirements are satisfied, when the current window satifies the requirements we shrink the window