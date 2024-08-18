import numpy as np

a = np.array([41, 42, 43, 44])

x = [True, False, True, False]

b = a[x]

print(b)




c = a > 42

d = a%2 ==0

e = a[c]

f = a[d]

print(c)
print(e)

print(d)
print(f)