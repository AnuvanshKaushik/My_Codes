import numpy as np

a = np.array([1, 2, 3, 4, 5])

x = a.copy()
y = a.view()

x[0] = 42

print(x)
print(y)

print(x.base)
print(y.base)