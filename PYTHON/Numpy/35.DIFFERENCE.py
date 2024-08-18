import numpy as np

arr = np.array([10, 15, 25, 5])

print(np.diff(arr))

print(np.diff(arr, n=2))

print(np.diff(arr, n=3))