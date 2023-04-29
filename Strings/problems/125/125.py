
# O(n) space o(n^2) time
def isPalindrome(string):
    reversedChars =""
    for i in reversed(range(len(string))):
        reversedChars+= string[i]

    return reversedChars == string

# O(n) space O(n) time
def isPalindrome2(string):
    reversedStringArr =[]
    for i in reversed(range(len(string))):
        reversedStringArr.append(string[i])

    return "".join(reversedStringArr) == string



print(isPalindrome("abaa"))
print(isPalindrome2("aba"))