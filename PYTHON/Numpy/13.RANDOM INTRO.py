import numpy as np
from numpy import random

x=random.randint(200)
print(x)
y= random.rand()
print(y)
y= random.uniform(1,10)
print(y)

x=random.randint(200,size=(7))
print(x)

x=random.randint(100,size=(3,5))
print(x)

z= random.rand(3,5)
print(z)

r = random.choice([3, 5, 7, 9])
print(r)


r = random.choice([3, 5, 7, 9],size=(3,4))
print(r)

t=random.seed(1)
print(t)

z=random.rand(4)
print(z)
