from numpy import random
import matplotlib.pyplot as plt
import seaborn as sns

a = random.normal(size=(2, 3))
b = random.normal(loc=1, scale=2, size=(2, 3))      #loc=mean and scale=S.D.
sns.distplot(random.normal(size=1000), hist=1)
sns.distplot(a, hist=1)

print(a)
print(b)
plt.show()