import numpy as np

def myadd(x, y, z):
  return 2*x+y+z

myadd = np.frompyfunc(myadd, 3, 1)

print(myadd(3,1,1))

print(myadd([1, 2, 3, 4], [5, 6, 7, 8],[9,10,11,12]))