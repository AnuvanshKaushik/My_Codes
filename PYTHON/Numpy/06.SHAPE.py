import numpy as np

a = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])

print(a.shape) 

b = np.array([1, 2, 3, 4], ndmin=5)

print(b)
print(b.shape)

c = np.array([1], ndmin=5)

print(c.shape)


d = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

e = d.reshape(4, 3)

f = d.reshape(3,2,2)

g =  d.reshape(2,2,-1)

h = f.reshape(-1)

print(e)

print(f)

print(g)

print(h)