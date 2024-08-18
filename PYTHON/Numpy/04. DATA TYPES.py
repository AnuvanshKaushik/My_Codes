# i - integer
# b - boolean
# u - unsigned integer
# f - float
# c - complex float
# m - timedelta
# M - datetime
# O - object
# S - string
# U - unicode string
# V - fixed chunk of memory for other type ( void )

import numpy as np

a = np.array([1, 2, 3, 4])
b = np.array(['apple', 'banana', 'cherry'])

print(a.dtype)
print(b.dtype)

c = np.array([1, 2, 3, 4],dtype='f')
d = c.astype('i')

print(c.dtype)
print(c)
print(d)