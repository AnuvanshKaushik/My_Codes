from numpy import random
import numpy as np

a = np.array([1, 2, 3, 4, 5])


random.shuffle(a)

print(a)

print(random.permutation(a))

print(a)