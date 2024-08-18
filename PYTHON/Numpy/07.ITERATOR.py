import numpy as np

a = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])

for x in np.nditer(a, flags=['buffered'], op_dtypes=['S']):
   print(x)

for x in np.nditer(a):
   print(x)


for x in np.nditer(a[:,:,1:3:1]):            #[:,from:till:skip]
  print(x)


for idx, x in np.ndenumerate(a):
  print(idx, x)