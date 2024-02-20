# Square Every Digit
# Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
# For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
# Note: The function accepts an integer and returns an integer.

# URL: https://www.codewars.com/kata/546e2562b03326a88e000020/python

def square_digits(num):
    new_num = ''

    for i in str(num):
        new_num += str(int(i) ** 2)
    
    return int(new_num)
