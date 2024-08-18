import numpy as np

arr1 = np.array([1, 2, 3, 4])
arr2 = np.array([5, 6, 7, 8])

a = np.prod(arr1)

b = np.prod([arr1, arr2])

c = np.prod([arr1, arr2], axis=1)

d = np.cumprod(arr1)

print(a)
print(b)
print(c)
print(d)