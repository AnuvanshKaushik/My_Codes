import pandas as pd

a = [1, 7, 2]

myvar = pd.Series(a)

print(myvar)
print(myvar[0])


b = [2.1, 2.3, 2.5]

myvar = pd.Series(b,index=["x","y","z"])

print(myvar)
print(myvar["y"])


c = {"x": 20, "y": 38, "z": 32}

myvar = pd.Series(c)

print(myvar)

d = {"x": 20, "y": 38, "z": 32}

myvar = pd.Series(d,index=["x","y"])

print(myvar)