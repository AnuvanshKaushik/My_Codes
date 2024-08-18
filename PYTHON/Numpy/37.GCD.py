import numpy as np

num1 = 4
num2 = 6

print(np.gcd(num1, num2))

arr = np.array([3, 6, 9])

print(np.gcd.reduce(arr))

arr = np.arange(1, 11)

print(np.gcd.reduce(arr))