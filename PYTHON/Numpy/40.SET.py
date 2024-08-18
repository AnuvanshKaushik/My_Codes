import numpy as np

arr = np.array([1, 1, 1, 2, 3, 4, 5, 5, 6, 7])

print(np.unique(arr))

arr1 = np.array([1, 2, 3, 4])
arr2 = np.array([3, 4, 5, 6])

print(np.union1d(arr1, arr2))
print(np.intersect1d(arr1, arr2, assume_unique=True))

print(np.setdiff1d(arr1, arr2, assume_unique=True))

print(np.setxor1d(arr1, arr2, assume_unique=True))