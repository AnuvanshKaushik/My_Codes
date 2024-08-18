import numpy as np

arr1 = np.array([1, 2, 3])
arr2 = np.array([1, 2, 3])

a = np.add(arr1, arr2)
b = np.sum([arr1, arr2])
c = np.sum([arr1, arr2], axis=1)
d = np.cumsum(arr1)

print(a)
print(b)
print(c)
print(d)