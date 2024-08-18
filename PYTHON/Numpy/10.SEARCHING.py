import numpy as np

a = np.array([1, 2, 3, 4, 5, 4, 4])

b = np.where(a == 4)

c=np.where(a%2 == 0)

d = np.searchsorted(a, 7)

e =  np.searchsorted(a, 7, side='right')

f = np.searchsorted(a, [2, 4, 6])

g = np.searchsorted(a, [2, 4, 6],side='right')

print(b)
print(c)
print(d)
print(e)
print(f)
print(g)