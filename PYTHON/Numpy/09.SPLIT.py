import numpy as np

a = np.array([1, 2, 3, 4, 5, 6,7])

a1 = np.array_split(a, 4)

b = np.array([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12]])

b1 = np.array_split(b, 4)

c = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18]])

c1 = np.array_split(c, 4)

print(a1)
print(b1)
print(c1)