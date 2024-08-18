import numpy as np

a = np.array([[1,2],[3,4]])

b = np.array([[4,5],[6,7]])

c = np.concatenate((a, b))

print(c)

d = np.concatenate((a, b), axis=1)

print(d)

e = np.array([[[1, 2, 3],[1, 2, 3],[1, 2, 3]]])

f = np.array([[[4, 5, 6],[4, 5, 6],[4, 5, 6]]])

g = np.concatenate((e, f), axis=2)

print(g)

h = np.stack((e, f), axis=2)

print(h)

arr1 = np.array([1, 2, 3])

arr2 = np.array([4, 5, 6])

arr3 = np.hstack((arr1, arr2))
arr4 = np.vstack((arr1, arr2))
arr5 = np.dstack((arr1, arr2))
print(arr3)
print(arr4)
print(arr5)