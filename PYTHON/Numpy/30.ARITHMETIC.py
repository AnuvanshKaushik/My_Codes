import numpy as np

arr1 = np.array([10, 11, 12, 13, 14, 15])
arr2 = np.array([2, 3, 2, 4, 4, 5])

a = np.add(arr1, arr2)
b = np.subtract(arr1, arr2)
c = np.multiply(arr1, arr2)
d = np.divide(arr1, arr2)
e = np.power(arr1, arr2)
f = np.mod(arr1, arr2)
g = np.remainder(arr1, arr2)
h = np.divmod(arr1, arr2)
i = np.absolute(arr1)

print(a)
print(b)
print(c)
print(d)
print(e)
print(f)
print(g)
print(h)
print(i)